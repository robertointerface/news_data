import React from 'react';
import OptionsCard from './optionsCard'

const SearchComponent = ({title='title', list=[], onSelect=f=>f}) => {
    return(
        <div>
            {(list.length > 0) ?
                <OptionsCard cardTitle={title} list={list} onSelect={onSelect}/>
                : null
            }
        </div>
    )
}

export default SearchComponent