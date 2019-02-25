import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import PageTemplate from 'components/main/PageTemplate'
import {DisplayNewListContainer} from 'containers/newDisplayContainer'
import {
    getNewsToDisplay, getHotNewsPageCount} from 'functions/Display_news/displayNewsFunctions'
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
           })
        })
    }

    render(){
        var {news, beginPag, endPag} = this.state
        return(
            <PageTemplate>
                <div className='row'>
                    <div className='col-12'>
                        <NewsDisplayList News={news}/>
                    </div>
                    <div className='col-12'>
                        <Pagination begin={beginPag} end={endPag} goToPage={this.goToPage}/>
                    </div>
                </div>
            </PageTemplate>
        )
    }
}

export default NewsListDisplayContainer