import React from 'react';
import PropTypes from 'prop-types';
import CardCol12 from 'ui/common/cards/CardCol12'
import NewTitle from 'ui/new_display/title'
import Headline from 'ui/new_display/headline'

const NewCard = ({title='', headline1='', headline2='', headline3='', content='', author='', time_stamp=''}) => {
    return(
        <CardCol12 Component={<NewTitle title={title} author={author} date={time_stamp}/>} headerClass='bg-primary'>
             <div className='resultCardBody card-body'>
                 <ul class="list-unstyled">
                     <Headline text={headline1}/>
                     <Headline text={headline2}/>
                     <Headline text={headline3}/>
                 </ul>
                 <p className='NewContent'>{content}</p>
             </div>
        </CardCol12>
    )
}
NewCard.propTypes = {
    title: PropTypes.string,
    headline1: PropTypes.string,
    headline2: PropTypes.string,
    headline3: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
    time_stamp: PropTypes.string
}

export default NewCard