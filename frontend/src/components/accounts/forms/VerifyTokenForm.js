import React from 'react';
import PropTypes from 'prop-types';
import CardCol6 from 'ui/common/cards/CardCol6'

const VerifyTokenForm =
    ({
         title='Log in',
         onChange=f=>f,
         onSubmit=f=>f,
         username='',
         password='',
         passwordRepeat='',
         last_name='',
         first_name='',
         location='',
         error='',

     }) =>
    <CardCol6>
        <form onSubmit={(e) => onSubmit(e)}>
            <label htmlFor='username'>Username</label>
            <input
                type='text'
                name='username'
                value={username}
                className="form-control"
                onChange={(e) => onChange(e)}
                placeholder='max. 20 characters'
                maxLength="20"
            />
            <label htmlFor='password'>password</label>
            <input
                type='password'
                name='password'
                value={password}
                className="form-control"
                onChange={(e) => onChange(e)}
                placeholder='max. 20 characters'
                maxLength="20"
            />
            <label htmlFor='passwordRepeat'>repeat password</label>
            <input
                type='password'
                name='passwordRepeat'
                value={passwordRepeat}
                className="form-control"
                onChange={(e) => onChange(e)}
                placeholder='max. 20 characters'
                maxLength="20"
            />
            <label htmlFor='first_name'>first name</label>
            <input
                type='text'
                name='first_name'
                value={first_name}
                className="form-control"
                onChange={(e) => onChange(e)}
                placeholder='max. 20 characters'
                maxLength="20"
            />
            <label htmlFor='last_name'>last name</label>
            <input
                type='text'
                name='last_name'
                value={last_name}
                className="form-control"
                onChange={(e) => onChange(e)}
                placeholder='max. 20 characters'
                maxLength="20"
            />
            <label htmlFor='location'>location</label>
            <input
                type='text'
                name='location'
                value={location}
                className="form-control"
                onChange={(e) => onChange(e)}
                placeholder='max. 20 characters'
                maxLength="20"
            />
        </form>
    </CardCol6>


VerifyTokenForm.prototype = {
    title: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    username: PropTypes.string,
    password: PropTypes.string,
    passwordRepeat: PropTypes.string,
    last_name: PropTypes.string,
    first_name: PropTypes.string,
    location: PropTypes.string,
    error: PropTypes.string,
}

export default VerifyTokenForm