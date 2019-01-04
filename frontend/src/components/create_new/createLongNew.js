import React from 'react';
import PropTypes from 'prop-types';
import PageTemplate from '../main/PageTemplate'
import {
    CreateNewContainer,
    SearchDataContainer,
    DataDisplayContainer
} from '../../containers/containers'

const CreateLongNew = () => {
    return(
        <PageTemplate>
            <div className='row'>
                <div className='col-8'>
                    <div className='row'>
                        <CreateNewContainer/>
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
