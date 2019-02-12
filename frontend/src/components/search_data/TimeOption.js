import React from 'react';
import CheckBoxList from 'ui/search_data/CheckBoxList'
import { Component } from 'react'
/*const TimeOptions = ({title='title', list=[], onChange=f=>f}) => {
    return(
        <CheckBoxList list={list} onChange={onChange}/>
    )
}*/
import {FormGroup, Checkbox} from 'react-bootstrap'
/*class TimeOptions extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
             <div className={'list-group' + (this.props.list.length > 4 ? ' scroll_300' : '' )}>
                {this.props.list.map((x, i) =>
                        <FormGroup>
                            <TimeInput onChange={this.props.onChange} checked={x.checked} name={x.name} id={x.id}/>
                        </FormGroup>
                )}
            </div>
        )
    }
}*/


const TimeOptions = (props) => {

    return(
        <div className={'list-group' + (props.list.length > 4 ? ' scroll_300' : '' )}>
                {props.list.map((x, i) =>

                        <FormGroup>
                            {(x.checked == false) ?
                                <TimeInput onChange={props.onChange} checked={x.checked} name={x.name} id={x.id}/>
                                :  <TimeInputChecked onChange={props.onChange} checked={x.checked} name={x.name} id={x.id}/>
                            }
                        </FormGroup>
                )}
        </div>
    )
}

const TimeInput = (props) => {
    let {onChange, id, name} = props
    return(
        <a href='#' onClick={(e) => onChange(e, id)}>
            <Checkbox
                key={name}
                value={name}>{name}</Checkbox>
        </a>
    )
}

const TimeInputChecked = (props) => {
    let {onChange, id, name} = props
    return(
         <a href='#' onClick={(e) => onChange(e, id)}>
            <Checkbox
                checked
                key={name}
                value={name}>{name}</Checkbox>
         </a>
    )
}


export default TimeOptions