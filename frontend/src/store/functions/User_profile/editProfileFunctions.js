import {getCookie} from "root/store/functions/auth/Cookies";
import {urls, flashFlags} from "root/constants/constants";
import {onlyLettersNumbers} from "root/store/functions/auth/validation";
import {validate, passwordSame} from 'functions/auth/validation'
import {set_flash_message, update_user_data} from 'actions/actions'
import {history} from "root/App";

const getUserPrivateData = function(){
    /**
     * Call API '/accounts/edituser' to fetch user private data so user can edit if requested
     *Authentication required.
     *
     * @return
     * On success - user data (first_name, last_name, location, about_me)
     * on failure - throw error to be displayed to user.
     */
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

    /**
     * Call API '/accounts/edituser' with POST method to modify user fields in backend.
     *
     */
    return (dispatch, getState) => {
        var location = getState().User_management.location;
        var first_name = getState().User_management.first_name;
        var last_name = getState().User_management.last_name;
        var about_me = getState().User_management.about_me;
        try{
            validate(first_name, [onlyLettersNumbers]);
            validate(last_name, [onlyLettersNumbers]);
        } catch(error){
            throw error;
        }
        var dataToUpdate = {
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
                    throw 'Error, please check if provided update is correct format'
                }
            })
            .then(res =>{
                return Promise.all([
                    dispatch(update_user_data(res)),
                    dispatch(set_flash_message('updated correctly', flashFlags.INFO)),
                    history.push('/about')
                ]);

            })
            .catch(error =>{
                dispatch(set_flash_message(error, flashFlags.INFO))
            })
    }
}

const changePassword = (newPassword='', confPassword='') => {
    /**
     * Call API 'accounts/changepassword' to modify user password after password
     * validation is performed.
     *
     * @params
     * newPassword - new password to be set
     * confPassword - new password confirm and must be the same as 'newPassword'
     *
     * @return
     * on Success - return success message to be displayed.
     * on Failure - return error message to be displayed.
     */
    var csrftoken = getCookie('csrftoken');
    try{
        passwordSame(newPassword, confPassword)
    }catch (error){
       throw error
    }
    var passwords = {
        password : newPassword
    }
    return fetch(`${urls.CHANGE_PASSWORD}`,{
        method: 'POST',
        mode: 'same-origin',
        headers: {
            'Authorization': `JWT ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
        },
        body: JSON.stringify(passwords)
    })
        .then(response =>{
            if(response.status == 200){
                return 'password changed correctly'
            }else{
                throw 'error changing password please try later'
            }
        })
        .catch(error =>{
            throw error
        })
}

export {getUserPrivateData, EditUserProfile, changePassword}