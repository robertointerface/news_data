import React from 'react';
import OptionsCard from './optionsCard'

const SectorOptions = ({title='title', list=[], onSelect=f=>f}) => {
    return(
        <OptionsCard cardTitle='Database' list={list} onSelect={onSelect}/>
    )
}

export default SectorOptions