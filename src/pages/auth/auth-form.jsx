import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/exports'
import LogoComponent from '../../components/logo/logo.component'
import { fetchToken } from './authSlice'
import './style.scss'
function LoginPage() {
    const dispatch = useDispatch()
    const status = useSelector(state => state.auth.status)
    const loginRef = useRef(null);
    const passwordRef = useRef(null)

    useSelector(state => {
        state.auth.token.token && localStorage.setItem("token", state.auth.token.token)
    })

    function handleFormSubmit(e) {
        e.preventDefault()
        
        dispatch(fetchToken({
            login: loginRef.current.value,
            password: passwordRef.current.value
        }))
        e.target.reset()
        alert('Uzra ilojini topomadim refresh qivorish kere :(')
    
    }

        return (
            <>
                <LogoComponent />
                <div className="login-wrapper">

                    <h1 className='login-title'>Login</h1>
                    <form action="/" method='post' onSubmit={handleFormSubmit} className='login-form'>
                        <input type="text" required placeholder='Login' ref={loginRef} className='login-input' />
                        <input  type="password" required placeholder='Password' ref={passwordRef} className='password-input' />
                        <button className='submit-btn' type="submit" >Submit</button>
                        {status === "rejected" && <strong>Something Wrong</strong>}
                    </form>
                </div>
            </>

        )
    }

    export default LoginPage
