import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import Table from "components/data_representation/table";
import DataTitle from 'ui/search_data/dataTitle'
import {AttachDataRequest} from 'components/data_representation/attachData'
import {
    DisplayDataMessage
} from 'containers/searchDataContainers'
import DataOptionsSearch from 'components/data_representation/dataOptions/dataOptionsSearch'
import ChangeUnitMeasureSearch from 'components/data_representation/changeUnitMeasure/changeUniteMeasureSearch'
class DataDisplayNonRedux extends Component{


    render(){
        let { resultLenght, list, onRemove, onChangeUnit, onGraph } =  this.props;
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
                                                        <div className='offset-1 col-5'>
                                                            <DataOptionsSearch resultId={result.id}
                                                                               resultSaved={result.saved}
                                                                               onGraph={onGraph} />
                                                        </div>
                                                    </div>
                                                </div>
                                                {(result.searchObject.PossibleUnitMeasure.length > 1) ?
                                                    <div className='col-8 offset-2 MT1 MB1'>
                                                        <ChangeUnitMeasureSearch list={result.searchObject.PossibleUnitMeasure}
                                                                           resultId={result.id}
                                                                           onClick={onChangeUnit}/>
                                                    </div> : null
                                                }
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

export default DataDisplayNonRedux