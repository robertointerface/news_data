import React from 'react'
import {Component} from 'react'
import {
    getUserNews,
    getUserInfo,
    setFollow
} from 'functions/Display_users/displayUserFunctions'
import PageTemplate from 'components/main/PageTemplate'
import NewsDisplayList from 'components/new_display/NewsDisplayList'
import Pagination from 'ui/common/pagination/pagination'
import UserInfoCard from 'ui/accounts/UserDisplayInfo'
import {getNewsToDisplay} from "root/store/functions/Display_news/displayNewsFunctions";

class PublicUserContainer extends Component{
    constructor(props){
        super(props)
        this.username = this.props.match.params.username
        var userSaved = JSON.parse(localStorage.getItem('user'));
        this.state = {
            loggedIn: (userSaved) ? true : false,
            userInfo :{
                about_me: '',
                publishNews: 0,
                followers: 0,
                location:''
            },
            DisplayNews: {
                news:[],
                pages: 0,
                newsPerPage: 2,
                presentPage: 1,
                beginPag: [],
                endPag: []
            },
            following: false,
        }
        this.goToPage = this.goToPage.bind(this)
        this.follow = this.follow.bind(this)
    }

    componentDidMount(){
        /*
            Get user public info and published news
         */

        getUserInfo(this.username).
            then(userData => {
            return this.setState({
                userInfo:{
                    about_me: userData.about_me,
                    location: userData.location,
                    publishNews: userData.user_created_new,
                },

            })
        });
        getUserNews(this.username).
            then(userNews => {
                return Promise.all([
                    this.setState({
                        DisplayNews: {
                            news: userNews,
                            userNews: userNews.length,
                            pages: Math.ceil(this.state.userInfo.publishNews / this.state.DisplayNews.newsPerPage),
                        }
                    }),
                    this.setState({
                        DisplayNews:{
                            ...this.state.DisplayNews,
                            beginPag: [1, 2, 3],
                            endPag: [
                                this.state.DisplayNews.pages - 2,
                                this.state.DisplayNews.pages - 1,
                                this.state.DisplayNews.pages]
                        }
                    })
                ])
        })
    }

    follow(e, username){
        e.preventDefault();
        setFollow(username).then(response =>{
            this.setState({
                ...this.state,
                following: true
            })
        })
    }

    goToPage(e, page){
        e.preventDefault();
        getUserNews(this.username, page).then(news => {

            return this.setState({
                DisplayNews:{
                    ...this.state.DisplayNews,
                    news: news,
                    presentPage: page,
                    beginPag: this.setBeginPagination(page, this.state.DisplayNews.beginPag, this.state.DisplayNews.pages),
                    endPag: [
                        this.state.DisplayNews.pages - 2,
                        this.state.DisplayNews.pages - 1,
                        this.state.DisplayNews.pages]
                }

           })
        })
    }

    setBeginPagination(currentPage, beginPag, lastPage){
        switch (true){
            case (currentPage == 1):
                return [1, 2, 3] //This is required otherwise if user clicks button 'begin' or page '1', the page 0
                                    // will be displayed and this creates visual and functional errors.
            case (currentPage + 3 >= lastPage):
                return [lastPage - 5, lastPage - 4 ,lastPage - 3]
            case (currentPage + 3 <= lastPage):
                return [currentPage - 1, currentPage, currentPage + 1]
            default:
                return [currentPage, currentPage + 1, currentPage + 2]
        }
    }

    render(){
        var {news, beginPag, endPag, presentPage} = this.state.DisplayNews
        return (
            <PageTemplate>
                <div className='col-12'>
                    <UserInfoCard username={this.username}
                                  location={this.state.userInfo.location}
                                  about_me={this.state.userInfo.about_me}
                                  publishedNews={this.state.userInfo.publishNews}
                                  following={this.state.following}
                                  canFollow = {this.state.loggedIn}
                                  onFollow={this.follow}
                    />
                </div>
                {(news.length > 0) ?
                    <NewsDisplayList News={news}/>
                : null
                }
                 <div className='col-12'>
                     <Pagination presentPage={presentPage} begin={beginPag} end={endPag} goToPage={this.goToPage}/>
                 </div>
            </PageTemplate>
        )
    }

}

export default PublicUserContainer