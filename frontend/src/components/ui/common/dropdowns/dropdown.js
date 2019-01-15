import React from 'react';
import PropTypes from 'prop-types'
import { DropdownButton, MenuItem, ButtonToolbar } from 'react-bootstrap';

export const DropDownMenu = ({title='', list=[]}) => {
    return (
        <div className="dropdown row">
            <button className="btn btn-primary dropdown-toggle" type="button" id="commonDropdown"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {title}
            </button>
            <div className="dropdown-menu padding0" aria-labelledby="commonDropdown">
                <ul className='list-group'>
                    {list.map((x, i) =>
                        <li className='list-group-item' key={i}>
                            {x.name}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}
