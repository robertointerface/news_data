import React from 'react';
import PropTypes from 'prop-types'

export const DropDownMenu = ({title='', list=[], onClick=f=>f}) => {
    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="commonDropdown"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {title}
            </button>
            <div className="dropdown-menu padding0" aria-labelledby="commonDropdown">
                <div className='list-group'>
                    {list.map((x, i) =>
                        <a href='#' className='list-group-item' key={`${x.id}-${i}`} onClick={(e) => onClick(e, x.id)}>
                            {x.name}
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}


DropDownMenu.propTypes = {
    title: PropTypes.string,
    list: PropTypes.array,
    onClick: PropTypes.func
}