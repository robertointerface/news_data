import React from 'react';
import PropTypes from 'prop-types';
import {Component} from 'react'
import Table from "components/data_representation/table";
import DataTitle from 'ui/search_data/dataTitle'
import DataOptions from 'components/data_representation/dataOptions/dataOptions'

class DisplayReferences extends Component{

    constructor(props){
        super(props)
        this.state = {
            references: this.props.references
        }
    }
    render(){
        var {references} = this.state;
        return(
            <div className='row'>
                {references.map((result, i) =>
                        <div className='col-6' key={result.id}>
                            <div className='card'>
                                <div className='card-header bg-primary'>
                                    <div className='col-12'>
                                        <DataTitle
                                            title={result.searchObject.Topic.name}
                                            resultId={result.id}
                                            explination={result.searchObject.displayMessage}
                                        />
                                    </div>
                                </div>
                                <div className='resultCardBody card-body'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <Table columnList={result.searchObject.SelectedTimes}
                                                   rowList={result.resultObject.filterResult}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )}
            </div>
        )
    }
}

export default DisplayReferences