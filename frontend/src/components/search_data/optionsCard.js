import React from 'react'
import PropTypes from 'prop-types';
import CardCol12 from 'ui/common/cards/CardCol12'
import OptionsCardTitle from 'ui/search_data/optionsCardTitle'
import SelectList from 'ui/search_data/SelectList'

const OptionsCard = ({cardTitle='options', list=[],  onSelect=f=>f}) => {
    let Title = <OptionsCardTitle title={cardTitle}/>;
    return (
        <CardCol12 Component={Title} cardClass={'MT05'} headerClass={'bg-secondary ColorW SearchTitle'} >
            <SelectList list={list} onSelect={onSelect}/>
        </CardCol12>
    )
}

OptionsCard.propTypes = {
    cardTitle: PropTypes.string,
    list: PropTypes.array,
    onSelect: PropTypes.func
}

export default OptionsCard