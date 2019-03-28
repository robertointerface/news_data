import {urls} from "root/constants/constants";
import {getCookie} from "root/store/functions/auth/Cookies";
var csrftoken = getCookie('csrftoken');

const getUserPrivateInfo = () => {
    var csrftoken = getCookie('csrftoken');
    return fetch(`${urls.USER_PRIVATE_INFO}`, {
                method: 'GET',
                mode: 'same-origin',
                headers: {
                    Authorization: `JWT ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
            })
            .then(response => {
                if (response.status == 200){
                    return response.json();
                }
            })
            .then(response => {
                 return JSON.parse(response)
            })
            .catch(error => {

            })

}


export {getUserPrivateInfo}