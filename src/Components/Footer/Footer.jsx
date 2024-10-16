import React from "react"
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () =>
    {
      return (
        <div className="footer">
          <div className="footer-top">
            <div className="footer-top-left">
                <h1>Tirth</h1>
                <p>I'm a Frontend developer and have a ability to lern new things.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder="Enter your email" />
                </div>
                <div className="footer-suscribe">Suscribe</div>
            </div>
          </div>
          <hr />
          <div className="footer-bottom">
            <p className="footer-bottom-left">@ 2024 Tirth Swami.All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Tern of services</p>
                <p>Privacy policy</p>
                <p>Connect with me</p>
            </div>
          </div>
        </div>
      )
    }
    export default Footer