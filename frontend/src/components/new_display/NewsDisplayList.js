import React from 'react';
import CardCol12 from 'ui/common/cards/CardCol12'
import NewTitle from 'ui/new_display/title'
import Headline from 'ui/new_display/headline'
import Truncate from 'react-truncate'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faTable, faChartBar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const NewsDisplayList = ({News=[]}) => {
    return (
        <div>
            {(News.length > 0) ?
                <div>
                    { News.map((x, i) =>
                        <CardCol12 key={`New-${x.id}-${i}`}
                                   cardClass='MB05'
                                   Component={<NewTitle title={x.new_title}
                                                        id={x.id}
                                                        author={x.created_by}
                                                        date={x.time_stamp}/>}
                                   headerClass='bg-primary'>
                             <div className='resultCardBody card-body'>
                                 <div className='row'>
                                     <div className='col-8'>
                                         <ul>
                                             <Headline text={x.headline1}/>
                                             <Headline text={x.headline2}/>
                                             <Headline text={x.headline3}/>
                                         </ul>
                                     </div>
                                     <div className='col-4'>
                                         <div className='row'>
                                             <div className='col-12'>
                                                 <FontAwesomeIcon className='F12' icon={faTable}/>{x.tables.length}
                                             </div>
                                             <div className='col-12'>
                                                 <FontAwesomeIcon className='F12' icon={faChartBar}/>{x.charts.length}
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div className='row'>
                                     <div className='col-lg-8 col-12'>
                                         <Truncate lines={1} ellipsis={<span>...</span>}>
                                            <p className='newContent ML05'>{x.content}</p>
                                         </Truncate>
                                     </div>
                                 </div>
                             </div>
                        </CardCol12>
                    )}
                </div> : null
            }

        </div>
    )
}
export default NewsDisplayList