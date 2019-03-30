import React from 'react'
import PropTypes from 'prop-types'

export const CheckBoxList = ({list=[], onChange=f=>f}) =>
    <div className={'list-group' + (list.length > 4 ? ' scroll_300' : '' )}>
                {list.map((x, i) =>
                    <div className='form-check' key={i}>
                        <input type='checkbox'
                               className='form-check-input'
                               onChange={(e) => onChange(e, x.id)}
                               checked={x.checked}
                               key={i}
                               value={x.name}/>
                        <label className='form-check-label'>{x.name}</label>
                    </div>
                )}
    </div>

CheckBoxList.propTypes = {
    list: PropTypes.array,
    onSelect: PropTypes.func
}

export default CheckBoxList