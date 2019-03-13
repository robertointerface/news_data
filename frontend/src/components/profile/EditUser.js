import React from 'react'
import {Component} from 'react'
import PageTemplate from 'components/main/PageTemplate'
import {UserInfoTextForm, UserInfoTextAreaForm} from 'ui/profile/forms'

class EditUser extends Component {

    constructor(props){
        super(props)

        this.state = {
            username: this.props.match.params.username,
            location: '',
            about_me: '',
            first_name: '',
            last_name: ''
        }
    }

    componentDidMount(){

    }

    render(){
        var {username, location, about_me, first_name, last_name} = this.state
        return (
            <PageTemplate>
                <div className='row'>
                    <div className='col-6'>
                        <UserInfoTextForm title={'username'} name={'username'} value={username}/>
                    </div>
                    <div className='col-6'>
                        <UserInfoTextForm title={'first name'} name={'first_name'} value={first_name}/>
                    </div>
                    <div className='col-6'>
                        <UserInfoTextForm title={'last name'} name={'last_name'} value={last_name}/>
                    </div>
                     <div className='col-6'>
                        <UserInfoTextForm title={'location'} name={'location'} value={location}/>
                    </div>
                    <div className='col-6'>
                        <UserInfoTextAreaForm title={'about me'} name={'about_me'} value={about_me}/>
                    </div>
                </div>
            </PageTemplate>
        )
    }
}

export default EditUser