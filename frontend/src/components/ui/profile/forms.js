import React from 'react';
import PropTypes from 'prop-types';
import {NewTitleForm} from "root/components/ui/create_new/forms";

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

UserInfoTextForm.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
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

PasswordForm.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
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

UserInfoTextAreaForm.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export {UserInfoTextForm, UserInfoTextAreaForm, PasswordForm}


