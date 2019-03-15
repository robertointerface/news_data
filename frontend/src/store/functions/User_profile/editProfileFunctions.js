import {getCookie} from "root/store/functions/auth/Cookies";
import {urls} from "root/constants/constants";
import {onlyLettersNumbers} from "root/store/functions/auth/validation";
import {validate} from 'functions/auth/validation'

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


const EditUserProfile = () => {

    return (dispatch, getState) => {
        var username = getState().User_management.username;
        var location = getState().User_management.location;
        var first_name = getState().User_management.first_name;
        var last_name = getState().User_management.last_name;
        var about_me = getState().User_management.about_me;
        try{
            validate(username, [onlyLettersNumbers]);
            validate(first_name, [onlyLettersNumbers]);
        } catch(error){
            throw error;
        }
        var dataToUpdate = {
            username: username,
            location: location,
            first_name: first_name,
            last_name: last_name,
            about_me: about_me
        }
        var csrftoken = getCookie('csrftoken');
        return fetch(`${urls.EDIT_USER}`,{
            method: 'POST',
            mode: 'same-origin',
            headers: {
                'Authorization': `JWT ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify(dataToUpdate)
        })
            .then(res =>{
                if(res.status == 200){
                    return res.json()
                }
                else{
                    throw res['content']
                }
            })
            .catch(error =>{

            })
    }
}

export {getUserPrivateData, EditUserProfile}