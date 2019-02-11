import {urls} from "root/constants/constants";
import {getCookie} from "root/store/functions/auth/Cookies";


const getNewsToDisplay = () =>{
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

export {getNewsToDisplay}