import React from 'react'
import PageTemplate from 'components/main/PageTemplate'
import {Component} from 'react'
import FlashMessage from 'components/main/Flash'
class ResetPassword extends Component{

    constructor(props){
        super(props)
        this.state = {
            message: '',
            email: ''
        }
    }

    onChangeEmail(e){
        e.preventDefault();
        var value = e.target.value;
        return this.setState({
            email: value
        })
    }

    onSubmit(e){

    }
    render(){
        return(
            <PageTemplate>
                {(this.state.message)?
                    <FlashMessage message={this.state.message}/> : null
                }
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
                    <button type='submit' className='btn btn-primary'>
                        request password
                    </button>
                </form>
            </PageTemplate>

        )

    }
}

export default ResetPassword