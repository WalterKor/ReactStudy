import Axios from 'axios';
import {React, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {auth} from '../_actions/user_action';

export default function(SpecipicComponent, option, adminRoute = null){

    //null => 아무나 출입이 가능한 페이지
    //true => 로그인한 유저만 출입이 가능한 페이지
    //false => 로그인한 유저는 출입이 불가능한 페이지
    function AuthenticationCheck(props){

        const dispatch = useDispatch();
        useEffect(() => {
            dispatch(auth()).then(res=>{
                console.log(res);
            })
        
        }, [])
        return(
            <SpecipicComponent/>
        )
    }
    return AuthenticationCheck
}