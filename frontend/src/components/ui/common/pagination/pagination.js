import React from 'react';
import PropTypes from 'prop-types'
import {PaginationButton} from 'ui/common/buttons/buttons'
import {Etc} from 'ui/common/pagination/etc'

const Pagination = ({begin=[], end=[], goToPage=f=>f ,next=f=>f, previous=f=>f})=> {
    return(
        <div className='row'>
            <div className='offset-1 col-2'>
                {begin.map(x =>
                    <PaginationButton page={x} onClick={goToPage}/>
                    )
                }
            </div>
            <div className='col-2'>
                <Etc/>
            </div>
            <div className='offset-1 col-2'>
                {end.map(x =>
                    <PaginationButton page={x} onClick={goToPage}/>
                    )
                }
            </div>
        </div>
    )
}

export default Pagination