import React from 'react';
import PropTypes from 'prop-types';
import {DropDownMenu} from 'ui/common/dropdowns/dropdown'

const AttachedReferences = ({list=[]}) => {
    var cleanList = getAttachedRefList(list)
    return (
        <DropDownMenu title={'References'} list={cleanList}/>
    )
}

AttachedReferences.propTypes = {
    list: PropTypes.array
}

export default AttachedReferences

function getAttachedRefList( results=[] ){
    var list = [];
    for(var result in results){
        list.push(createAttachObject(results[result].searchObject, result))
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