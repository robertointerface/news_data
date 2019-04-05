import React from 'react';
import { Component } from 'react'
import CardCol6 from 'ui/common/cards/CardCol6'
import {verifyToken} from 'functions/auth/LoginFunctions'
import FlashMessage from 'components/main/Flash'
import {PrimaryButtonDis} from 'ui/common/buttons/buttons'
class VerifyToken extends Component {
    constructor(props){
        super(props)
        this.token = this.props.token;
        this.onChange = this.props.onChange;
        this.onSubmit = this.props.onSubmit;

        this.state = {
            verified: false,
            message: ''
        }
        this.removeMessage = this.removeMessage.bind(this)

    }

    componentDidMount(){
        /**
         * Call verify token and display either successful verification or error
         */

        verifyToken(this.token, this.props.onLogIn).then(result => {
            return this.setState({
                verified: result,
                message: 'please complete the following fields to finish registration'
            })
        })
            .catch(error => {
                return this.setState({
                    message: error
                })
            })
    }

    removeMessage(){
        return this.setState({
            message: ''
        })
    }
    render (){
        let {verified, message} = this.state
        let {username, password, passwordRepeat, fetching} = this.props
        return (
            <div>
                {(message) ?
                    <FlashMessage message={message} onClick={this.removeMessage}/> : null
                }
                {(verified) ?
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
                            {(fetching)?
                                 <PrimaryButtonDis message={'saving...'}/>
                                :
                                <button type='submit' className='btn btn-primary'>
                                    Save
                                </button>
                            }
                        </form>
                    </CardCol6>
                    : null
                }
            </div>
        )
    }
}

export default VerifyToken
