import React from 'react';
import { Component } from 'react'
import PropTypes from 'prop-types'
import CardCol12 from 'ui/common/cards/CardCol12'
import {
    DatabaseContainer,
    SectorContainer,
    TopicContainer,
    IndicatorContainer,
    TimeContainer,
    GeoContainer,
    ProgressContainer,
    RequestButtonContainer
} from 'containers/searchDataContainers'
import ErrorSearchData from 'components/search_data/Error'
import 'components/stylesheets/search.css';

import OptionsCardTitle from 'ui/search_data/optionsCardTitle'

const SearchBlock = props => {
     let { ThirdPartyAPI, Sector, Topic, errorMessage } = props
        return (
            <div>
                    <DatabaseContainer/>
                {(ThirdPartyAPI) ?
                    <SectorContainer/> : null
                }
                {(Sector) ?
                    <TopicContainer/> : null
                }
                {(Topic) ?
                    <div>
                        <IndicatorContainer/>
                        <CardCol12 Component={<OptionsCardTitle title={'Time and location'}/>}
                                   headerClass={'bg-secondary ColorW SearchTitle'}>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className="col-6 colTime">
                                       <TimeContainer/>
                                    </div>
                                    <div className='col-6 colTime'>
                                        <GeoContainer/>
                                    </div>
                                </div>
                            </div>
                        </CardCol12>
                        <RequestButtonContainer/>
                    </div>
                    : null
                }
                {(errorMessage) ?
                    <ErrorSearchData errorMessage={errorMessage}/> : null
                }
                <ProgressContainer/>
            </div>
        )
}

export default SearchBlock