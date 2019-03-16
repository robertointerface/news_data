import React from 'react'
import PageTemplate from 'components/main/PageTemplate'
import {Component} from 'react'
import {urls, flashFlags} from "root/constants/constants";
import {PasswordForm} from 'components/ui/profile/forms';
import {PrimaryButton} from 'ui/common/buttons/buttons';
import {getCookie} from "root/store/functions/auth/Cookies";

class ChangePassword extends Component {

    constructor(props){
        super(props);
        this.state = {
            prevPass: '',
            newPass: '',
            ConfnewPass: '',
            message: ''
        }
        this.onChangePrevPass = this.onChangePrevPass.bind(this);
        this.onChangeNewPass = this.onChangeNewPass.bind(this);
    }


    onChangePrevPass(e){
        e.preventDefault();
        var value = e.target.value;
        return this.setState({
            prevPass: value
        })
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


    }

    render(){
        return (
            <PageTemplate>
                <div className='row'>
                    <div className='col-6'>
                        <PasswordForm title={'password'}
                                      name={'prevPass'}
                                      value={this.state.prevPass}
                                      onChange={this.onChangePrevPass}/>
                    </div>
                    <div className='col-6'>
                        <PasswordForm title={'new password'}
                                      name={'newPass'}
                                      value={this.state.newPass}
                                      onChange={this.onChangeNewPass}/>
                    </div>
                    <div className='col-6'>
                        <PasswordForm title={'confirm new password'}
                                      name={'ConfnewPass'}
                                      value={this.state.ConfnewPass}
                                      onChange={this.onChangeConfNewPass}/>
                    </div>
                    <div className='col-6'>
                        <PrimaryButton message={'save changes'} onClick={this.onSubmit}/>
                    </div>
                </div>
            </PageTemplate>
        )
    }

}

export default ChangePassword