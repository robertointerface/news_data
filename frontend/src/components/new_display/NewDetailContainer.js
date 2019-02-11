import React from 'react'
import {Component} from 'react'
import {getDetailNew} from "root/store/functions/Display_news/displayNewsFunctions";
import NewCard from 'components/new_display/NewCard'
import PageTemplate from 'components/main/PageTemplate'
import DisplayReferences from 'components/new_display/DisplayReferences'
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
            references: []
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
                 references: newData.references
             })
         })
    }

    render(){
        var {new_title, headline1, headline2, headline3, content, references} = this.state
        return (
            <PageTemplate>
                <div className='row'>
                    <div className='col-12'>
                        <NewCard title={new_title}
                                 headline1={headline1}
                                 headline2={headline2}
                                 headline3={headline3}
                                 content={content}
                        />
                    </div>
                    {(references.length > 0) ?
                        <div className='col-12'>
                            <DisplayReferences references={references}/>
                        </div>
                        : null
                    }
                </div>
            </PageTemplate>
        )
    }

}

export default NewDetailContainer