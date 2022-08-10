import React from 'react'
import './footer.scss'
import BoburLogo from '../../assets/img/footer-logo.png'

function FooterComponent() {
    return (
        <footer className="site-footer">
            <div className="logo-bobur">
                <img className='footer-logo' src={BoburLogo} alt="sdsad" /><h1 className='footer-logo__title'>Bobur</h1>
            </div>
            <div className='colums'>
                <div className="colum colum-1">
                    
                    <ul>
                        <h3>FIGHT WITH ME ON:</h3>
                        <li><a href="!#">Twitter</a></li>
                        <li><a href="!#">Instagram</a></li>
                        <li><a href="!#">Telegram</a></li>
                        <li><a href="!#">YouTube</a></li>
                        <li><a href="!#">Figma</a></li>
                    </ul>
                </div>
                <div className="colum colum-2">
                    
                    <ul>
                        <h3>WHAT I HAVE DONE:</h3>
                        <li><a href="!#">Xalq Kutubxonasi</a></li>
                        <li><a href="!#">Wepsitee</a></li>
                        <li><a href="!#">Website</a></li>
                        <li><a href="!#">Play Market</a></li>
                        <li><a href="!#">App Store</a></li>
                    </ul>
                </div>
                <div className="colum colum-3">
                    
                    <ul>
                        <h3>CONTACT:</h3>
                        <li><a href="!#">Blog</a></li>
                        <li><a href="!#">Dribbble</a></li>
                        <li><a href="!#">Behance</a></li>
                    </ul>
                </div>
            </div>

        </footer>

    )
}

export default FooterComponent
