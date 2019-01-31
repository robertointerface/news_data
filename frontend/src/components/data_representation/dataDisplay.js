import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import Table from "./table";
import DataTitle from 'ui/search_data/dataTitle'
import {AttachDataRequest} from './attachData'
import {ChangeUnitMeasureContainer} from 'containers/searchDataContainers'
class DataDisplay extends Component{

    render(){
        let { resultLenght, list, onAttach, onRemove } =  this.props;
        return(
            <div className='row'>
                {(resultLenght > 0) ?
                    list.map((result, i) =>
                        <div className='col-6' key={result.id}>
                                <div className='card'>

                                        <div className='card-header bg-primary'>
                                            <div className='col-12'>
                                                <DataTitle
                                                    title={result.searchObject.Topic.name}
                                                    resultId={result.id}
                                                    explination={result.searchObject.displayMessage}
                                                    onRemove={onRemove}/>
                                            </div>
                                        </div>
                                        <div className='resultCardBody card-body'>
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <Table columnList={result.searchObject.SelectedTimes}
                                                           rowList={result.resultObject.filterResult}
                                                    />
                                                </div>
                                                <div className='col-12'>
                                                    <div className='row'>
                                                        <div className='col-5 offset-2'>
                                                            <AttachDataRequest onClick={(e) => onAttach(e, result.id)}/>
                                                        </div>
                                                        <div className='offset-2 col-3'>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-8 offset-2'>
                                                    <ChangeUnitMeasureContainer props={result.id}/>
                                                </div>
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