import React from 'react'
import PageTemplate from 'components/main/PageTemplate'
import {Component} from 'react'
import {urls, flashFlags} from "root/constants/constants";
import {PasswordForm} from 'components/ui/profile/forms';
import {PrimaryButton} from 'ui/common/buttons/buttons';
import {getCookie} from "root/store/functions/auth/Cookies";
import {changePassword} from 'functions/User_profile/editProfileFunctions'
import FlashMessage from 'components/main/Flash'
import {PrimaryButtonDis} from 'ui/common/buttons/buttons'

class ChangePassword extends Component {

    /**
     * Change password upon user request.
     *
     */
    constructor(props){
        super(props);
        this.state = {
            newPass: '',
            ConfnewPass: '',
            message: '',
            fetching: false
        }
        this.onChangeNewPass = this.onChangeNewPass.bind(this);
        this.onChangeConfNewPass = this.onChangeConfNewPass.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onFetching = this.onFetching.bind(this);
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
    onFetching(){
        return this.setState({
            fetching: true
        })
    }

    onSubmit(){
        /**
         * Validate if the passwords are the same and call the API 'accounts/changepassword' to
         * change password in the database.
         *
         * return
         * on success - Message indicating success will be displayed
         * on failure - If passwords do no match or error in the backend, error message will be
         * displayed to user.
         *
         */
        try{
            this.onFetching();
            changePassword(this.state.newPass, this.state.ConfnewPass)
            .then(response => {
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
        } catch (error) {
            return this.setState({
                        message: error,
                        fetching: false
                })
        }

    }

    removeMessage(){
        return this.setState({
            message: ''
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
                </div>
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                        <PasswordForm title={'confirm new password'}
                                      name={'ConfnewPass'}
                                      value={this.state.ConfnewPass}
                                      onChange={this.onChangeConfNewPass}/>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        {(this.state.fetching)?
                        <PrimaryButtonDis message={'saving...'}/>
                        :
                        <PrimaryButton message={'save changes'} onClick={this.onSubmit}/>
                        }
                    </div>
                </div>
            </PageTemplate>
        )
    }

}

export default ChangePassword