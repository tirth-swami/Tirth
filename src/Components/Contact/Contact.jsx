import React from "react"
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () =>
    {
        const onSubmit = async (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
        
            formData.append("access_key", "c54cad44-673e-41c5-8d8c-ed53f367da1d");
        
            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);
        
            const res = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              },
              body: json
            }).then((res) => res.json());
        
            if (res.success) {
             alert(res.message);
            }
          };
        
      return (
        
          <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src="" alt="" />
            </div>
            <div className="contact-sec">
                <div className="contact-left">
                    <h1>Lets talk</h1>
                    <p>I'm currently available to take on new projects,so feel free about anything that you want to work on.You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>tirthswami03@gmail.com</p>

                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+91 985-013-6539</p>
                            
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                        <p>Jath </p>
                            
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Ypur name</label>
                    <input type="text" placeholder="Enter your name" name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder="Enter your email" name='email'/>
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8"placeholder="Enter your message"></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>

                </form>
            </div>

          </div>
      
      )
    }
    export default Contact