import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';

import {Line} from 'react-chartjs-2';




class GraphDisplay extends Component{

    render(){
        var {list} = this.props
        return(
            <div className='row'>
                {(list.length > 0) ?
                    list.map((chart, i) =>
                    <div className='col-6' key={`CHART-${chart.id}-${i}`}>
                        <Line data={chart.data} options={chart.options} width="600" height="400"/>
                        <p>{chart.explanation}</p>
                    </div>
                    )
                    :null
                }
            </div>
        )
    }
}

export default GraphDisplay