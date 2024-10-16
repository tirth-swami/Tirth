import React from "react"
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'

const About = () =>
{
    return (
        <div id="about" className="about">
            <div className="about-tille">

                <h1>About me</h1>
                
            </div>
            <div className="about-sec">
                <div className="about-left">
                    <img src="https://media.licdn.com/dms/image/v2/D4D03AQHGMvU1786tfg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729064305906?e=1734566400&v=beta&t=JcTa_trm9_EzThXIT-Iocx2ts7dQxPobGJQ5vKH_VGs" alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a Front-End Developer creating dynamic and responsive web applications. Proficient in HTML, CSS, and
                        JavaScript, amd i have the basik knowedge of react</p>
                        <p>I have done my two mini projects like online service hub and second one is Big bazar e-commerce website</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p><hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Bootstrap</p><hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React (Basics)</p><hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achivements">
                <div className="about-achivement">
                    <h1>Frontend Technology</h1>
                    <p>HTML,CSS,JavaScript,Bootstrap,Templete Modification</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>Programming Languages</h1>
                    <p>C,Java</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>Operating System Used</h1>
                    <p>Windows 11</p>
                </div>
                <hr />
            </div>
        </div>
    )
}
export default About
