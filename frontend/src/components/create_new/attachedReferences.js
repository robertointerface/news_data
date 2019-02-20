import React from 'react';
import PropTypes from 'prop-types';
import {DropDownMenuRemove} from 'ui/common/dropdowns/dropDownRemove'
import {parseList} from 'functions/Results_management/stateManipulation'

const AttachedReferences = ({tableList=[], chartList=[], onRemove=f=>f}) => {
    var tableCleanList = cleanTable(tableList);
    var chartCleanList = cleanCharts(parseList(chartList)); // chartList must be parsed as is an array of STRINGIFIED JSON Objects
    var cleanList = [...tableCleanList, ...chartCleanList] // Combine both list into one
    return (
        <DropDownMenuRemove title={'Attachments'} list={cleanList} onRemove={onRemove}/>
    )
}

AttachedReferences.propTypes = {
    tableList: PropTypes.array,
    chartList: PropTypes.array
}

export default AttachedReferences


function cleanTable(tableList){
/*
    @Func: convert state.Create_new.references.tables into a list of objects
    {name: searchObject.displayMessage, id: id, type: 'table'}, the object is used to display information
    @Args:
        result(array): state.Create_new.references.tables
    @Return: list of objects
 */

    var list = tableList.map((x, i) =>{
        return {
            'type': 'table',
            'name': x.searchObject.displayMessage,
            'id': x.id
        }
    })

    return list;
}


function cleanCharts(chartList){
/*
    @Func: convert state.Create_new.references.charts into a list of objects
    {name: searchObject.displayMessage, id: id, type: 'chart'}, the object is used to display information
    @Args:
        result(array): state.Create_new.references.chart
    @Return: list of objects
 */

    var list = chartList.map((x, i) =>{
        return {
            'type': 'chart',
            'name': x.explanation,
            'id': x.id
        }
    })

    return list;
}