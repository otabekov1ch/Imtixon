import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './logo.scss'

function LogoComponent() {
    return (
        <div className="logo">
                <img src={Logo} alt="gbhnj" /> <h1 className='logo-title'>BoburBlog</h1>
        </div>
    )
}

export default LogoComponent
