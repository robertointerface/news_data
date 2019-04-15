import React from 'react'
import {Component} from 'react'
import {getUserNews} from "root/store/functions/Display_users/displayUserFunctions";
import PageTemplate from 'components/main/PageTemplate'
import {getUserSubscriptions} from 'functions/Display_users/userSubscriptionFunctions'
import Pagination from 'ui/common/pagination/pagination'
import NewsDisplayList from 'components/new_display/NewsDisplayList'
import UserDisplayBase from 'components/user_display/baseClass'

class userSubscriptionContainer extends UserDisplayBase {
    /*
        Class used to display user subscriptions, inherits from class 'UserDisplayBase' that makes a react
        component with pagination functionality.

        Main methods:
            pagination methods from class 'UserDisplayBase'
            componentDidMount - Get data (news) from backend and set the in the component state.
            goToPage -

     */
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            usersFollowing: 0,
            Display: {
                news: [],
                newsPerPage: 3.00,
                presentPage: 1,
                beginPag: [],
                endPag: [],
                pages: 0,
            }
        }
        this.goToPage = this.goToPage.bind(this)
    }

    componentDidMount() {
        /*
            Get subscription news
         */
        getUserSubscriptions().then(news =>{
            return this.setState({
                ...this.state,
                Display :{
                    news: news['news'],
                    pages: Math.ceil(parseFloat(news['newsCount']).toFixed(2) / this.state.Display.newsPerPage),
                }
            })
        }).then(result => {
            return this.setState({
                ...this.state,
                Display: {
                    ...this.state.Display,
                    beginPag: this.setBeginPages(this.state.Display.pages),
                    endPag: this.setEndPages(this.state.Display.pages)
                }
            })
        })
            .catch(error => {

            })
    }

    goToPage(e, page) {
        /*
            Get requested news by providing a page and modify pagination accordingly

                @params:
                    e - event object.
                    page - page number used to query the required news
                @returns:

         */
        e.preventDefault();
        getUserSubscriptions(page)
            .then(news => {
                var newsToDisplay = news['news'];
                return this.setState({
                    Display: {
                        ...this.state.Display,
                        news: newsToDisplay,
                        presentPage: page,
                        beginPag: this.setBeginPagination(page, this.state.Display.pages),
                        endPag: this.setEndPages(this.state.Display.pages)
                    }
                })
        })
    }

    render() {
        var {news, beginPag, endPag, presentPage, pages} = this.state.Display
        return (
             <PageTemplate>
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

export default userSubscriptionContainer