import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import PageTemplate from 'components/main/PageTemplate'
import {DisplayNewListContainer} from 'containers/newDisplayContainer'
import {getNewsToDisplay} from 'functions/Display_news/displayNewsFunctions'
import NewsDisplayList from 'components/new_display/NewsDisplayList'
import Pagination from 'ui/common/pagination/pagination'

class NewsListDisplayContainer extends Component{

    constructor(props){
        super(props )
        this.state = {
            news: []
        }
        this.goToPage = this.goToPage.bind(this)
    }

     componentDidMount() {
         getNewsToDisplay().then(news => {
            return this.setState({news: news})
         }).then()
    }

    goToPage(e, page){
        e.preventDefault();
        getNewsToDisplay(page).then(news => {
           return this.setState({news: news})
        })
    }

    render(){
        var news = this.state.news
        return(
            <PageTemplate>
                <div className='row'>
                    <div className='col-12'>
                        <NewsDisplayList News={news}/>
                    </div>
                    <div className='col-12'>
                        <Pagination begin={[1, 2, 3]} end={[4, 5, 6]} goToPage={this.goToPage}/>
                    </div>
                </div>
            </PageTemplate>
        )
    }
}

export default NewsListDisplayContainer