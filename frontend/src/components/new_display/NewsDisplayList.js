import React from 'react';
import CardCol12 from 'ui/common/cards/CardCol12'
import NewTitle from 'ui/new_display/title'
import Headline from 'ui/new_display/headline'
import Truncate from 'react-truncate'
const NewsDisplayList = ({News=[]}) => {
    var news = News
    return (
        <div>
            {(News.length > 0) ?
                <div>
                    { News.map((x, i) =>
                        <CardCol12 Component={<NewTitle title={x.new_title} id={x.id}/>} headerClass='bg-primary'>
                             <div className='resultCardBody card-body'>
                                 <ul>
                                     <Headline text={x.headline1}/>
                                     <Headline text={x.headline2}/>
                                     <Headline text={x.headline3}/>
                                 </ul>
                                 <p>{x.content}</p>
                             </div>
                        </CardCol12>
                    )}
                </div> : null
            }
        </div>
    )
}


export default NewsDisplayList