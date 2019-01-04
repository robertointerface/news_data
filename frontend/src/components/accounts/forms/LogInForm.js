import React from 'react';
import PropTypes from 'prop-types';

import CardCol6 from '../../ui/common/cards/CardCol6'


const LoginForm = ({title='Log in', onChange=f=>f, onSubmit=f=>f, username='', password=''}) => {
     return (
            <CardCol6 title='Login form'>
                <form onSubmit={(e) => onSubmit(e)}>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        value={username}
                        className="form-control"
                        onChange={(e) => onChange(e)}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        className="form-control"
                        onChange={(e) => onChange(e)}
                    />
                    <button type='submit' className='btn btn-primary'>
                        Log in
                    </button>
                </form>
             </CardCol6>
        )
}

LoginForm.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    username: PropTypes.string,
    password: PropTypes.string
}

export default LoginForm
