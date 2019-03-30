import React from 'react';
import {
    Graph,
    GoToThirdParty,
    SaveData,
    ExcelDownload
} from 'components/data_representation/dataOptions/options'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
const DataOptionsSearch = ({resultId='', resultSaved=false, onGraph=f=>f, onExcel=f=>f, onSave=f=>f}) => {
    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="optionsDropdown"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon className='F12' icon={faTools}/>
                </button>
                <div className="dropdown-menu padding0" aria-labelledby="optionsDropdown">
                    <div className='list-group'>
                        {(localStorage.getItem('user'))?
                            <SaveData resultId={resultId} resultSaved={resultSaved} onClick={onSave}/>
                            :null
                        }
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

DataOptionsSearch.propTypes = {
    resultId: PropTypes.string,
    resultSaved: PropTypes.bool,
    onGraph: PropTypes.func,
    onExcel: PropTypes.func,
    onSave: PropTypes.func
}
export default DataOptionsSearch