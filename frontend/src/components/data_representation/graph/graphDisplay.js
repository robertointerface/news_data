import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import {Line, Bar} from 'react-chartjs-2';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {AttachDataRequest} from 'components/data_representation/attachData'
import {
    DisplayDataMessage
} from 'containers/searchDataContainers'

const GraphDisplay = ({list=[], onRemove=f=>f, onAttach=f=>f}) => {
        //As charts data is saved in string format, it is required to parse the data so it can be handle in JSON
        //format later.
        var chartList = list.map((chart, i) =>{
            return JSON.parse(chart);
        })

        return(
            <section className='row'>
                {(chartList.length > 0) ?
                    chartList.map((chart, i) =>
                        <div className='col-6' key={`CHART-${chart.id}-${i}`}>
                            <div className='card'>
                                <div className='card-header bg-primary'>
                                    <div className='row'>
                                        <div className='col-10'>
                                            <p className='ColorW'>{chart.explanation}</p>
                                        </div>
                                        <div className='col-2'>
                                             <a href='#' onClick={(e) => onRemove(e, chart.id)}>
                                                <FontAwesomeIcon className='ColorW F12' icon={faTimesCircle}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-body'>
                                    {(chart.type == 'line') ?
                                        <Line data={chart.data} options={chart.options} width="400" height="400"/> :

                                        <Bar data={chart.data} options={chart.options} width="400" height="400"/>
                                    }

                                    <AttachDataRequest
                                            onClick={(e) => onAttach(e, chart.id)}
                                            attached={chart.attached}
                                    />
                                    <DisplayDataMessage message={chart.DisplayMessage.message}
                                                        type={chart.DisplayMessage.type}
                                    />
                                </div>

                            </div>
                        </div>


                    )
                    :null
                }
            </section>
        )
    }

export default GraphDisplay