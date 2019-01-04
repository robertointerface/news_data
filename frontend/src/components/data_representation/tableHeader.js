import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({list = []}) => {
    var test = list
    return(
        <thead>
            <tr className='table-primary'>
                <th scope="col">
                    countries
                </th>
                {list.map((x, i) =>
                    <th scope="col" key={i}>
                        {x}
                    </th>
                )}
            </tr>
        </thead>
    )
}

export default TableHeader