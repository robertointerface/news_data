import React from 'react';
import PropTypes from 'prop-types';
import {Component} from 'react'
import DataTitle from 'ui/search_data/dataTitle'
import {Line} from 'react-chartjs-2';

class DisplayCharts extends Component{

    constructor(props){
        super(props)
        this.state = {
            charts: this.props.charts
        }
    }
    render(){
        var {charts} = this.state
        return(
            <div className='row'>
                {charts.map((chart, i) =>
                    <div className='col-6' key={chart.id}>
                        <div className='card'>
                            <div className='card-header bg-primary'>
                                <div className='col-12'>
                                    <DataTitle
                                        title={chart.explanation}
                                        resultId={chart.id}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='card-body'>
                            <Line data={chart.data} options={chart.options} width="400" height="400"/>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default DisplayCharts