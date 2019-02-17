import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import {Line} from 'react-chartjs-2';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class GraphDisplay extends Component{

    render(){
        var {list, onRemove} = this.props
        return(
            <div className='row'>
                {(list.length > 0) ?
                    list.map((chart, i) =>
                        <div className='card col-6'>
                            <div className='row'>
                                <div className='col-10'>
                                    <p>{chart.explanation}</p>
                                </div>
                                <div className='col-2'>
                                     <a href='#' onClick={(e) => onRemove(e, chart.id)}>
                                        <FontAwesomeIcon className='F12' icon={faTimesCircle}/>
                                    </a>
                                </div>
                            </div>
                            <div key={`CHART-${chart.id}-${i}`}>
                                <Line data={chart.data} options={chart.options} width="600" height="400"/>
                            </div>
                        </div>
                    )
                    :null
                }
            </div>
        )
    }
}

export default GraphDisplay