import React from 'react'
import {Component} from 'react'
import {
    getUserNews,
    getUserInfo,
    setFollow,
    setUnFollow,
    isFollowing
} from 'functions/Display_users/displayUserFunctions'
import PageTemplate from 'components/main/PageTemplate'
import NewsDisplayList from 'components/new_display/NewsDisplayList'
import Pagination from 'ui/common/pagination/pagination'
import UserInfoCard from 'ui/accounts/UserDisplayInfo'
import FlashMessage from 'components/main/Flash'
import {getNewsToDisplay} from "root/store/functions/Display_news/displayNewsFunctions";


class PublicUserContainer extends Component{
    constructor(props){
        super(props)
        this.username = this.props.match.params.username
        var userSaved = JSON.parse(localStorage.getItem('user'));
        this.state = {
            message: '',
            loggedIn: (userSaved) ? true : false,
            userInfo :{
                about_me: '',
                publishNews: 0,
                followers: 0,
                location:'',
            },
            DisplayNews: {
                news:[],
                newsPerPage: 2.00,
                presentPage: 1,
                beginPag: [],
                endPag: [],
                pages: 0,
            },
            following: false,
        }
        this.goToPage = this.goToPage.bind(this)
        this.follow = this.follow.bind(this)
        this.stopFollowing = this.stopFollowing.bind(this)
        this.removeMessage = this.removeMessage.bind(this)
    }

    componentDidMount(){
        /*
            Get user public info (location, about me ...), published news in a paginated way & create pagination.

                getUserInfo - Get user public information, number of created news and calculate the number of pages
                for the pagination component.
                getUserNews - Get user created News in a paginated way and set initial pagination arrays.
         */

        isFollowing(this.username)
            .then(response => {
                return this.setState({
                    ...this.state,
                    following: response['following']
                })
            })
            .catch(error => {
                return this.setState({
                    ...this.state,
                    following: false
                })
            })

        /*
            It is necessary to first get user information 'getUserInfo' and then get user news 'getUserNews'
            in that order.
         */
        getUserInfo(this.username).
            then(userData => {
                return this.setState({
                    ...this.state,
                    userInfo:{
                        ...this.state.userInfo,
                        about_me: userData.about_me,
                        location: userData.location,
                        publishNews:userData.user_created_new,
                        followers: userData.user_rel_followed,
                    },
                    DisplayNews:{
                        ...this.state.DisplayNews,
                        pages: Math.ceil(parseFloat(userData.user_created_new).toFixed(2) / this.state.DisplayNews.newsPerPage),
                    }
                })
            }).then(result => {
                    return getUserNews(this.username).
                        then(userNews => {
                            return this.setState({
                                ...this.state,
                                DisplayNews: {
                                    ...this.state.DisplayNews,
                                    news: userNews,
                                    beginPag: this.setBeginPages(this.state.DisplayNews.pages),
                                    endPag:this.setEndPages(this.state.DisplayNews.pages)
                                }
                            })
                        })
            })
            .catch(error => {
                this.setState({
                    message: error
                })
            })

    }


    setBeginPages(pages){
        /*
            Create begin pagination array
         */

        //if there is more than 7 pages, then it always initialize to 1, 2 & 3
        if(pages >= 7 ){
            return [1, 2, 3]
        } else{
            //if there is less than 7 pages there is no begin and end, all together in one block.
            var pagesArray = []
            for(var i=1; i <= pages; i++){
                pagesArray.push(i);
            }
            return pagesArray;
        }
    }

    setEndPages(pages){
        var pagesArray = []
        //if there are more than 7 pages it is required to create two pagination blocks
        if(pages >= 7 ) {
            for(var i=(pages-2); i <= pages; i++){
                pagesArray.push(i);
            }
        }
        //if less than 7 pages is not required to separate pagination in 2 blocks
        return pagesArray;
    }

    follow(e, username){
        e.preventDefault();
        setFollow(username).then(response => {
            this.setState({
                ...this.state,
                following: true,
                message: response
            })
        })
            .catch(error => {
                this.setState({
                    message: error
                })
            })
    }

    stopFollowing(e, username){
        e.preventDefault();
        setUnFollow(username).then(response => {
            if(response){
                this.setState({
                    ...this.state,
                    following: false,
                    message: response
                })
            }
        })
            .catch(error =>{
                 this.setState({
                    message: error
                })
            })
    }

    goToPage(e, page){
        /*
            Get requested news by providing a page and modify pagination accordingly

                @params:
                    e - event object.
                    page - page number used to query the required news
                @returns:

         */
        e.preventDefault();
        getUserNews(this.username, page).then(news => {
            return this.setState({
                DisplayNews:{
                    ...this.state.DisplayNews,
                    news: news,
                    presentPage: page,
                    beginPag: this.setBeginPagination(page, this.state.DisplayNews.pages),
                    endPag: this.setEndPages(this.state.DisplayNews.pages)
                }

           })
        })
    }


    setBeginPagination(currentPage, lastPage){
        /*
            Set pagination when user navigates through the pagination
         */

        //if more than 7 pages it is required to set the two block pagination
        if(lastPage >= 7){
            switch (true){
                case (currentPage == 1):
                    return this.setBeginPages(this.state.DisplayNews.pages)
                case (currentPage + 3 >= lastPage):
                    return [lastPage - 5, lastPage - 4 ,lastPage - 3]
                case (currentPage + 3 <= lastPage):
                    return [currentPage - 1, currentPage, currentPage + 1]
                default:
                    return [currentPage, currentPage + 1, currentPage + 2]
            }
            //less than 7 pages requires only one block pagination
        }else{
            return this.setBeginPages(this.state.DisplayNews.pages)
        }

    }

    removeMessage(){
        this.setState({
            message: ''
        })
    }

    render(){
        var {news, beginPag, endPag, presentPage, pages} = this.state.DisplayNews
        return (
            <PageTemplate>
                {(this.state.message) ?
                    <FlashMessage message={this.state.message} onClick={this.removeMessage}/> : null
                }
                <div className='col-12'>
                    <UserInfoCard username={this.username}
                                  location={this.state.userInfo.location}
                                  about_me={this.state.userInfo.about_me}
                                  followers={this.state.userInfo.followers}
                                  publishedNews={this.state.userInfo.publishNews}
                                  following={this.state.following}
                                  canFollow = {this.state.loggedIn}
                                  onFollow={(this.state.following) ? this.stopFollowing : this.follow}
                    />
                </div>
                {(news.length > 0) ?
                    <NewsDisplayList News={news}/>
                : null
                }
                 <div className='col-12'>
                     <Pagination presentPage={presentPage}
                                 lastPage={pages}
                                 begin={beginPag}
                                 end={endPag}
                                 goToPage={this.goToPage}/>
                 </div>
            </PageTemplate>
        )
    }

}

export default PublicUserContainer