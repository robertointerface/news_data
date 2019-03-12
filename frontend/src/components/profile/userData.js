import React from 'react'
import UserDisplayBase from 'components/user_display/baseClass'
import PageTemplate from 'components/main/PageTemplate'
import {getUserData} from 'functions/User_profile/userDataFunctions'
import DisplayTables from 'components/new_display/DisplayRefernces/DisplayTables'

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
                pages: 0
            },
        }
    }

    componentDidMount() {
        getUserData().then(response => {
            return this.setState({
                ...this.state,
                DisplayData: {
                    ...this.state.DisplayData,
                    data: response['tables'].map(table => {
                        return table.data
                    })

                }
            })
        })
            .catch(error => {

            })
    }

    render(){
        var {data} = this.state.DisplayData
        return (
            <PageTemplate>
                {(data.length > 0) ?
                    <div className='col-12'>
                        <DisplayTables tables={data}/>
                    </div> :  null
                }
            </PageTemplate>
        )
    }

}

export default ProfileUserData
