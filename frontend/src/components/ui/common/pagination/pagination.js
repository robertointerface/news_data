import React from 'react';
import PropTypes from 'prop-types'
import {PaginationButton} from 'ui/common/buttons/buttons'
import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Pagination = ({presentPage=1, begin=[], end=[], lastPage=0, goToPage=f=>f})=> {
    return(
        <div className='row'>
            <div className='col-12 col-sm-12 col-md-auto MB1'>
                <PaginationButton page={1} message={'Begin'} onClick={goToPage}/>


                {(presentPage > 1) ?
                    <a href='#' onClick={(e) => goToPage(e, presentPage - 1)} >
                        <FontAwesomeIcon className='ButtonFont MR1' icon={faBackward}/>
                    </a> : null
                }

                    {begin.map(x =>
                        <PaginationButton page={x} onClick={goToPage} active={(x == presentPage) ? true: false}/>
                    )}
            </div>

            {/* // if the present page is 2 pages or less from the last 3 pages, then is not required to print '...'.
            //i.e if all pages are 1,2,3 ... 8, 9, 10  if the present page is 6 it looks confusing to display
            //5, 6, 7 ... 8, 9, 10 is better to display 5, 6, 7, 8, 9, 10
            //*/}
            <div className='col-2 col-sm-1 col-md-auto'>
                {(end.length > 0 ) ?
                    ((presentPage + 2) >= end[0]) ?
                        null :
                        <span className='etc MR1 ButtonFont'>...</span>
                    :null
                }
            </div>

            <div className='col-10 col-sm-11 col-md-auto'>
                {end.map(x =>
                    <PaginationButton page={x} onClick={goToPage} active={(x == presentPage) ? true: false}/>
                    )
                }

                {(presentPage < lastPage)?
                    <a href='#' onClick={(e) => goToPage(e, presentPage + 1)}>
                        <FontAwesomeIcon className='ButtonFont' icon={faForward}/>
                    </a>
                    : null
                }
            </div>
        </div>
    )
}

Pagination.propTypes = {
    presentPage: PropTypes.number,
    begin: PropTypes.array,
    end: PropTypes.array,
    lastPage: PropTypes.number,
    goToPage: PropTypes.func
}

export default Pagination