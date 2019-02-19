import React from 'react';
import PropTypes from 'prop-types';
import {DropDownMenuRemove} from 'ui/common/dropdowns/dropDownRemove'

const AttachedReferences = ({tableList=[], chartList=[], onRemove=f=>f}) => {
    var tableCleanList = cleanTable(tableList);
    var chartCleanList = cleanCharts(chartList);
    var cleanList = [...tableCleanList, ...chartCleanList]
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
    @Func: convert state.Create_new.references into a list of objects {name: searchObject.displayMessage, id: id}
    @Args:
        result(array): state.Create_new.references
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
    @Func: convert state.Create_new.references into a list of objects {name: searchObject.displayMessage, id: id}
    @Args:
        result(array): state.Create_new.references
    @Return: list of objects
 */
    var list = chartList.map((x, i) =>{
        return {
            'type': 'graph',
            'name': x.explanation,
            'id': x.id
        }
    })

    return list;
}





function createAttachGraph (graphObject, id) {
    var attachObject = {};

    if(graphObject){
        attachObject['type'] = 'graph';
        attachObject['name'] = graphObject.explanation;
        attachObject['id'] = id
    }
    else{
         attachObject['name'] = '';
         attachObject['id'] = -1;
    }
    return attachObject;
}

function createAttachObject (searchObject, id) {
    var attachObject = {};

    if(searchObject){
        attachObject['type'] = 'table';
        attachObject['name'] = searchObject.displayMessage;
        attachObject['id'] = id
    }
    else{
         attachObject['name'] = '';
         attachObject['id'] = -1;
    }

    return attachObject;
}