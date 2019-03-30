import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from 'components/data_representation/tableHeader'
import Tablebody from 'components/data_representation/tableBody'
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

Table.propTypes = {
    columnList: PropTypes.array,
    rowList: PropTypes.array
}

export default Table