import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import {Line} from 'react-chartjs-2';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {AttachDataRequest} from 'components/data_representation/attachData'

const GraphDisplay = ({list=[], onRemove=f=>f, onAttach=f=>f}) => {
        var chartList = list.map((chart, i) =>{
            return JSON.parse(chart);
        })

        return(
            <section className='row'>
                {(list.length > 0) ?
                    list.map((chart, i) =>
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
                                    <Line data={chart.data} options={chart.options} width="400" height="400"/>
                                    <AttachDataRequest
                                            onClick={(e) => onAttach(e, chart.id)}
                                            attached={chart.attached}
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