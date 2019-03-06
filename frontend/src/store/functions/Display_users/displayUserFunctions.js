import {urls} from "root/constants/constants";
import {getCookie} from "root/store/functions/auth/Cookies";

const getUserNews = function(username=''){
    /*
        Calls API 'http://localhost:8080/display/usernews?username=' to get news published by the specific user.
        @param:
            username - Username whose news should be queried.

        @return
            On success - Queried user news in JSON format.
            On failure - return error.

     */
    var csrftoken = getCookie('csrftoken'); //get saved cookie
    if(username){
        return fetch(`${urls.USER_NEWS}?username=${username}`,{
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
}

const getUserInfo = function(username=''){
    /*
        Calls API 'http://localhost:8080/accounts/userpublicinfo?username=' to get user public information.
        @param:
            username - Username whose information should be queried.

        @return
            On success - User info in JSON format.
            On failure - return error.
     */
    var csrftoken = getCookie('csrftoken'); //get saved cookie
    var url = `${urls.USER_INFO}?username=${username}`
    return fetch(url,{
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

export {getUserNews, getUserInfo}