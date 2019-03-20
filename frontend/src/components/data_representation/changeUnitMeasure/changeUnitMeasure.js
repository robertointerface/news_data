import React from 'react';
import PropTypes from 'prop-types';
import {DropDownMenu} from 'ui/common/dropdowns/dropdown'

const ChangeUnitMeasure = (props) => {
    return (
        <di classname="col-12">
        {(props.list) ?
            <DropDownMenu title={'change unit measure'} list={props.list} onClick={props.onClick}/>
            : null
        }
        </di>
    )
}

export default ChangeUnitMeasure