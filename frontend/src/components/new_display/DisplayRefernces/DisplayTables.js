import React from 'react';
import PropTypes from 'prop-types';
import {Component} from 'react'
import Table from "components/data_representation/table";
import TableTitle from 'ui/new_display/tableTitle'
import DataOptions from 'components/data_representation/dataOptions/dataOptions'
import {faTools} from "@fortawesome/free-solid-svg-icons/index";
import {ExcelDownload, GoToThirdParty} from 'components/data_representation/dataOptions/options'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {excel_download} from 'functions/User_profile/userDataFunctions'

class DisplayTables extends Component{
    constructor(props){
        super(props)
        this.state = {
            tables: this.props.tables
        }
        this.handle_excel_download = this.handle_excel_download.bind(this)
    }

    handle_excel_download (e, result_id){
        /*
            Handle 'download in excel' request.
         */
        e.preventDefault();
        var dataToExcel = this.state.tables.find(table => table.id == result_id);
        if(dataToExcel){
            excel_download(dataToExcel).catch(error => {

            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        /**
            componentDidUpdate is required to re render when tables are modified
         */

        //Check if the id of the first table has change, if it has change then the tables has changed and
        //it needs re render after re render can only happen if the state is modified.
        if(this.props.tables[0].id !== prevProps.tables[0].id) {
            return this.setState({
                tables: this.props.tables
            })
        }
    }

    render(){
        var {tables} = this.state;
        return(
            <div className='row'>
                {tables.map((table, i) =>
                        <div className='col-12 col-lg-6' key={table.id}>
                            <div className='card MT05'>
                                <div className='card-header bg-primary'>
                                    <div className='col-12'>
                                        <TableTitle
                                            title={table.searchObject.Topic.name}
                                            explination={table.searchObject.displayMessage}
                                        />
                                    </div>
                                </div>
                                <div className='resultCardBody card-body'>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <Table columnList={table.searchObject.SelectedTimes}
                                                   rowList={table.resultObject.filterResult}
                                            />
                                        </div>
                                        <div className='col-6 col-md-3'>
                                            <div className="dropdown">
                                                <button className="btn btn-primary dropdown-toggle ML05 MB05" type="button" id={`optionsDropdow${i}`}
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <FontAwesomeIcon className='F12' icon={faTools}/>
                                                </button>
                                                <div className="dropdown-menu padding0" aria-labelledby={`optionsDropdow${i}`}>
                                                    <div className='list-group'>
                                                        <ExcelDownload title={"download excel"}
                                                                       resultId={table.id}
                                                                       onClick={this.handle_excel_download}/>
                                                        <GoToThirdParty title={"go to"}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                )}
            </div>
        )
    }
}

export default DisplayTables