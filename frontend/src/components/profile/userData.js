import React from 'react'
import UserDisplayBase from 'components/user_display/baseClass'
import PageTemplate from 'components/main/PageTemplate'
import {getUserData} from 'functions/User_profile/userDataFunctions'
import DisplayTables from 'components/new_display/DisplayRefernces/DisplayTables'
import Pagination from 'ui/common/pagination/pagination'

class ProfileUserData extends UserDisplayBase {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            Display: {
                data: [],
                DataPerPage: 2.00,
                presentPage: 1,
                beginPag: [],
                endPag: [],
                pages: 0
            },
        }
        this.goToPage = this.goToPage.bind(this)
    }

    componentDidMount() {
        getUserData().then(response => {
            return this.setState({
                ...this.state,
                Display: {
                    ...this.state.Display,
                    //it is necessary to extract 'data' from each table in order to be displayed by 'DisplayTables'
                    //component, otherwise is not possible and this is more efficient than creating a different
                    //version of 'DisplayTables'.
                    data: response['tables'].map(table => {
                        return table.data
                    }),
                    pages: Math.ceil(parseFloat(response['tableCount']).toFixed(2) / this.state.Display.DataPerPage),
                }
            })
        }).then(result => {
            //Set pagination left and right block (if required)
            return this.setState({
                ...this.state,
                Display: {
                    ...this.state.Display,
                    beginPag: this.setBeginPages(this.state.Display.pages),
                    endPag: this.setEndPages(this.state.Display.pages),
                }
            })
        })
            .catch(error => {
                this.setState({
                    message: error
                })
            })
    }

    goToPage(e, page){
        e.preventDefault();

        getUserData(page).then(response => {
            return this.setState({
                Display: {
                    ...this.state.Display,
                    data: response['tables'].map(table => {
                        return table.data
                    }),
                    presentPage: page,
                    beginPag: this.setBeginPagination(page, this.state.Display.pages),
                    endPag: this.setEndPages(this.state.Display.pages)
                }
            })
        })
    }

    render(){
        var {data, beginPag, endPag, presentPage, pages} = this.state.Display
        return (
            <PageTemplate>
                {(data.length > 0) ?
                    <div className='col-12'>
                        <DisplayTables tables={data}/>
                    </div> :  null
                }
                <div className='col-12'>
                     <Pagination presentPage={presentPage}
                                 lastPage={pages}
                                 begin={beginPag}
                                 end={endPag}
                                 goToPage={this.goToPage}/>
                 </div>
            </PageTemplate>
        )
    }

}

export default ProfileUserData
