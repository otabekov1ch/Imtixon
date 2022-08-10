import React from 'react'
import { Link } from 'react-router-dom'
import CategoryRender from '../../components/categoryRender/categoryRender.component'
import './category.scss'
import Header from '../../components/header/header.component';
import Postlist from '../../components/main/postslist.component'
import PostCard from '../../components/main/postcard/postcard.component';
import NotFoundPage from '../notfound/notfound';

function CategoryPage() {
    return (
        <>
            <Header />
            <Link id='link' to={'/'}>Go Home</Link>
            {<PostCard/> ? <div className='category-container'>
                <Postlist />
            </div> : <NotFoundPage/>}
        </>
    )
}

export default CategoryPage
