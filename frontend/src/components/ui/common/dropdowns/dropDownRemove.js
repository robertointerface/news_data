import React from 'react';
import PropTypes from 'prop-types'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faTable, faChartBar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const DropDownMenuRemove = ({title='', list=[], onRemove=f=>f}) => {

    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle MB05" type="button" id="commonDropdown"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {title}
            </button>
            <div className="dropdown-menu padding0" aria-labelledby="commonDropdown">
                <div className='list-group'>
                    {list.map((x, i) =>
                        <div key={`REF-${x.id}-${i}`} className='list-group-item'>
                            <div className='col-12'>
                                <div className='row'>
                                    <div className='col-2'>
                                        {(x.type == 'table') ?
                                            <FontAwesomeIcon className='F12' icon={faTable}/>:
                                            <FontAwesomeIcon className='F12' icon={faChartBar}/>
                                        }
                                    </div>
                                    <div className='col-2 offset-8'>
                                        <a href='#' onClick={(e) => onRemove(e, x.type, x.id)}>
                                            <FontAwesomeIcon className='F12' icon={faTimesCircle}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12'>
                                    <a>
                                        {x.name}
                                    </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

DropDownMenuRemove.propTypes = {
    title: PropTypes.string,
    list: PropTypes.array,
    onRemove: PropTypes.func
}