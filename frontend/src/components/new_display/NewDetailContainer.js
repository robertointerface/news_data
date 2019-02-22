import React from 'react'
import {Component} from 'react'
import {getDetailNew} from "root/store/functions/Display_news/displayNewsFunctions";
import NewCard from 'components/new_display/NewCard'
import PageTemplate from 'components/main/PageTemplate'
import DisplayTables from 'components/new_display/DisplayTables'
class NewDetailContainer extends Component{
    constructor(props){
        super(props)
        this.newId = this.props.match.params.id
        this.state = {
            new_title: '',
            headline1: '',
            headline2: '',
            headline3: '',
            content: '',
            tables: [],
            charts: []
        }
    }

    componentDidMount() {
         getDetailNew(this.newId).then(newData => {
             this.setState({
                 new_title: newData.new_title,
                 headline1: newData.headline1,
                 headline2: newData.headline2,
                 headline3: newData.headline3,
                 content: newData.content,
                 tables: newData.tables,
                 charts: newData.charts,
                 created_by: newData.created_by,
                 time_stamp: newData.time_stamp
             })
         })
    }

    render(){
        var {new_title, headline1, headline2, headline3, content, tables} = this.state
        return (
            <PageTemplate>
                {(new_title)?
                    <div className='row'>
                        <div className='col-12'>
                            <NewCard title={new_title}
                                     headline1={headline1}
                                     headline2={headline2}
                                     headline3={headline3}
                                     content={content}
                            />
                        </div>
                        {(tables.length > 0) ?
                            <div className='col-12'>
                                <DisplayTables tables={tables}/>
                            </div>
                            : null
                        }

                    </div> : null
                }
            </PageTemplate>
        )
    }
}

export default NewDetailContainer