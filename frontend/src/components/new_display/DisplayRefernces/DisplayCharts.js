import React from 'react';
import PropTypes from 'prop-types';
import {Component} from 'react'
import DataTitle from 'ui/search_data/dataTitle'
import {Line, Bar} from 'react-chartjs-2';
import TableTitle from 'ui/new_display/tableTitle'

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
                    <div className='col-12 col-lg-6' key={chart.id}>
                        <div className='card MT05'>
                            <div className='card-header bg-primary'>
                                <div className='col-12'>
                                    <TableTitle
                                            title={chart.explanation}
                                        />
                                </div>
                            </div>
                            <div className='card-body'>
                                {(chart.type == 'line') ?
                                    <Line data={chart.data} options={chart.options} width="400" height="400"/> :

                                    <Bar data={chart.data} options={chart.options} width="400" height="400"/>
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default DisplayCharts