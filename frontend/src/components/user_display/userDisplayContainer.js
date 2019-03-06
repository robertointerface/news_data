import React from 'react'
import {Component} from 'react'
import {getUserNews, getUserInfo} from 'functions/Display_users/displayUserFunctions'
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
        /*
            Get user public info and published news
         */
        getUserInfo(this.username).
            then(userData => {
            return this.setState({
                about: userData.about,
                location: userData.location,
            })
        });
        getUserNews(this.username).
            then(userNews => {
                console.log('userData: ' + JSON.stringify(userNews));
                return this.setState({
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