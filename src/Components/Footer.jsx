import React from 'react'
import {Link} from 'react-router-dom'
import {FiGithub} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'

export default function Footer() {
    return (
        <div className="Footer">
            <hr/>
            <div className="Footer-Content">
            <p className="Content">Kogan Nathan | </p><div className="Content"><Link to="/about" className="Nav-link">About</Link> |
             <a className="Nav-cart" href="https://github.com/Kogan-Nathan/"><FiGithub/></a>
              <a className="Nav-cart" href="https://www.linkedin.com/in/nathan-kogan-4ba07519b"><FiLinkedin/></a></div>  
            </div>
        </div>
    )
}
