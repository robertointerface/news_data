import React from 'react'
import PageTemplate from 'components/main/PageTemplate'
import {Component} from 'react'
import {PasswordForm} from 'components/ui/profile/forms'
import {PrimaryButton} from 'ui/common/buttons/buttons'

class ChangePassword extends Component {

    constructor(props){
        super(props);
        this.state = {
            prevPass: '',
            newPass: ''
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
            prevPass: value
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
                        <PrimaryButton message={'save changes'} onClick={this.onSubmit}/>
                    </div>
                </div>
            </PageTemplate>
        )
    }

}

export default ChangePassword