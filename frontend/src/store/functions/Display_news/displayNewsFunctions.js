import {urls} from "root/constants/constants";
import {getCookie} from "root/store/functions/auth/Cookies";


const getNewsToDisplay = (page=1) => {
    /**
        @Func: fetch data from 'New' table by calling API View 'GetNews' at 'display' app in django
        @params:
            page - page number to be used in pagination calculations.
        @Return: parse of data returned from backend end.
     */
    var csrftoken = getCookie('csrftoken'); //get saved cookie
    return fetch(`${urls.MAIN}?page=${page}`,{
        method: 'GET',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        },
    })
        .then(response => {
            if(response.status == 200){
                return response.json()
            }else{
                throw 'error loading news'
            }
        })
        .then(response =>{
            return JSON.parse(response)
        })
        .catch(error => {

        })
}

const getHotNewsPageCount = () => {
    /**
     * call API '/display/getnewscount/' to get the total number of hot news, the total number is
     * used for the pagination calculations.
     *
     * @return
     *  on success - number of total news.
     *  on failure - throw error to propagate
     */
    var csrftoken = getCookie('csrftoken');
    return fetch(`${urls.GET_NEWS_COUNT}`, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        },
    }).then(response => {
        return response.json()
    }).catch(error =>{

    })
}

const getDetailNew = (id = 0) => {
    /**
     * Call API '/display/getnew/' to get New information
     * @params
     *  id - new id in MySQL table
     *
     * @returns
     *  on success - New data
     *  on failure - throw error
     */
    var csrftoken = getCookie('csrftoken'); //get saved cookie
    var url = `${urls.NEW_DETAIL}?id=${id}`
    return fetch(`${url}`, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        },
    })
        .then(response =>{
            return response.json()
        })
        .then(jsonResponse => {
            return JSON.parse(jsonResponse)
        })
        .catch(error => {

        })
}

export {getNewsToDisplay, getDetailNew, getHotNewsPageCount}