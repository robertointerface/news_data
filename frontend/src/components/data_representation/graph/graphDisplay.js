import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
var LineChart = require("react-chartjs").Line;





class GraphDisplay extends Component{

    render(){
        var {list} = this.props
        return(
            <div className='row'>
                {(list.length > 0) ?
                    list.map((chart, i) =>
                    <div className='col-6' key={`CHART-${i}`}>
                        <LineChart data={chart.data} options={chart.options} width="600" height="250"/>
                    </div>
                    )
                    :null
                }
            </div>
        )
    }
}

export default GraphDisplay