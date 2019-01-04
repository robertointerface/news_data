import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './tableHeader'
import Tablebody from './tableBody'
const Table = ({ columnList = [], rowList = [] }) => {
    var test = columnList;
    return(
        <div className='table-responsive'>
            <table className="table table-hover">
                <TableHeader list={columnList}/>
                <Tablebody list={rowList}/>
            </table>
        </div>
    )
}

export default Table