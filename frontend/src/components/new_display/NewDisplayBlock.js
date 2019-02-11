

import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import PageTemplate from 'components/main/PageTemplate'
import {DisplayNewListContainer} from 'containers/newDisplayContainer'
import {getNewsToDisplay} from 'functions/Display_news/displayNewsFunctions'
import NewsDisplayList from 'components/new_display/NewDisplayList'
class NewDisplayBlock extends Component{
    constructor(props){
        super(props )
        this.state = {
            news: []
        }
    }
     componentDidMount() {
         getNewsToDisplay().then(news => {
             this.setState({news: news})
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
                </div>
            </PageTemplate>
        )
    }
}

export default NewDisplayBlock