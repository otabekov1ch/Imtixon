import React, { useEffect, useState } from 'react'
import './header.scss'
import LogoComponent from '../logo/logo.component'
import SearchIcon from '../../assets/img/search icon.png'
import { NavLink } from 'react-router-dom'
import { searching } from './searchingSlice'
import { useDispatch } from 'react-redux'

function Header() {
    const dispatch = useDispatch()
    const [value, setValue] = useState(null)

    useEffect(() => {
        dispatch(searching({value}), )
      }, [value])
      // eslint-disable-next-line  
    function SearchItem(e){
        return setValue(e.target.value)
    }
    return (
        <>
            <nav className="header-site">
                <LogoComponent />
                <ul className='row-list'>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to='/All'>All</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/Design%20Theory">Design Theory</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/UX">UX</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/UI">UI</NavLink></li>
                    <li><NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/Typography">Typography</NavLink></li>
                </ul>
                <div className="search-menu">
                    <input className='search-input' placeholder='SearchTitle' type="search" onChange={SearchItem} id="" />
                    <span className='search-btn'><img src={SearchIcon} alt="dfdfd" /></span>
                </div>
            </nav>


        </>
    )
}

export default Header
