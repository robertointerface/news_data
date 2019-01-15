import React from 'react';
import CheckBoxList from 'ui/search_data/CheckBoxList'
import { Component } from 'react'
/*const TimeOptions = ({title='title', list=[], onChange=f=>f}) => {
    return(
        <CheckBoxList list={list} onChange={onChange}/>
    )
}*/

class TimeOptions extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
             <div className={'list-group' + (this.props.list.length > 4 ? ' scroll_300' : '' )}>
                {this.props.list.map((x, i) =>
                    <div className='form-check' key={'time'+ i.toString()}>
                        <TimeInput onClick={this.props.onClick} checked={x.checked} name={x.name} id={x.id}/>
                        <label className='form-check-label'>{x.name}</label>
                    </div>
                )}
            </div>
        )
    }
}

class TimeInput extends Component {

    constructor(props){
        super(props)

    }
    render() {
        let {onClick, checked, id, name} = this.props
            return(
                <input type='checkbox'
                               className='form-check-input'
                               onClick={(e) => onClick(e, id)}
                               checked={checked ? true: false}
                               key={id}
                               value={name}/>
            )
    }
}




export default TimeOptions