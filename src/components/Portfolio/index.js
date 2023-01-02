import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import {faPython, faGitAlt, faHtml5, faJsSquare, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className="container about-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e', 's']}
                            idx={15}
                        />
                    </h1>

                    <h2>
                        Cardinal Health Wavemark _ Summer Internship<br/>
                        Software Engineering
                    </h2>
                    <p>
                        1 Jul 2022 _ 26 Aug 2022<br/>
                        Worked as a software test automation engineer.<br/>
                        • Learned Vue.JS frontend framework<br/>
                        • Attending Scrum events (sprint scheduling, daily stand ups,
                        sprint retrospectives)<br/>
                        • Written unit tests for different components (making test lists,
                        implementing tests, running code coverage)
                    </p>

                    <h2>
                        Second Year Project at ESIB _ Agile Methodology <br/>
                        TravelTrail _ Hotel booking website
                    </h2>
                    <p>
                        Feb 2022 _ May 2022<br/>
                        Worked as a Front-end developer.<br/>
                        • This project uses the API services of Booking.com<br/>
                        • The Back-end part is written in Python using Django, and the
                        Front-end is written in HTML, CSS, and JavaScript.<br/>
                        • It also has a user login and registration feature.<br/>
                        • Django will manage the database of login data and users.
                    </p>

                    <h2>
                        Logo & business card design _ Freelancing
                    </h2>
                    <p>
                        Jul 2019 _ Sep 2019<br/>
                        • Designed student cards for a restaurant campsite in Zandouqah.<br/>
                        • Designed business card for a Home Maintenance company.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                        <FontAwesomeIcon icon={faVuejs} color="#0e9404" />
                        </div>
                        <div className="face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                        <FontAwesomeIcon icon={faPython} color="#28A4D9" />
                        </div>
                        <div className="face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="face6">
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>
                    </div>
                </div>
            </div>
        <Loader type='ball-grid-pulse' />
        </>
    )
}

export default Portfolio