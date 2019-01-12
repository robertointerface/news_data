import React from 'react';
import PropTypes from 'prop-types';
import PageTemplate from '../main/PageTemplate'
import {
    CreateNewFormContainer,
    SearchDataContainer,
    DataDisplayContainer
} from '../../containers/createNewContainers'

const CreateLongNew = ({headline1=''}) => {
    return(
        <PageTemplate>
            <div className='row'>
                <div className='col-8'>
                    <div className='row'>
                        <CreateNewFormContainer/>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='row'>
                        <SearchDataContainer/>
                    </div>
                </div>
                <div className="col-12">
                    <DataDisplayContainer/>
                </div>
            </div>
        </PageTemplate>
    )
}

export default CreateLongNew
