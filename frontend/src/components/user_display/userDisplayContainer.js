import React from 'react'
import {Component} from 'react'
import {getUserNews} from 'functions/Display_users/displayUserFunctions'
import PageTemplate from 'components/main/PageTemplate'
import NewsDisplayList from 'components/new_display/NewsDisplayList'

class PublicUserContainer extends Component{
    constructor(props){
        super(props)
        this.username = this.props.match.params.username
        this.state = {
            about: '',
            publishNews: '',
            followers: '',
            location: '',
            news: [],
            pages: 0,
            newsPerPage: 2,
            presentPage: 1,
            beginPag: [],
            endPag: []
        }
    }

    componentDidMount(){
        getUserNews(this.username).
        then(userNews => {
            this.setState({
                news: userNews
            })
        })
    }

    render(){
        var {news} = this.state
        return (
            <PageTemplate>
            {(news.length > 0) ?
                <NewsDisplayList News={news}/>
            : null
            }
            </PageTemplate>
        )
    }

}

export default PublicUserContainer