import React from 'react'
import PageTemplate from 'components/main/PageTemplate'
import {Component} from 'react'
import {urls, flashFlags} from "root/constants/constants";
import {PasswordForm} from 'components/ui/profile/forms';
import {PrimaryButton} from 'ui/common/buttons/buttons';
import {getCookie} from "root/store/functions/auth/Cookies";
import {changePassword} from 'functions/User_profile/editProfileFunctions'
import FlashMessage from 'components/main/Flash'

class ChangePassword extends Component {

    constructor(props){
        super(props);
        this.state = {
            newPass: '',
            ConfnewPass: '',
            message: ''
        }
        this.onChangeNewPass = this.onChangeNewPass.bind(this);
        this.onChangeConfNewPass = this.onChangeConfNewPass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeNewPass(e){
        e.preventDefault();
        var value = e.target.value;
        return this.setState({
            newPass: value
        })
    }

    onChangeConfNewPass(e){
        e.preventDefault();
        var value = e.target.value;
        return this.setState({
            ConfnewPass: value
        })
    }

    onSubmit(){
        changePassword(this.state.newPass, this.state.ConfnewPass)
            .then(response => {
                    return this.setState({
                        message: response,
                    })
            })
            .catch(error => {
                return this.setState({
                        message: error,
                })
            })
    }

    render(){
        return (
            <PageTemplate>
                {(this.state.message)?
                    <FlashMessage message={this.state.message}/> : null
                }
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                        <PasswordForm title={'new password'}
                                      name={'newPass'}
                                      value={this.state.newPass}
                                      onChange={this.onChangeNewPass}/>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <PasswordForm title={'confirm new password'}
                                      name={'ConfnewPass'}
                                      value={this.state.ConfnewPass}
                                      onChange={this.onChangeConfNewPass}/>
                    </div>
                    <div className='col-12'>
                        <PrimaryButton message={'save changes'} onClick={this.onSubmit}/>
                    </div>
                </div>
            </PageTemplate>
        )
    }

}

export default ChangePassword