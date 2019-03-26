import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faGlobeEurope,
} from '@fortawesome/free-solid-svg-icons'

const UserInfoTextForm = ({title='', name='', value='', onChange=f=>f}) => {

    return(
        <div className='form-group row'>
            <label className='col-12'>
                <span className='formTitle colorBlue bold'>{title}</span>
            </label>
            <div className='col-12'>
               <input className='form-control'
                       type='text'
                       name={name}
                       value={value}
                       placeholder=''
                       onChange={(e) => onChange(e)}
                />
            </div>
        </div>
    )
}

const PasswordForm = ({title='', name='', value='', onChange=f=>f}) => {
    return(
        <div className='form-group row'>
            <label className='col-12'>
                <span className='formTitle colorBlue bold'>{title}</span>
            </label>
            <input
                type='password'
                name={name}
                value={value}
                className="form-control"
                onChange={(e) => onChange(e)}
                placeholder='max. 10 characters'
                maxLength="10"
            />
        </div>
    )
}

const UserInfoTextAreaForm = ({title='', name='', value='', onChange=f=>f}) => {
    return(
        <div className="form-group row">
            <label className='col-12'>
                <span className='formTitle colorBlue bold'>{title}</span>
            </label>
            <div className='col-12'>
                <textarea className='form-control'
                          maxLength={600}
                          name={name}
                          value={value}
                          onChange={(e) => onChange(e)}
                          placeholder='(max. 600 charac.)'
                          rows='10'
                          cols='50'>
                </textarea>
            </div>
        </div>
    )}

export {UserInfoTextForm, UserInfoTextAreaForm, PasswordForm}


