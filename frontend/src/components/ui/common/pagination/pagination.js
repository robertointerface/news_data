import React from 'react';
import PropTypes from 'prop-types'
import {PaginationButton} from 'ui/common/buttons/buttons'
import {Etc} from 'ui/common/pagination/etc'
import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTable} from "@fortawesome/free-solid-svg-icons/index";


const Pagination = ({presentPage=1, begin=[], end=[], lastPage=0, goToPage=f=>f})=> {
    return(
        <div className='row'>
            <div className='col-1'>
                <PaginationButton page={1} message={'Begin'} onClick={goToPage}/>
            </div>

            <a href='#' onClick={(e) => goToPage(e, presentPage - 1)} >
                <FontAwesomeIcon className='F16' icon={faBackward}/>
            </a>

            <div className='col-2'>
                {begin.map(x =>
                    <PaginationButton page={x} onClick={goToPage} active={(x == presentPage) ? true: false}/>
                )}
            </div>

            {/* // if the present page is 2 pages or less from the last 3 pages, then is not required to print '...'.
            //i.e if all pages are 1,2,3 ... 8, 9, 10  if the present page is 6 it looks confusing to display
            //5, 6, 7 ... 8, 9, 10 is better to display 5, 6, 7, 8, 9, 10
            //*/}
            {((presentPage+2) >= end[0]) ?
                null:
                <p className='etc'>...</p>
            }

            <div className='col-2'>
                {end.map(x =>
                    <PaginationButton page={x} onClick={goToPage} active={(x == presentPage) ? true: false}/>
                    )
                }
            </div>

            <a href='#' onClick={(e) => goToPage(e, presentPage + 1)} >
                <FontAwesomeIcon className='F16' icon={faForward}/>
            </a>

        </div>
    )
}

export default Pagination