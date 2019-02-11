import React from 'react';


export const NewTitleForm = ({name='', value='', onChange=f=>f}) => {
    var characLeft = (100 - value.length).toString()
    return(
        <div className='form-group row'>
            <label className='col-12'>
                <span className='carachLeft'>Title {characLeft}</span>
            </label>
            <div className='col-12'>
               <input className='form-control'
                       maxLength={100}
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
    var characLeft = (100 - value.length).toString()
    return(
        <div className="form-group row">
            <div className='col-12'>
                <span className='carachLeft'>{characLeft}</span>
            </div>
            <div className='col-12'>
                <input className='form-control'
                       maxLength={100}
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
    var characLeft = (600 - value.length).toString()
    return(
        <div className="form-group row">
             <div className='col-12'>
                <span className='carachLeft'>{characLeft}</span>
            </div>
            <div className='col-12'>
                <textarea className='form-control'
                          maxLength={600}
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

