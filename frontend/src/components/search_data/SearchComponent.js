import React from 'react';
import OptionsCard from './optionsCard'

const SearchComponent = ({title='title', list=[], onSelect=f=>f}) => {
    return(
        <OptionsCard cardTitle={title} list={list} onSelect={onSelect}/>
    )
}

export default SearchComponent