import React from 'react'
import './sidebar.scss'
import facebook from '../../assets/img/feecebook.png'
import github from '../../assets/img/github.png'
import twitter from '../../assets/img/twitter.png'
import linkidin from '../../assets/img/linkdin.png'
import { Link } from 'react-router-dom'

function SideBar() {
    return (
        <div className='sidebar'>
            
            <h3 className='sidebar__heading'>What I do!</h3>
            <p className='sidebar__title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.</p>
            <Link to={'/newPost'} className='explore' href="!#">Add new post</Link>
            <div className="social_icons">
                <img src={facebook} alt='sfsa' />
                <img src={github} alt="dfsdf" />
                <img src={twitter} alt="dfsdf" />
                <img src={linkidin} alt="dfsdf" />
            </div>
        </div>
    )
}

export default SideBar
