import React from 'react';
import { Component } from 'react'
import PropTypes from 'prop-types'
import CardCol12 from '../ui/common/cards/CardCol12'
import {
    DatabaseContainer,
    SectorContainer,
    TopicContainer,
    IndicatorContainer,
    TimeContainer,
    GeoContainer,
    ProgressContainer,
    RequestButtonContainer
} from '../../containers/containers'
import OptionsCardTitle from '../ui/search_data/optionsCardTitle'


class SearchBlock extends Component {
    render() {
        let { ThirdPartyAPI, Sector, Topic, requestActive } = this.props
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
                        <CardCol12 Component={OptionsCardTitle}>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className="col-6">
                                       <TimeContainer/>
                                    </div>
                                    <div className='col-6'>
                                        <GeoContainer/>
                                    </div>
                                </div>
                            </div>
                        </CardCol12>
                        <RequestButtonContainer/>
                    </div>
                    : null
                }
                <ProgressContainer/>
            </div>
        )
    }
}

export default SearchBlock