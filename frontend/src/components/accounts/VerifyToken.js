import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react'
import {getCookie} from "../../store/functions/auth/Cookies";
import {VerifyTokenFormContainer} from '../../containers/containers'
import CardCol6 from '../ui/common/cards/CardCol6'

class VerifyToken extends Component {
    constructor(props){
        super(props)
        this.token = this.props.match.params.token;
        this.verified = verifyToken(this.token, this.props.onLogIn);
        this.onChange = this.props.onChange;
        this.onSubmit = this.props.onSubmit;
    }
    render (){
        let { loggedIn, username, password, passwordRepeat} = this.props
        return (
            <div>
                {(loggedIn) ?
                    <CardCol6>
                        <form onSubmit={(e) => this.onSubmit(e, this.token)}>
                            <label htmlFor='username'>Username</label>
                            <input
                                type='text'
                                name='username'
                                value={username}
                                className="form-control"
                                placeholder='max. 20 characters'
                                onChange={(e) => this.onChange(e)}
                                maxLength="20"
                            />
                            <label htmlFor='password'>password</label>
                            <input
                                type='password'
                                name='password'
                                value={password}
                                className="form-control"
                                placeholder='max. 20 characters'
                                onChange={(e) => this.onChange(e)}
                                maxLength="20"
                            />
                            <label htmlFor='passwordRepeat'>Repeat password</label>
                             <input
                                type='password'
                                name='passwordRepeat'
                                value={passwordRepeat}
                                className="form-control"
                                placeholder='max. 20 characters'
                                onChange={(e) => this.onChange(e)}
                                maxLength="20"
                            />
                            <button type='submit' className='btn btn-primary'>
                                Save
                            </button>
                        </form>
                    </CardCol6>
                    : null
                }
            </div>
        )
    }
}


export default VerifyToken

const verifyToken = function ( token, dispatchLogIn ){

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
            return dispatchLogIn();
        }
        else{
            throw 'error';
        }
    })
    .catch(error => {
        console.log('error');
    })

}