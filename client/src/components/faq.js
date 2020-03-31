import React, { Component } from 'react'


 class FAQ extends Component {
    render() {
        return (
            <ul className="py-5">
            <li className="py-5">
            <a href="/masks.pdf" download="use of masks">Use of masks</a>
            </li>
            <li className="py-1">
            <a href="layout/Guidelines.pdf" download="Guidelines">
            Guidelines for Corona
            </a>
            </li>
            <li >
            <a href="../dyn/pdf/SocialDistancing.pdf">
            Social Distancing</a>
            </li>
            </ul>
        )
    }
}
export default FAQ
