import React from 'react'
import {Component} from 'react'
import {getUserNews, getUserInfo} from 'functions/Display_users/displayUserFunctions'
import PageTemplate from 'components/main/PageTemplate'
import NewsDisplayList from 'components/new_display/NewsDisplayList'
import Pagination from 'ui/common/pagination/pagination'
import UserInfoCard from 'ui/accounts/UserDisplayInfo'

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
                     <Pagination presentPage={presentPage} begin={beginPag} end={endPag}/>
                 </div>
            </PageTemplate>
        )
    }

}

export default PublicUserContainer