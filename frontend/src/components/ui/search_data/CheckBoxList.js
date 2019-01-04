import React from 'react'
import PropTypes from 'prop-types'

import { Component } from 'react'
/*export const CheckBoxList = ({list=[], onChange=f=>f}) =>
    <div className={'list-group' + (list.length > 4 ? ' scroll_300' : '' )}>
        {list.map((x, i) =>
            <CheckBox checked={x.checked == true ? true : false} name={x.name} onChange={onChange} id={x.id} keyVal={i}/>
        )}
    </div>*/

class CheckBoxList extends Component {
     constructor(props){
        super(props)
    }
    componentDidUpdate() {
        const props = this.props
        const list = this.props.list
        const state = this.state
        console.log(' list: ' + JSON.stringify(list));
    }
    render(){
        const {list, onChange } = this.props

        return (
            <div className={'list-group' + (list.length > 4 ? ' scroll_300' : '' )}>
                {list.map((x, i) =>
                    <div className='form-check'>
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
        )
    }
}


CheckBoxList.propTypes = {
    list: PropTypes.array,
    onSelect: PropTypes.func
}

export default CheckBoxList