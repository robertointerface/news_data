import React from 'react';
import PropTypes from 'prop-types';
import {DropDownMenuSearch} from 'ui/search_data/DropDownMenuSearch'

const ChangeUnitMeasureSearch = (props) => {
    return (
        <di classname="col-12">
        {(props.list) ?
            <DropDownMenuSearch title={'change unit measure'} list={props.list} resultId={props.resultId} onClick={props.onClick}/>
            : null
        }
        </di>
    )
}

export default ChangeUnitMeasureSearch