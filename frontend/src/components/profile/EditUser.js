import React from 'react'
import PageTemplate from 'components/main/PageTemplate'
import {UserInfoTextForm, UserInfoTextAreaForm} from 'ui/profile/forms'
import {PrimaryButton} from 'ui/common/buttons/buttons'
import {history} from 'root/App.js';
import 'components/stylesheets/profile.css'
const EditUserForm = ({username='', onChange=f=>f, onSubmit=f=>f, location='', first_name='', last_name='', about_me=''}) => {

        return (
            <PageTemplate>
                <div className='row'>
                    <div className='col-lg-6 col-12'>
                        <UserInfoTextForm title={'first name'}
                                          name={'first_name'}
                                          value={first_name}
                                          onChange={onChange}/>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <UserInfoTextForm title={'last name'}
                                          name={'last_name'}
                                          value={last_name}
                                          onChange={onChange}/>
                    </div>
                     <div className='col-lg-6 col-12'>
                        <UserInfoTextForm title={'location'}
                                          name={'location'}
                                          value={location}
                                          onChange={onChange}/>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <UserInfoTextAreaForm title={'about me'}
                                              name={'about_me'}
                                              value={about_me}
                                              onChange={onChange}/>
                    </div>
                    <div className='col-lg-6 col-12'>
                        <PrimaryButton message={'save changes'} extraClass='MR05' onClick={onSubmit}/>
                        <PrimaryButton message={'change password'} extraClass='ML05' onClick={e => {history.push(`/profile/changepassword`)}}/>
                    </div>
                </div>
            </PageTemplate>
        )
    }

export default EditUserForm