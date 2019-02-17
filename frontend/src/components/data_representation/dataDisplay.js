import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import Table from "components/data_representation/table";
import DataTitle from 'ui/search_data/dataTitle'
import {AttachDataRequest} from 'components/data_representation/attachData'
import {
    ChangeUnitMeasureContainer,
    DisplayDataMessage
} from 'containers/searchDataContainers'
import DataOptions from './dataOptions/dataOptions'

class DataDisplay extends Component{
    render(){
        let { resultLenght, list, onAttach, onRemove } =  this.props;
        return(
            <section className='row'>
                {(resultLenght > 0) ?
                    list.map((result, i) =>
                        <div className='col-6' key={`RES-${result.id}-${i}`}>
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
                                                    <DisplayDataMessage message={result.DisplayMessage.message}
                                                                        type={result.DisplayMessage.type}
                                                    />
                                                </div>
                                                <div className='col-12'>
                                                    <div className='row'>
                                                        <div className='offset-1 col-5 '>
                                                            <AttachDataRequest
                                                                onClick={(e) => onAttach(e, result.id)}
                                                                attached={result.attached}
                                                            />
                                                        </div>
                                                        <div className='offset-1 col-5'>
                                                            <DataOptions resultId={result.id} resultSaved={result.saved}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-8 offset-2 MT1 MB1'>
                                                    <ChangeUnitMeasureContainer props={result.id}/>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                        </div>
                    )
                    : null
                }
            </section>
        )
    }
}

export default DataDisplay