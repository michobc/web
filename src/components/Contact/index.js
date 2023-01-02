import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react'
import { TileLayer, Marker, Popup, Map } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import emailjs from '@emailjs/browser'


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6ozrw5e', 'template_v50vlnb', form.current, 'w5FXkafmvr4h-zvo3')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
    }

    // to clear form when submit is triggered:
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
    <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially on ambitious
                    or large projects. However, if you have any other requests or
                    questions, don't hesitate to contact me using the form below.
                </p>

                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' value={formData.name} onChange={handleChange} required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' value={formData.subject} onChange={handleChange} required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required value={formData.message} onChange={handleChange} />
                            </li>
                            <li>
                                <input type='submit' className="flat-button" value='Submit' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

            <div className='info-map'>
                Michel Bou Chahine
                <br/>
                Lebanon
                <br/>
                Baabdat, Chammis Street
                <br/>
                <span>michelbouchahine132@gmail.com</span>
            </div>
            
            <div className='map-wrap'>
                <Map center={[33.8920, 35.6758]} zoom={16}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[33.8920, 35.6758]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                    <Popup>I live here, come over for a cup of coffee :)</Popup>
                    </Marker>
                </Map>
            </div>
        </div>
    <Loader type='ball-grid-pulse' />
    </>
    )
}

export default Contact