import React from 'react'
import {Component} from 'react'
import CardCol12 from 'ui/common/cards/CardCol12'
import InfoCardItem from 'components/user_display/user_private_info/InfoCardItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAddressCard,
    faNewspaper,
    faTable,
    faUsers,
    faGlobeEurope,
} from '@fortawesome/free-solid-svg-icons'
import Title from 'components/user_display/user_private_info/InfoCardTitle'

const UserInfoCard = ({username='', about_me='', publishNews=0, followers=0, location='', following=0, savedData='' }) => {
    return (
        <CardCol12 Component={<Title title={username}/>} cardClass={'MB1'} headerClass={'bg-primary'}>
            <div className='card-body'>
                <div className='row'>
                    <InfoCardItem fontIcon={faNewspaper} text={`Published news: ${publishNews}`}/>
                    <InfoCardItem fontIcon={faUsers} text={`Followers: ${followers}`}/>
                    <InfoCardItem fontIcon={faUsers} text={`Following: ${following}`}/>
                    <InfoCardItem fontIcon={faAddressCard} text={`About me: ${about_me}`}/>
                    <InfoCardItem fontIcon={faGlobeEurope} text={`Location: ${location}`}/>
                </div>
            </div>
        </CardCol12>
    )
}

export default UserInfoCard