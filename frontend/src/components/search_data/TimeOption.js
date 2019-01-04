import React from 'react';
import CheckBoxList from '../ui/search_data/CheckBoxList'

const TimeOptions = ({title='title', list=[], onChange=f=>f}) => {
    return(
        <CheckBoxList list={list} onChange={onChange}/>
    )
}

export default TimeOptions