import React from 'react';

const FlashMessage = ({ type='MESSAGE', message='' , onClick=f=>f}) => {

    return (
        <div className='row'>
            <div className='col-8 offset-2'>
                <div className={type + ' row'}>
                    <div className='col-10'>
                        <p>{message}</p>
                    </div>
                    <div className='col-2'>
                        <button onClick={onClick} type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlashMessage