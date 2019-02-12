import React from 'react'
import PropTypes from 'prop-types'

export const SelectList = ({list=[], onSelect=f=>f}) =>
    <div className={'list-group' + (list.length > 4 ? ' scroll_300' : '' )}>
        {list.map((x, i) => <a onClick={(e) => onSelect(e, x.id, x.name)}
                               href='#'
                               className={'list-group-item list-group-item-action ' + (x.select ? 'active' : '')}
                               key={`${x.id}-${i}`}>{x.name}
                               </a>
        )}
    </div>


SelectList.propTypes = {
    list: PropTypes.array,
    onSelect: PropTypes.func
}

export default SelectList