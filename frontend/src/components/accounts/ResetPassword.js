import React from 'react'
import PageTemplate from 'components/main/PageTemplate'
import {Component} from 'react'
import FlashMessage from 'components/main/Flash'
import {handle_reset_password} from 'functions/auth/LoginFunctions'
import {PrimaryButtonDis} from 'ui/common/buttons/buttons'
/**
 * R
 */
class ResetPassword extends Component{

    constructor(props){
        super(props)
        this.state = {
            message: '',
            email: '',
            fetching: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeEmail= this.onChangeEmail.bind(this);
        this.onFetching = this.onFetching.bind(this);
    }

    onChangeEmail(e){
        e.preventDefault();
        var value = e.target.value;
        return this.setState({
            email: value
        })
    }

    onFetching(){
        return this.setState({
            fetching: true
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.onFetching();
        handle_reset_password(this.state.email).then(response => {
            return this.setState({
                message: response,
                fetching: false
            })
        })
            .catch(error => {
                 return this.setState({
                     message: error,
                     fetching: false
                 })
            })
    }

    render(){
        return(
            <PageTemplate>
                <div className='row'>
                    <div className='col-12'>
                        {(this.state.message)?
                            <FlashMessage message={this.state.message}/> : null
                        }
                    </div>
                    <div className='col-12 col-lg-6'>
                        <form onSubmit={(e) => this.onSubmit(e)}>
                            <div className="form-group">
                                <label htmlFor='email'>Write your email and a new password will be emailed</label>
                                <input
                                    type='text'
                                    name='email'
                                    value={this.state.email}
                                    className="form-control"
                                    onChange={(e) => this.onChangeEmail(e)}
                                    placeholder='Email'
                                    maxLength="50"
                                />
                            </div>
                            {(this.state.fetching) ?
                                <PrimaryButtonDis message={'Requesting...'}/>
                                :
                                <button type='submit' className='btn btn-primary'>
                                    request password
                                </button>
                            }
                        </form>
                    </div>
                </div>
            </PageTemplate>

        )

    }
}

export default ResetPassword