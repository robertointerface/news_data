import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSave,
    faChartBar,
    faPaperPlane
} from '@fortawesome/free-regular-svg-icons'

const Options = ({title='', icon='', resultId='', onClick=f=>f}) =>
    <a href='#' className='list-group-item' onClick={(e) => onClick(e, resultId)}>
         <FontAwesomeIcon className='F12' icon={icon}/> {title}
    </a>


const Graph = ({title='', onClick=f=>f}) => {
    return (
        <Options title={title} icon={faChartBar} onClick={onClick}/>
    )
}


const GoToThirdParty = ({title='', onClick=f=>f}) => {
    return (
        <Options title={title} icon={faPaperPlane} onClick={onClick}/>
    )
}


const SaveData = ({title='', resultId='', resultSaved=false, onClick=f=>f}) => {
    return (
        <div>
            {(resultSaved) ?
                <a className='list-group-item'>
                   <FontAwesomeIcon className='F12' icon={faSave}/> Data saved
                </a>
                :
                 <Options title={title} icon={faSave} resultId={resultId} onClick={onClick}/>
            }
        </div>
    )
}

export {Graph, GoToThirdParty, SaveData}