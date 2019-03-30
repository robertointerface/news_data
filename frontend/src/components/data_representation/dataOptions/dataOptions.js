import React from 'react';
import {
    SaveDataContainer,
    VisitContainer,
    GraphContainer,
    ExcelDownloadContainer
} from 'containers/searchDataContainers'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'

const DataOptions = ({resultId='', resultSaved=false}) => {
    return (
        <div>
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle float-right MR05" type="button" id="optionsDropdown"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <FontAwesomeIcon className='F12' icon={faTools}/>
                </button>
                <div className="dropdown-menu padding0" aria-labelledby="optionsDropdown">
                    <div className='list-group'>
                        <SaveDataContainer resultId={resultId} resultSaved={resultSaved}/>
                        <VisitContainer/>
                        <GraphContainer resultId={resultId}/>
                        <ExcelDownloadContainer resultId={resultId}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

DataOptions.propTypes = {
    resultId: PropTypes.string,
    resultSaved: PropTypes.bool
}

export default DataOptions