import React from 'react'
import {Component} from 'react'
import {getUserNews, getUserInfo} from 'functions/Display_users/displayUserFunctions'
import PageTemplate from 'components/main/PageTemplate'
import NewsDisplayList from 'components/new_display/NewsDisplayList'
import Pagination from 'ui/common/pagination/pagination'
import UserInfoCard from 'ui/accounts/UserDisplayInfo'
import {getNewsToDisplay} from "root/store/functions/Display_news/displayNewsFunctions";

class PublicUserContainer extends Component{
    constructor(props){
        super(props)
        this.username = this.props.match.params.username
        this.state = {
            about_me: '',
            publishNews: 0,
            followers: '',
            location: '',
            news: [],
            userNews: 0,
            pages: 0,
            newsPerPage: 2,
            presentPage: 1,
            beginPag: [],
            endPag: []
        }
        this.goToPage = this.goToPage.bind(this)
    }

    componentDidMount(){
        /*
            Get user public info and published news
         */
        getUserInfo(this.username).
            then(userData => {
            return this.setState({
                about_me: userData.about_me,
                location: userData.location,
                publishNews: userData.user_created_new,
            })
        });
        getUserNews(this.username).
            then(userNews => {
                return Promise.all([
                    this.setState({
                        news: userNews,
                        userNews: userNews.length,
                        pages: Math.ceil(this.state.publishNews / this.state.newsPerPage),
                    }),
                    this.setState({
                        beginPag: [1, 2, 3],
                        endPag: [this.state.pages - 2, this.state.pages - 1, this.state.pages]
                    })
                ])
        })
    }

    goToPage(e, page){
        e.preventDefault();
        getUserNews(this.username, page).then(news => {

            return this.setState({
               news: news,
               presentPage: page,
               beginPag: this.setBeginPagination(page, this.state.beginPag, this.state.pages),
               endPag: [this.state.pages - 2 , this.state.pages - 1, this.state.pages]
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
        var {news, beginPag, endPag, presentPage} = this.state
        return (
            <PageTemplate>
                <div className='col-12'>
                    <UserInfoCard username={this.username}
                                  location={this.state.location}
                                  about_me={this.state.about_me}
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