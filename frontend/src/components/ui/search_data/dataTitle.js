import React from 'react';
import PropTypes from 'prop-types';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DataTitle = ({title='', resultId=0, explination='', onRemove=f=>f}) => {
    return (
        <div className='row'>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-10'>
                        <p className='resultTitle ColorW'>{title}</p>
                    </div>
                    <div className='col-1 offset-1'>
                        <a href='#' onClick={(e) => onRemove(e, resultId)}>
                            <FontAwesomeIcon className='ColorW F12' icon={faTimesCircle}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='col-12'>
                <p className='ColorW'>{explination}</p>
            </div>
        </div>
    )
}

DataTitle.propTypes = {
    title: PropTypes.string,
    resultId: PropTypes.number,
    explination: PropTypes.string,
    onRemove: PropTypes.func

}
export default DataTitle