import React from 'react';
import {Component} from 'react'
import PropTypes from 'prop-types';
import PageTemplate from 'components/main/PageTemplate'
import 'components/stylesheets/createNew.css'

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
                    <div className='col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12'>
                        <div className='row'>
                            <CreateNewFormContainer/>
                        </div>
                    </div>
                    <div className='col-xl-4 col-lg-4 col-md-5 col-12'>
                        <div className='row'>
                            <SearchDataContainer/>
                        </div>
                    </div>
                    <div className='col-12'>
                        <DataDisplayContainer/>
                        <GraphDisplayContainer/>
                    </div>
                </div>
            </PageTemplate>
        )
    }
}

export default CreateLongNewBlock
