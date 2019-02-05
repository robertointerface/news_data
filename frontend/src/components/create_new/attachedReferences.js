import React from 'react';
import PropTypes from 'prop-types';
import {DropDownMenuRemove} from 'ui/common/dropdowns/dropDownRemove'

const AttachedReferences = ({list=[], onRemove=f=>f}) => {
    var cleanList = getAttachedRefList(list)
    return (
        <DropDownMenuRemove title={'References'} list={cleanList} onRemove={onRemove}/>
    )
}

AttachedReferences.propTypes = {
    list: PropTypes.array
}

export default AttachedReferences


function getAttachedRefList( results=[] ){
/*
    @Func: convert state.Create_new.references into a list of objects {name: searchObject.displayMessage, id: id}
    @Args:
        result(array): state.Create_new.references
    @Return: list of objects
 */
    var list = [];
    for(var result in results){
        list.push(createAttachObject(results[result].searchObject, results[result].id))
    }
    return list;
}


function createAttachObject (searchObject, id) {
    var attachObject = {};

    if(searchObject){
        attachObject['name'] = searchObject.displayMessage;
        attachObject['id'] = id
    }
    else{
         attachObject['name'] = '';
         attachObject['id'] = -1;
    }

    return attachObject;
}