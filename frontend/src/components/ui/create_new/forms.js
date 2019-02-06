import React from 'react';


export const NewTitleForm = ({name='', value='', onChange=f=>f}) => {
    return(
        <div className='form-group row'>
            <label className='col-12'>
                Title
            </label>
            <div className='col-12'>
               <input className='form-control'
                       type='text'
                       name={name}
                       value={value}
                       placeholder='Headline (max. 100 carach)'
                       onChange={(e) => onChange(e)}
                />
            </div>
        </div>
    )
}

export const NewHeadlineForm = ({name='', value='', onChange=f=>f}) => {
    return(
        <div className="form-group row">
            <div className='col-12'>
                <input className='form-control'
                       type='text'
                       name={name}
                       value={value}
                       placeholder='Headline (max. 100 carach)'
                       onChange={(e) => onChange(e)}
                />
            </div>
        </div>
    )
}


export const NewContentForm = ({onChange=f=>f, value='', name=''}) => {
    return(
        <div className="form-group row">
            <div className='col-12'>
                <textarea className='form-control'
                          name={name}
                          value={value}
                          onChange={(e) => onChange(e)}
                          placeholder='(max. 600 carach)'
                          rows='20'
                          cols='50'>
                </textarea>
            </div>
        </div>
    )
}

