
import React from 'react';
import {FormGroup, Checkbox} from 'react-bootstrap';


const GeoOptions = (props) => {
    return(
        <div className={'list-group' + (props.list.length > 4 ? ' scroll_300' : '' )}>
                {props.list.map((x, i) =>

                        <FormGroup>
                            {(x.checked == false) ?
                                <GeoInput onChange={props.onChange} checked={x.checked} name={x.name} id={x.id}/>
                                :  <GeoInputChecked onChange={props.onChange} checked={x.checked} name={x.name} id={x.id}/>
                            }
                        </FormGroup>
                )}
        </div>
    )
}

export default GeoOptions

const GeoInput = (props) => {
    let {onChange, id, name} = props
    return(
            <Checkbox
                onChange={(e) => onChange(e, id, name)}
                key={name}
                value={name}>{name}
            </Checkbox>
    )
}

const GeoInputChecked = (props) => {
    let {onChange, id, name} = props
    return(
        <Checkbox
            onChange={(e) => onChange(e, id, name)}
            checked
            key={name}
            value={name}>{name}
        </Checkbox>
    )
}

