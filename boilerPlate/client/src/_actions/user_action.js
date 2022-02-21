import axios from 'axios';
import {LOGIN_USER, JOIN_USER, AUTH_USER} from './type';


export function loginUser(dataToSubmit){

    const request = axios.post('/api/users/login', dataToSubmit)
    .then(response => response.data )

    return {
        type: LOGIN_USER,
        payload : request
    }
}

export function JoinUser(dataToSubmit){

    const request = axios.post('/api/users/join', dataToSubmit)
    .then(response => response.data )

    return {
        type: JOIN_USER,
        payload : request
    }
}

export function auth(){

    const request = axios.get('/api/users/auth')
    .then(response => response.data )

    return {
        type: AUTH_USER,
        payload : request
    }
}
