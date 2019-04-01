import React from 'react'
import PropTypes from 'prop-types'
import {PrimaryButtonDis} from 'ui/common/buttons/buttons'
export const RequestButton = ({active=true, fetching=false, onClick=f=>f}) => {
    return (
        <div>
            {(fetching)?
                <PrimaryButtonDis message={'Requesting...'} extraClass={'MT05'}/>
            :
                <button
                    type="button"
                    className="btn btn-primary MT05"
                    disabled={active}
                    onClick={onClick}>
                    Request data
                </button>
            }
        </div>
    )
}

RequestButton.propTypes = {
    active: PropTypes.bool
}
