import React from 'react';
import {
    NewTitleForm,
    NewHeadlineForm,
    NewContentForm
} from 'ui/create_new/forms'

import {
    AttachedReferencesContainer
} from 'containers/createNewContainers'

import CardCol12 from 'ui/common/cards/CardCol12'
import {PrimaryButton} from 'ui/common/buttons/buttons'

const LongNewForm = ({title='', headline1='', headline2='', headline3='', content='', onSubmit= f=>f, onChange= f=>f}) => {
    return (
        <CardCol12 Component={ <NewTitleForm onChange={onChange} name='title' value={title}/> }>
            <NewHeadlineForm key='headline1' onChange={onChange} name='headline1' value={headline1}/>
            <NewHeadlineForm key='headline2' onChange={onChange} name='headline2' value={headline2}/>
            <NewHeadlineForm key='headline3' onChange={onChange} name='headline3' value={headline3}/>
            <NewContentForm onChange={onChange} name='content' value={content}/>
            <div className='row'>
                <div className='col-6'>
                    <PrimaryButton message={'Submit'} onClick={onSubmit}/>
                </div>
                <div className='col-6'>
                    <AttachedReferencesContainer/>
                </div>
            </div>
        </CardCol12>
    )
}

export default LongNewForm