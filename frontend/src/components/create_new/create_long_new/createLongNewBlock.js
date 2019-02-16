import React from 'react';
import {Component} from 'react'
import PropTypes from 'prop-types';
import PageTemplate from 'components/main/PageTemplate'

import {
    CreateNewFormContainer,
    DataDisplayContainer,
    GraphDisplayContainer
} from 'containers/createNewContainers'

import {SearchDataContainer} from 'containers/searchDataContainers'

const isUserAuthorize = (username='', token='') => {
    var saveUser = JSON.parse(localStorage.getItem('user'));
    if(saveUser){
        if(username == saveUser['username']){
            return true;
        }
    }
    return false;
}


class CreateLongNewBlock extends Component{
    constructor(props){
        super(props)
        var username = this.props.match.params.username
        this.isAuthorize = isUserAuthorize(username, localStorage.getItem('token'));
    }
    render() {
        return (
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
                            <GraphDisplayContainer/>
                    </div>
                </div>
            </PageTemplate>
        )
    }
}

export default CreateLongNewBlock
