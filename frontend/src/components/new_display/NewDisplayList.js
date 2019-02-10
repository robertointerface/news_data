import React from 'react';
import CardCol12 from 'components/ui/common/cards'

const NewsDisplayList = (News) => {

    return (
        <div>
            {News.map((x, i) =>
                <CardCol12>

                <CardCol12/>
            )}
        </div>
    )
}


export default NewsDisplayList