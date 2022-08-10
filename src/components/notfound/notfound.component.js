import React from 'react'
import './notfoundcomp.scss'
import eror from '../../assets/img/404.png'
import { Link } from 'react-router-dom'

function NotFaundComp() {
    return (
        <div className='wrapper'>
            <img src={eror} alt="dvdfdfd" />
            <h4>Page not found - 404</h4>
            <p>This page not found (deleted or never exists). 
                Try a phrase in search box or back to home and start again.</p>
            <Link to='/auth'>TAKE ME HOME!</Link>
        </div>
    )
}

export default NotFaundComp
