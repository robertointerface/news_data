import React from 'react';
import {
    Graph,
    GoToThirdParty,
    SaveData,
    ExcelDownload
} from 'components/data_representation/dataOptions/options'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'

const DataOptionsSearch = ({resultId='', resultSaved=false, onGraph=f=>f, onExcel=f=>f}) => {
    return (
        <div>
            <div className="dropdown row">
                <button className="btn btn-primary dropdown-toggle" type="button" id="optionsDropdown"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon className='F12' icon={faTools}/>
                </button>
                <div className="dropdown-menu padding0" aria-labelledby="optionsDropdown">
                    <div className='list-group'>
                        <SaveData resultId={resultId} resultSaved={resultSaved}/>
                        <GoToThirdParty/>
                        <Graph resultId={resultId} onClick={onGraph}/>
                        <ExcelDownload resultId={resultId} onClick={onExcel}/>
                    </div>
                </div>
            </div>
            {(resultSaved) ?
                <p>Data saved</p> : null
            }
        </div>
    )
}


export default DataOptionsSearch