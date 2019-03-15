import {getCookie} from "root/store/functions/auth/Cookies";
import {urls} from "root/constants/constants";

const getUserPrivateData = function(){
    var csrftoken = getCookie('csrftoken');
    return fetch(`${urls.EDIT_USER}`, {
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
                throw 'error loading your data, please refresh site or try later'
            }
        })
        .then(response =>{
            return JSON.parse(response)
        })
        .catch(error => {
            throw error
        })
}

export {getUserPrivateData}