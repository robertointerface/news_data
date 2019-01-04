import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import Table from "./table";
import DataTitle from '../ui/search_data/dataTitle'
import {AttachDataRequest} from './attachData'

class DataDisplay extends Component{

    render(){
        let { resultLenght, list, onAttach } =  this.props;
        return(
            <div className='row'>
                {(resultLenght > 0) ?
                    list.map((result, i) =>
                        <div className='col-6' key={i}>
                            <div className='card'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <DataTitle title={result.searchObject.displayMessage}/>
                                    </div>
                                    <div className='col-12'>
                                        <Table columnList={result.searchObject.Times}
                                               rowList={result.resultObject.filterResult}
                                        />
                                    </div>
                                    <div className='col-12'>
                                        <AttachDataRequest onClick={(e) => onAttach(e, i)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    : null
                }
            </div>
        )
    }
}

export default DataDisplay