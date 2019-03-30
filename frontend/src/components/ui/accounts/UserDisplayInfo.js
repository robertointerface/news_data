import React from 'react';
import {PrimaryButton} from 'ui/common/buttons/buttons'
import PropTypes from 'prop-types';
import Login from "root/components/accounts/Login";

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

Login.propTypes = {
    username: PropTypes.string,
    location: PropTypes.string,
    about_me: PropTypes.string,
    followers: PropTypes.number,
    publishedNews: PropTypes.number,
    onFollow: PropTypes.func,
    following: PropTypes.bool,
    canFollow: PropTypes.bool
}

export default UserInfoCard