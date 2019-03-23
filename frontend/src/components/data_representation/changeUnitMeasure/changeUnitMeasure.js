import React from 'react';
import PropTypes from 'prop-types';
import {DropDownMenu} from 'ui/common/dropdowns/dropdown'

const ChangeUnitMeasure = (props) => {
    return (
        <div>
        {(props.list) ?
            <DropDownMenu title={'change unit measure'} list={props.list} onClick={props.onClick}/>
            : null
        }
        </div>
    )
}

export default ChangeUnitMeasure