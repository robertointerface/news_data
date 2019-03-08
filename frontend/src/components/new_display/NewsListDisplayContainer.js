import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import PageTemplate from 'components/main/PageTemplate'
import {DisplayNewListContainer} from 'containers/newDisplayContainer'
import {
    getNewsToDisplay,
    getHotNewsPageCount} from 'functions/Display_news/displayNewsFunctions'
import NewsDisplayList from 'components/new_display/NewsDisplayList'
import Pagination from 'ui/common/pagination/pagination'

class NewsListDisplayContainer extends Component{

    constructor(props){
        super(props )
        this.state = {
            news: [],
            totalNews: 0,
            pages: 0,
            newsPerPage: 2,
            presentPage: 1,
            beginPag: [],
            endPag: []
        }
        this.goToPage = this.goToPage.bind(this)
    }

     componentDidMount() {
         getNewsToDisplay().then(news => {
             return this.setState({news: news})
         }).then(gotNews =>{
             return getHotNewsPageCount();
         }).then(newsCount =>{
                 if(typeof newsCount != 'undefined') {
                     return Promise.all([
                         this.setState({
                         totalNews: newsCount['newsCount'],
                         pages: Math.ceil(newsCount['newsCount'] / this.state.newsPerPage), //Round number up,

                     }),
                         this.setState({
                             beginPag: [1, 2, 3],
                             endPag: [this.state.pages - 2, this.state.pages - 1, this.state.pages]
                         })
                     ])
                 }
             }

         ).catch(error => {

         })
     }

    goToPage(e, page){
        e.preventDefault();
        getNewsToDisplay(page).then(news => {

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

    setEndPagination(currentPage, lastPage){
         switch (true){
             case ((currentPage + 3 < lastPage)):
                return [lastPage - 2 , lastPage - 1, lastPage]
             case (currentPage + 3 > lastPage):
                return [lastPage - 2 , lastPage - 1, lastPage]
             default:
                return []
         }
    }

    render(){
        var {news, beginPag, endPag, presentPage} = this.state
        return(
            <PageTemplate>
                <div className='row'>
                    <div className='col-12'>
                        <NewsDisplayList News={news}/>
                    </div>
                    <div className='col-12'>
                        <Pagination presentPage={presentPage}
                                    lastPage={this.state.pages}
                                    begin={beginPag}
                                    end={endPag}
                                    goToPage={this.goToPage}/>
                    </div>
                </div>
            </PageTemplate>
        )
    }
}

export default NewsListDisplayContainer