import React from 'react'
import './Login.css'
import { auth, provider } from './Firebase'
import {actionTypes} from "./reducer"
import {useStateValue} from "./StateProvider"

function Login() {
    const [state,dispatch] = useStateValue()

    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithPopup(provider)
        .then( result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
            console.log(result)
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <img src='./logo.webp' className='login__logo' alt='logo'></img>
            <img src='./linkedin.jpg' alt='linked in text'></img>
            <button className='signIn__btn' type='submit' onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Login
