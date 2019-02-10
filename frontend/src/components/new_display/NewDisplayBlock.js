

import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import PageTemplate from 'components/main/PageTemplate'
import {DisplayNewListContainer} from 'containers/newDisplayContainer'

class NewDisplayBlock extends Component{
    constructor(props){
        super(props )
    }
    render(){
        return(
            <PageTemplate>
                <div className='row'>
                    <div className='col-12'>
                        <DisplayNewListContainer/>
                    </div>
                </div>
            </PageTemplate>
        )
    }
}

export default NewDisplayBlock