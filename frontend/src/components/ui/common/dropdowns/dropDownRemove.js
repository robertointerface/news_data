import React from 'react';
import PropTypes from 'prop-types'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DropDownMenuRemove = ({title='', list=[], onRemove=f=>f}) => {
    return (
        <div className="dropdown row">
            <button className="btn btn-primary dropdown-toggle" type="button" id="commonDropdown"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {title}
            </button>
            <div className="dropdown-menu padding0" aria-labelledby="commonDropdown">
                <div className='list-group'>
                    {list.map((x, i) =>
                        <div className='list-group-item'>
                            <div className='offset-10 col-2'>
                                 <a href='#' onClick={(e) => onRemove(e, x.id)}>
                                    <FontAwesomeIcon className='F12' icon={faTimesCircle}/>
                                 </a>
                            </div>
                            <div className='col-12'>
                                <a key={x.id}>
                                    {x.name} {x.id}
                                </a>
                            </div>
                        </div>

                    )}
                </div>
            </div>
        </div>
    )
}