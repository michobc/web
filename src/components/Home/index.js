import Logotitle from '../../assets/images/logotitle.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i', 'c', 'h','e', 'l']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, []);

    const countEl = document.getElementById('count');
    updateVisitCount();
    function updateVisitCount() {
        fetch('https://api.countapi.xyz/update/myweb/67cc4b66-c7c8-4624-a7ca-81dc6a9c9319/?amount=0.25')
        .then(res => res.json())
        .then(res => {
            countEl.innerHTML = res.value;
        })
    }
    
    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br/>
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                    <img src={Logotitle} alt='software engineer'/>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20}/>
                    </h1>
                    <h2>Computer & Communication Engineering Student at ESIB</h2>
                    <Link to="/contact" className="flat-button">Contact Me</Link>
                </div>
                <div className='viewscss'>
                    <h2 id="count" ></h2>
                    <p>Views</p>
                </div>
            </div>
        <Loader type='ball-grid-pulse' />
        </>
    )
}

export default Home