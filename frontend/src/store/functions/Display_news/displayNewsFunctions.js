import {urls} from "root/constants/constants";
import {getCookie} from "root/store/functions/auth/Cookies";


const getNewsToDisplay = () =>{
    /*
        @Func: fetch data from 'New' table by calling API View 'GetNews' at 'display' app in django
        @Return: parse of data returned from backend end.
     */
    var csrftoken = getCookie('csrftoken'); //get saved cookie
    return fetch(`${urls.MAIN}`,{
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


const getDetailNew = (id = 0) => {
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

export {getNewsToDisplay, getDetailNew}