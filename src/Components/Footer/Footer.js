import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div className="footer-items">
        <ul>
          <li key={1} className="icon">
            <a
              className="contact-link"
              href="https://www.linkedin.com/in/robert-wiggins-7782b071/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="../../static/social-1_logo-linkedin.svg" />
            </a>
          </li>
          <li key={2} className="icon">
            <a
              href="https://github.com/RobertWiggins"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src="../../static/social-1_logo-github.svg" />
            </a>
          </li>
          <li key={3} className="icon">
          <a className="mail-link contact-link" href="mailto:wigginsro11@gmail.com">
            <img src="../../static/iconfinder_mail_115714.svg" />
          </a>
          </li>
        </ul>
      </div>
    )
  }
}
