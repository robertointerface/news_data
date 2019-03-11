import React from 'react'
import UserDisplayBase from 'components/user_display/baseClass'
import PageTemplate from 'components/main/PageTemplate'

class ProfileUserData extends UserDisplayBase {

    constructor(props) {
        super(props)
        this.state = {
            message: '',
            DisplayData: {
                data: [],
                DataPerPage: 2.00,
                presentPage: 1,
                beginPag: [],
                endPag: [],
                pages: 0,
            },
        }
    }

    componentDidMount() {

    }

    render(){

        return (
            <PageTemplate>
                
            </PageTemplate>
        )
    }

}
