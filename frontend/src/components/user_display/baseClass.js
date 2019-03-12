import React from 'react'
import {Component} from 'react'

class UserDisplayBase extends Component {
    /*
        Base class to be inherited by other classes that need pagination.
        Pagination is in the form  1 2 3 ... 7 8 9  ,composed of left side (1 2 3 in this example)
        and right side (7 8 9 in this example), by clicking on the numbers (usually buttons) the user can
        navigate through a requested list of items.

        Main methods:
            setBeginPages - set left side pagination block when pagination is initialize.
            setEndPages - set right side pagination block.
            setBeginPagination - set left side pagination block as user moves through pages.
     */
    constructor(props){
        //Initialize inheriting from react Component
        super(props)
    }

    setBeginPages(pages){
        /*
            Create left side pagination block when pagination is initialized.

            @params
                pages(integer) - number of pages that user can iterate through.

            @return
                pagesArray(array) - Array of integers, each integer is a page number
         */

        //if there is more than 7 pages, then it always initialize to 1, 2 & 3
        if(pages >= 7 ){
            return [1, 2, 3]
        } else{
            //if there is less than 7 pages there is no begin and end, all together in one block.
            var pagesArray = []
            for(var i=1; i <= pages; i++){
                pagesArray.push(i);
            }
            return pagesArray;
        }
    }

    setEndPages(pages){
         /*
            Create right side pagination block. right side pagination does not change as is
            always showing the last pages.

            @params
                pages(integer) - number of last 3 pages the user can iterate through.

            @return
                pagesArray(array) - Array of integers, each integer is a page number.
         */

        var pagesArray = []
        //if there are more than 7 pages it is required to create two pagination blocks
        if(pages >= 7 ) {
            for(var i=(pages-2); i <= pages; i++){
                pagesArray.push(i);
            }
        }
        //if less than 7 pages is not required to separate pagination in 2 blocks
        return pagesArray;
    }

    setBeginPagination(currentPage, lastPage){
        /*
            Set pagination left side as user moves pages.

            @params
                currentPage - User selected page
                lastpage - last page available

            @Return
                array of integers
         */

        //if more than 7 pages it is required to set the two block pagination
        if(lastPage >= 7){
            switch (true){
                case (currentPage == 1):
                    return this.setBeginPages(lastPage)
                case (currentPage + 3 >= lastPage):
                    return [lastPage - 5, lastPage - 4 ,lastPage - 3]
                case (currentPage + 3 <= lastPage):
                    return [currentPage - 1, currentPage, currentPage + 1]
                default:
                    return [currentPage, currentPage + 1, currentPage + 2]
            }
            //less than 7 pages requires only one block pagination
        }else{
            return this.setBeginPages(lastPage)
        }

    }

    render(){
        /*
            Abstract method
         */
    }
}

export default UserDisplayBase