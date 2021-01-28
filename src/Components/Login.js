import React from 'react'
import './Login.css'
import { auth, provider } from './Firebase'

function Login() {
    const signIn = (e) => {
        e.preventDefault()
        auth.signInWithPopup(provider)
        .then( result => {
            console.log(result)
        })
        .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <div className='login__logo'>
                <h1>logo</h1>
            </div>
            <div className='login-form'>
                <form className='form'>
                    <label htmlFor='email'>email</label>
                    <input type='text' placeholder='enter email'></input>
                    <button type='submit' onClick={signIn}>Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Login
