import {urls} from "root/constants/constants";
import {getCookie} from "root/store/functions/auth/Cookies";

const getUserNews = function(username='', page=1){
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
        return fetch(`${urls.USER_NEWS}${username}?page=${page}`, {
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
    return fetch(`${urls.USER_INFO}?username=${username}`,{
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
                throw 'error loading user information, please refresh ot try later.'
            }
        })
        .then(response =>{
            return JSON.parse(response)
        })
        .catch(error => {
            throw error
        })
}


const setFollow = function(toFollow=''){
    var csrftoken = getCookie('csrftoken'); //get saved cookie
    if(toFollow) {
        var userToFollow = {
            'toFollow': toFollow
        }
        return fetch(`${urls.SET_FOLLOW}`, {
            method: 'POST',
            mode: 'same-origin',
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(userToFollow)
        })
            .then(response => {
                if (response.status == 200) {
                    return `You are now following ${toFollow}`
                } else {
                    throw 'server error on action just requested, please refresh or try later'
                }
            })
            .catch(error => {
                throw error;
            })
    }
}

const setUnFollow = function(unFollow=''){
    var csrftoken = getCookie('csrftoken');
    if(unFollow){
        var userToUnFollow = {
            'toUnFollow': unFollow
        }
        return fetch(`${urls.SET_UNFOLLOW}`, {
            method: 'POST',
            mode: 'same-origin',
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            body: JSON.stringify(userToUnFollow)
        })
            .then(response => {
                if (response.status == 200) {
                    return `You are not following ${unFollow} anymore`
                } else {
                    throw 'server error on action just requested, please refresh or try later'
                }
            })
            .catch(error => {
                throw error
            })
    }
}


const isFollowing = function(isFollowing=''){
    /*
        Check if logged in user is following another user by providing the user name 'isFollowing'
     */
    var csrftoken = getCookie('csrftoken')
    if(isFollowing && localStorage.getItem('token')) {
        return fetch(`${urls.IS_FOLLOWING}?username=${isFollowing}`, {
            method: 'GET',
            mode: 'same-origin',
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
        })
            .then(response => {
                if (response.status == 200) {
                    return response.json()
                } else {
                    throw 'error loading news'
                }
            })
            .then(response => {
                return response
            })
            .catch(error => {
                throw error
            })
    }
}


export {
    getUserNews,
    getUserInfo,
    setFollow,
    setUnFollow,
    isFollowing}