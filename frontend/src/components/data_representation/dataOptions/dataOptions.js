import React from 'react';
import {
    SaveDataContainer,
    VisitContainer,
    GraphContainer
} from 'containers/searchDataContainers'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'

const DataOptions = ({resulId='', resultSaved=false}) => {
    return (
        <div>
            <div className="dropdown row">
                <button className="btn btn-primary dropdown-toggle" type="button" id="optionsDropdown"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon className='F12' icon={faTools}/>
                </button>
                <div className="dropdown-menu padding0" aria-labelledby="optionsDropdown">
                    <div className='list-group'>
                        <SaveDataContainer resultId={resulId} resultSaved={resultSaved}/>
                        <VisitContainer/>
                        <GraphContainer/>
                    </div>
                </div>
            </div>
            {(resultSaved) ?
                <p>Data saved</p> : null
            }
        </div>
    )
}

export default DataOptions