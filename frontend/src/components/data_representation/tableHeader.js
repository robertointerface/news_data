import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({list = []}) => {
    return(
        <thead>
            <tr className='table-primary'>
                <th scope="col">
                    countries
                </th>
                {list.map((x, i) =>
                    <th scope="col" key={`Geo-${x}-${i}`}>
                        {x}
                    </th>
                )}
            </tr>
        </thead>
    )
}

TableHeader.propTypes = {
    list: PropTypes.array,
}
export default TableHeader