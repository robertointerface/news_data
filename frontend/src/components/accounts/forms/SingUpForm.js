import React from 'react';
import PropTypes from 'prop-types';
import CardCol6 from 'ui/common/cards/CardCol6'
import LoginForm from "./LogInForm";

const SingUpForm = ({ title='Sign up', onChange=f=>f, onSubmit=f=>f, username='', email='' , error=''}) => {
    return (
        <CardCol6 title='sign up form'>
            <form onSubmit={(e) => onSubmit(e)}>
                <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        value={username}
                        className="form-control"
                        onChange={(e) => onChange(e)}
                    />
                    <label htmlFor='email'>email</label>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        className="form-control"
                        onChange={(e) => onChange(e)}
                    />
                    <button type='submit' className='btn btn-primary'>
                        sign up
                    </button>
                 <p>{error}</p>
            </form>
        </CardCol6>
    )
}

SingUpForm.propTypes = {
    title: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    username: PropTypes.string,
    password: PropTypes.string
}

export default SingUpForm