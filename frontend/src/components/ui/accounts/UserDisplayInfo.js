import React from 'react';
import {PrimaryButton} from 'ui/common/buttons/buttons'
const UserInfoCard = ({username='', location='', about_me='', followers=0, publishedNews=0, onFollow=f=>f,
                          following=false, canFollow=false}) => {
    return(
        <div className='card'>
            <div className='row'>
                <div className='col-8'>
                    {username}
                </div>

                <div className='col-4'>
                    {(canFollow) ?
                        <div>
                            {(following) ?
                                <PrimaryButton message={'stop following'} onClick={(e) => onFollow(e, username)}/>
                                : <PrimaryButton message={'follow'} onClick={(e) => onFollow(e, username)}/>
                            }
                        </div>
                        :
                        <p>Need to login to follow</p>
                    }
                </div>
                <div className='col-6'>
                    {location}
                </div>
                <div className='col-6'>
                    {followers}
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