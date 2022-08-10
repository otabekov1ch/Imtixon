import React from 'react'
import Clap from '../../assets/img/clap.png'
import Share from '../../assets/img/share.png'

import Time from '../../assets/img/time.png'
import { useParams } from 'react-router-dom'
import './single.scss'
import Postlist from '../main/postslist.component'

function SiglePageComp(props) {
    return (
        <div className='container'>
            <div className="clap-share">
                <img src={Clap} alt="ssff" /> <p>125</p>
                <img src={Share} alt="xcssd" /> <p>70</p>
            </div>
            <div className="main-container">
                <p className="data">{props.created_at}</p>
                <p className="categor">{props.category_name}</p>    
                <p className='card__title'><strong>Title: </strong> {props.title}</p>
                <img src={props.img} alt="sdsds" />
                <p className="desc"><strong>Description: </strong>{props.body}</p>           
            </div><br />
            <div className="card-info">
                <h4 className="card-info__heading">
                    Information overload
                </h4>
                <p className="card-info__title">
                    Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.
                </p>
            </div>
            <div className="quote">
                <p className="quote__title">
                    Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit.uz nulla, viverra id suscipit quis, tristique a dolor.
                </p>
                <i className='quote__owner'>'Designing For Sustainability, Tim Frick, 2014'</i>
            </div>
            <div className="lessons-learnt">
                <h4>Lessons Learnt: Best Practice</h4>
                <ul className="practice-list">

                    <li>
                        Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl. Suspendisse.
                    </li>
                    <li>
                        Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit dignissim, dignissim.
                    </li>
                </ul>
            </div><br />
            <div className="more">
                <h4>More like this</h4>
                <Postlist/>
            </div><br />
            
        </div>
    )
}

export default SiglePageComp
