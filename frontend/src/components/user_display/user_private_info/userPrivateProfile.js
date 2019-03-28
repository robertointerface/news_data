import React from 'react'
import {Component} from 'react'
import UserDisplayBase from 'components/user_display/baseClass'
import PageTemplate from 'components/main/PageTemplate'
import {getUserPrivateInfo} from 'functions/Display_users/displayUserPrivateInfo'

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

        })
    }

    render(){

        return(
            <PageTemplate>

            </PageTemplate>
        )
    }

}


export default PrivateUserContainer