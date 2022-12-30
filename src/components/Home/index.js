import Logotitle from '../../assets/images/logotitle.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hi, <br/> I'm
                <img src={Logotitle} alt='software engineer'/>
                ichel
                <br/>
                Software Engineer
                </h1>
                <h2>Computer & Communication Engineering Student at ESIB</h2>
                <Link to="/contact" className="flat-button">Contact Me</Link>
            </div>
        </div>
    )
}

export default Home