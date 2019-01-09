import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react'
import {getCookie} from "../../store/functions/auth/Cookies";




class VerifyToken extends Component {
    constructor(props){
        super(props)
        this.token = this.props.match.params.token
        this.verified = verifyToken(this.token)
    }
    render (){
        let { verified } = this.verified
        return (
            <div>
                {(verified) ?
                    <div>
                                                
                    </div>
                    : null
                }
            </div>
        )
    }
}


export default VerifyToken

const verifyToken = function ( token ){

    console.log('token: ' + token);
    var csrftoken = getCookie('csrftoken');

    return fetch(`http://127.0.0.1:8080/accounts/verifyusertoken/${token}/`, {
    method: 'POST',
    mode: 'same-origin',
    headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
    },
    })
    .then(res => {
        return res.json()
    })
    .then(res => {
        if (res.status == 200) {
            return true
        }
        else{
            throw 'error';
        }
    })
    .catch(error => {
        console.log('error');
    })

}