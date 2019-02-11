import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import CardCol12 from 'ui/common/cards/CardCol12'
import NewTitle from 'ui/new_display/title'
import Headline from 'ui/new_display/headline'

const NewCard = ({title='', headline1='', headline2='', headline3='', content=''}) => {
    return(
        <CardCol12 Component={<NewTitle title={title}/>} headerClass='bg-primary'>
             <div className='resultCardBody card-body'>
                 <ul>
                     <Headline text={headline1}/>
                     <Headline text={headline2}/>
                     <Headline text={headline3}/>
                 </ul>
                 <p>{content}</p>
             </div>
        </CardCol12>
    )
}

export default NewCard