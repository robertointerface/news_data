import React from 'react'
import {Component} from 'react'
import {getUserNews} from "root/store/functions/Display_users/displayUserFunctions";
import PageTemplate from 'components/main/PageTemplate'
import {getUserSubscriptions} from 'functions/Display_users/userSubscriptionFunctions'

class userSubscriptionContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message: '',
            usersFollowing: 0,
            DisplayNews: {
                news: [],
                newsPerPage: 2.00,
                presentPage: 1,
                beginPag: [],
                endPag: [],
                pages: 0,
            }
        }
    }

    componentDidMount() {
        getUserSubscriptions().then(response =>{

        })
            .catch(error => {

            })

    }

    setBeginPages(pages) {
        /*
            Create begin pagination array
         */

        //if there is more than 7 pages, then it always initialize to 1, 2 & 3
        if (pages >= 7) {
            return [1, 2, 3]
        } else {
            //if there is less than 7 pages there is no begin and end, all together in one block.
            var pagesArray = []
            for (var i = 1; i <= pages; i++) {
                pagesArray.push(i);
            }
            return pagesArray;
        }
    }

    setEndPages(pages) {
        var pagesArray = []
        //if there are more than 7 pages it is required to create two pagination blocks
        if (pages >= 7) {
            for (var i = (pages - 2); i <= pages; i++) {
                pagesArray.push(i);
            }
        }
        //if less than 7 pages is not required to separate pagination in 2 blocks
        return pagesArray;
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
        getUserNews(this.username, page).then(news => {
            return this.setState({
                DisplayNews: {
                    ...this.state.DisplayNews,
                    news: news,
                    presentPage: page,
                    beginPag: this.setBeginPagination(page, this.state.DisplayNews.pages),
                    endPag: this.setEndPages(this.state.DisplayNews.pages)
                }

            })
        })
    }


    setBeginPagination(currentPage, lastPage) {
        /*
            Set pagination when user navigates through the pagination
         */

        //if more than 7 pages it is required to set the two block pagination
        if (lastPage >= 7) {
            switch (true) {
                case (currentPage == 1):
                    return this.setBeginPages(this.state.DisplayNews.pages)
                case (currentPage + 3 >= lastPage):
                    return [lastPage - 5, lastPage - 4, lastPage - 3]
                case (currentPage + 3 <= lastPage):
                    return [currentPage - 1, currentPage, currentPage + 1]
                default:
                    return [currentPage, currentPage + 1, currentPage + 2]
            }
            //less than 7 pages requires only one block pagination
        } else {
            return this.setBeginPages(this.state.DisplayNews.pages)
        }

    }

    removeMessage() {
        this.setState({
            message: ''
        })
    }

    render() {
        return (
             <PageTemplate>

             </PageTemplate>
        )
    }
}

export default userSubscriptionContainer