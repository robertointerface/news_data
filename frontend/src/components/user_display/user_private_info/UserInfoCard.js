import React from 'react'
import {Component} from 'react'
import CardCol12 from 'ui/common/cards/CardCol12'

const UserInfoCard = ({about_me='', publishNews=0, followers=0, location='', following=0, savedData='' }) => {
    return (
        <CardCol12>
            <div className='card-body'>
                <div className='row'>
                    <div className='col-12 col-md-6'>
                        <p>{publishNews}</p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <p>{followers}</p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <p>{following}</p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <p>{savedData}</p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <p>{about_me}</p>
                    </div>
                    <div className='col-12 col-md-6'>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </CardCol12>
    )
}

export default UserInfoCard