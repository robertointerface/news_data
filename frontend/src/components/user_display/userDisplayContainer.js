import React from 'react'
import {Component} from 'react'
import {getUserNews} from 'functions/Display_users/displayUserFunctions'

class PublicUserContainer extends Component{
    constructor(props){
        super(props)
        this.username = this.props.match.params.username
        this.userData = {
            about: '',
            publishNews: '',
            followers: '',
            location: ''
        }
    }

    componentDidMount(){
        getUserNews().then(userNews => {

        })
    }

    render(){

    }


}

export default PublicUserContainer