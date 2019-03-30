import React from 'react';
import PropTypes from 'prop-types'

export const DropDownMenuSearch = ({title='', list=[], resultId='', onClick=f=>f}) => {
    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="commonDropdown"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {title}
            </button>
            <div className="dropdown-menu padding0" aria-labelledby="commonDropdown">
                <div className='list-group'>
                    {list.map((x, i) =>
                        <a href='#' className='list-group-item' key={`${x.id}-${i}`} onClick={(e) => onClick(e, resultId, x.id)}>
                            {x.name}
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

DropDownMenuSearch.prototype = {
    title: PropTypes.string,
    list: PropTypes.array,
    resultId: PropTypes.string,
    onClick: PropTypes.func
}