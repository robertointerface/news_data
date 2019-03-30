import React from 'react';
import PropTypes from 'prop-types';
export const Tablebody = ({list=[]}) => {
    return (
        <tbody>
        {list.map((x, i) =>
            <tr className='table-warning' key={i}>
                <th scope="row">{x.name}</th>
                {x.values.map((x, i) =>
                    <td key={`R-${x}-${i}`}>
                        {(x != null ? x : '...')}
                    </td>
                )}
            </tr>
        )}
        </tbody>
    )
}

Tablebody.propTypes = {
    list: PropTypes.array,
}
export default Tablebody