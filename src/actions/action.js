import {GET_USERS, GET_USERS_SUCCESS, GET_USERS_ERROR} from './actionTypes';

export function getUsersRequest(){
    return {
        type:GET_USERS,     
    }
}

export function getUserSuccess(users){
    return {
        type:GET_USERS_SUCCESS,
        payload:users
    }
}

export function getUserError(error){
    return {
        type:GET_USERS_ERROR,
        payload:error
    }
}
