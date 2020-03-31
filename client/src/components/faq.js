import React, { Component } from 'react'
import guide from './pdf/Guidelines.pdf'
import masks from './pdf/masks.pdf'
import Distancing from './pdf/SocialDistancing.pdf'
import Comic from './pdf/kidscomicCovid19.pdf'

 class FAQ extends Component {
    render() {
        return (
            <div classname ='py-5'>
            <h1 >FAQ</h1>
            <ul className='py-5'>
            <li className="py-1">
            <a href={masks} download>Use of masks</a>
            </li>
            <li className="py-1">
            <a href={guide} download>
            Guidelines for Corona
            </a>
            </li>
            <li  className="py-1">
            <a href={Distancing} download>
            Social Distancing</a>
            </li>
            <li  className="py-1">
            <a href={Comic} download>
            Understanding COVID-19(for kids)</a>
            </li>
            <li>
            <a href="https://www.youtube.com/playlist?list=PL1a9DHjZmejE-Ep2PAu2OR8HBfLP0BLIk" >
Management Videos </a>                
</li>


            </ul>
            <h4 className='px-3'>Do's and Don'ts</h4>
            <ul>
            <li>
            <a href={Comic} download>English</a>
            </li>
            <li>
            <a href={Comic} download>Hindi</a>
            </li>
            </ul>

            </div>
        )
    }
}
export default FAQ
