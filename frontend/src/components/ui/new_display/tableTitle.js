import React from 'react';
import PropTypes from 'prop-types';

const TableTitle = ({title='', explination=''}) => {
    return (
        <div className='row'>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-10'>
                        <p className='resultTitle ColorW'>{title}</p>
                    </div>
                </div>
            </div>
            <div className='col-12'>
                <p className='ColorW'>{explination}</p>
            </div>
        </div>
    )
}

TableTitle.propTypes = {
    title: PropTypes.string,
    explination: PropTypes.string
}

export default TableTitle