import React from 'react'
import './home-page.scss'
import Postlist from '../../components/main/postslist.component'
import SideBar from '../../components/side-bar/sidebar.component'
import Header from '../../components/header/header.component'
import FooterComponent from '../../components/footer/footer.component'

function HomePage() {
    return (
        <>
        <Header/>
        <div className='content-wrapper'>
            <SideBar />
            <div>
            <h3 className='list__title'>Recent Posts</h3>
            <Postlist />
            </div>
        </div>
        <FooterComponent/>
        </>
    )
}

export default HomePage
