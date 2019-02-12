import React from 'react';

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

export default Tablebody