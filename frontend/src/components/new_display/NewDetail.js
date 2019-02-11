import React from 'react'
import {Component} from 'react'
import {getDetailNew} from "root/store/functions/Display_news/displayNewsFunctions";

class NewDetail extends Component{

    constructor(props){
        super(props)
        this.newId = this.props.match.params.id
        this.state = {
            title: '',
            headline1: '',
            headline2: '',
            headline3: '',
            content: '',
            references: []
        }
    }

    componentDidMount() {
         getDetailNew(this.newId).then(newData => {
             this.setState({title: newData.title})
         })
    }

    render(){
        <p>new detail </p>
    }


}

export default NewDetail