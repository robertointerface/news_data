import React from 'react'
import PageTemplate from 'components/main/PageTemplate'
import {UserInfoTextForm, UserInfoTextAreaForm} from 'ui/profile/forms'
import {getUserPrivateData} from 'functions/User_profile/editProfileFunctions'
import {PrimaryButton} from 'ui/common/buttons/buttons'

const EditUserForm = ({username='', onChange=f=>f, onSubmit=f=>f, location='', first_name='', last_name='', about_me=''}) => {

        return (
            <PageTemplate>
                <div className='row'>
                    <div className='col-6'>
                        <UserInfoTextForm title={'username'}
                                          name={'username'}
                                          value={username}
                                          onChange={onChange}/>
                    </div>
                    <div className='col-6'>
                        <UserInfoTextForm title={'first name'}
                                          name={'first_name'}
                                          value={first_name}
                                          onChange={onChange}/>
                    </div>
                    <div className='col-6'>
                        <UserInfoTextForm title={'last name'}
                                          name={'last_name'}
                                          value={last_name}
                                          onChange={onChange}/>
                    </div>
                     <div className='col-6'>
                        <UserInfoTextForm title={'location'}
                                          name={'location'}
                                          value={location}
                                          onChange={onChange}/>
                    </div>
                    <div className='col-6'>
                        <UserInfoTextAreaForm title={'about me'}
                                              name={'about_me'}
                                              value={about_me}
                                              onChange={onChange}/>
                    </div>
                    <div className='col-12'>
                        <PrimaryButton message={'save changes'} onClick={onSubmit}/>
                    </div>
                </div>
            </PageTemplate>
        )
    }

export default EditUserForm