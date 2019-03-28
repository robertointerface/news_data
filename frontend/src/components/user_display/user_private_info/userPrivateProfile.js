import React from 'react'
import {Component} from 'react'
import UserDisplayBase from 'components/user_display/baseClass'
import PageTemplate from 'components/main/PageTemplate'
import {getUserPrivateInfo} from 'functions/Display_users/displayUserPrivateInfo'
import UserInfoCard from 'components/user_display/user_private_info/UserInfoCard'
import {getUserNews} from 'functions/Display_users/displayUserFunctions'

class PrivateUserContainer extends UserDisplayBase{

    constructor(props){
        super(props)
        this.username = this.props.match.params.username
        this.state = {
            message: '',
            userInfo :{
                about_me: '',
                publishNews: 0,
                followers: 0,
                following: 0,
                savedData: 0,
                location: '',
            },
            Display: {
                news:[],
                newsPerPage: 2.00,
                presentPage: 1,
                beginPag: [],
                endPag: [],
                pages: 0,
            },
        }
    }
    componentDidMount(){
        getUserPrivateInfo().then(response =>{
            return this.setState({
                ...this.state,
                userInfo:{
                    about_me: response.about_me,
                    publishNews: response.user_created_new,
                    followers: response.user_rel_follows,
                    following: response.user_rel_followed,
                    savedData: response.user_saved_data,
                    location: response.location
                },
                Display:{
                    ...this.state.Display,
                    pages: Math.ceil(parseFloat(response.user_created_new).toFixed(2) / this.state.Display.newsPerPage),
                }
            })
        }).then(result => {
            return getUserNews(this.username).
                    then(userNews => {
                        return this.setState({
                            ...this.state,
                            Display: {
                                ...this.state.Display,
                                news: userNews,
                                beginPag: this.setBeginPages(this.state.Display.pages),
                                endPag:this.setEndPages(this.state.Display.pages)
                            }
                        })
                    })
        })
        .catch(error => {

        })
    }

    render(){
        return(
            <PageTemplate>
                <UserInfoCard about_me={this.state.userInfo.about_me}
                              publishNews={this.state.userInfo.publishNews}
                              followers={this.state.userInfo.followers}
                              location={this.state.userInfo.location}
                              following={this.state.userInfo.following}
                              savedData={this.state.userInfo.savedData}/>


            </PageTemplate>
        )
    }

}


export default PrivateUserContainer