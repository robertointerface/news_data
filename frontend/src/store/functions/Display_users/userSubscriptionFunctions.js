import {urls} from "root/constants/constants";
import {getCookie} from "root/store/functions/auth/Cookies";


const getUserSubscriptions = function (page=1){

    var csrftoken = getCookie('csrftoken'); //get saved cookie
    return fetch(`${urls.USER_SUBSCRIPTIONS}?page=${page}`, {
        method: 'GET',
        mode: 'same-origin',
        headers: {
            'Authorization': `JWT ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
    })
        .then(response => {
            if(response.status == 200){
                return response.json()
            }else{
                throw 'error loading user news, please refresh site or try later'
            }
        })
        .then(response =>{
            return JSON.parse(response)
        })
        .catch(error => {
            throw error
        })

}

export {getUserSubscriptions}