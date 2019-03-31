import {urls} from "root/constants/constants";
import {getCookie} from "root/store/functions/auth/Cookies";


const getUserSubscriptions = function (page=1){
    /**
        API call to backend to get news created by users that logged in user is following (subscription format).

        @params
            page(integers) - news are queried in a paginated way.

        @return
            On success - json object - composed of 'newsCount': number of total news, this is
            used for pagination purposes. 'news': array of json objects, each object is a new to be displayed.
            On failure - throw error so it propagates up.
     */
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
                throw 'error loading subscribed news, please refresh site or try later'
            }
        })
        .then(response =>{
            return {
                'newsCount': response['newsCount'],
                'news': JSON.parse(response['news'])
            }
        })
        .catch(error => {
            throw error
        })

}

export {getUserSubscriptions}