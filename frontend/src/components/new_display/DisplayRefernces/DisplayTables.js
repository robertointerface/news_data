import React from 'react';
import PropTypes from 'prop-types';
import {Component} from 'react'
import Table from "components/data_representation/table";
import TableTitle from 'ui/new_display/tableTitle'
import DataOptions from 'components/data_representation/dataOptions/dataOptions'

class DisplayTables extends Component{

    constructor(props){
        super(props)
        this.state = {
            tables: this.props.tables
        }
    }
    render(){
        var {tables} = this.state;
        return(
            <div className='row'>
                {tables.map((table, i) =>
                        <div className='col-6' key={table.id}>
                            <div className='card'>
                                <div className='card-header bg-primary'>
                                    <div className='col-12'>
                                        <TableTitle
                                            title={table.searchObject.Topic.name}
                                            resultId={table.id}
                                            explination={table.searchObject.displayMessage}
                                        />
                                    </div>
                                </div>
                                <div className='resultCardBody card-body'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <Table columnList={table.searchObject.SelectedTimes}
                                                   rowList={table.resultObject.filterResult}
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

export default DisplayTables