import React from 'react';
import {PrimaryButton} from 'ui/common/buttons/buttons'
const UserInfoCard = ({username='', location='', about_me='', publishedNews=0}) => {
    return(
        <div className='card'>
            <div className='row'>
                <div className='col-8'>
                    {username}
                </div>
                <div className='col-4'>
                    <PrimaryButton message={'follow'}/>
                </div>
                <div className='col-6'>
                    {location}
                </div>
                 <div className='col-6'>
                    {publishedNews}
                </div>
                 <div className='col-12'>
                    {about_me}
                </div>
            </div>
        </div>
    )
}

export default UserInfoCard