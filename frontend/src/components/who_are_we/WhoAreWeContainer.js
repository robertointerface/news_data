import React from 'react'
import CardCol12 from 'ui/common/cards/CardCol12'
import CardTitle from 'ui/who_are_we/CardTitle'
import PageTemplate from 'components/main/PageTemplate'
import 'components/stylesheets/whoAreWe.css'
import ServicesCarousel from 'components/who_are_we/carousel'

const WhoAreWe = () => {
    return (
        <PageTemplate>

            <CardCol12 Component={<CardTitle title={'What can you get for free?'}/>}
                       cardClass={'MT05 panel'}
                       headerClass={'bg-primary ColorW'}>
                <div className='card-body'>
                    <ul>
                        <li><span className="ExplainItem">You can access a lot of data for free, just click <a>here</a> to try</span>
                        </li>
                        <li><span className="ExplainItem">We have combined multiple government databases with a lot of topics,
                            Currently around 2,000, going from basic demographics to complex economics or greenhouse emissions</span>
                        </li>
                    </ul>
                </div>
            </CardCol12>


            <CardCol12 Component={<CardTitle title={'Looking for something more specific?'}/>}
                       cardClass={'MT05 panel'}
                       headerClass={'bg-primary ColorW'}>
                <div className='card-body'>
                    <ul>
                        <li>
                            <span className="ExplainItem">Would you like data that is very specific, either because of the topic or because the geographical location?
                                     Data most likely is out there but you will have the following problems:</span>
                            <ul className="SubExplainItem">
                                <li><span className="ExplainItem">Finding the data.</span></li>
                                <li><span className="ExplainItem">Certifying data is reliable.</span></li>
                                <li><span
                                    className="ExplainItem">Not being able to download it or visualization problems.</span>
                                </li>
                            </ul>
                        </li>

                        <li>
                                <span className="ExplainItem">We are experienced on dealing with databases, especially government ones,
                                     census, IMF, United Nations... They have no secret to us.</span>
                        </li>
                        <li>
                            <span className="ExplainItem">We can set up a tailored infrastructure for you.</span>
                        </li>
                    </ul>
                </div>
            </CardCol12>


        </PageTemplate>
    )
}

export default WhoAreWe