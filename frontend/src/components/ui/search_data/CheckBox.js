import React from 'react';
import { Component } from 'react'


class CheckBox extends Component {

    constructor(props){
        super(props)

    }

    render() {
        const { checked, name, id, onChange, keyVal } = this.props
        return (
            <div className='form-check'>
                <input type='checkbox'
                           className='form-check-input'
                           onChange={(e) => onChange(e, id)}
                           checked={checked}
                           key={keyVal}
                />
                <label className='form-check-label'>{name}</label>
            </div>
                )
    }
}

export default CheckBox