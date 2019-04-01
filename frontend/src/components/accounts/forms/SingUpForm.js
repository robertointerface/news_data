import React from 'react';
import PropTypes from 'prop-types';
import FlexCard from 'ui/common/cards/FlexCard'
import LoginForm from "./LogInForm";
import {PrimaryButtonDis} from 'ui/common/buttons/buttons'
const SingUpForm = ({ title='Sign up', fetching = false,
                        onChange=f=>f, onSubmit=f=>f, username='', email='' , error=''}) => {
    return (
        <FlexCard title='sign up form' class_name='col-md-6 col-sm-12'>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor='username'>Username</label>
                        <input
                            type='text'
                            name='username'
                            value={username}
                            className="form-control"
                            onChange={(e) => onChange(e)}
                        />
                </div>
                <div className="form-group">
                    <label htmlFor='email'>email</label>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        className="form-control"
                        onChange={(e) => onChange(e)}
                    />
                </div>
                {(fetching)?
                        <PrimaryButtonDis message={'Signing...'}/>
                        :
                        <button type='submit' className='btn btn-primary'>
                            sign up
                        </button>
                }
                 <p>{error}</p>
            </form>
        </FlexCard>
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