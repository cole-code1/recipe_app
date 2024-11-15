import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ContactUs = () => {
    return (
        <div>
            <Navbar />
            <div style={{ margin: '20px auto', padding: '40px', border: '6px solid #;', borderRadius: '5px', fontSize: '57px', background:'rgb(236, 174, 18)'}}>
                <h2>Contact Us</h2>
                <p><FontAwesomeIcon icon={faPhone} /> <strong>Call:</strong> +254700403124</p>
                <p><FontAwesomeIcon icon={faInstagram} /> <strong>Instagram:</strong> @Recipeapp</p>
                <p><FontAwesomeIcon icon={faGithub} /> <strong>GitHub:</strong> Recipe-app1</p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>X:</strong> @letsmakesomefood</p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> <strong>P.O. Box:</strong> 34653-01100</p>
                <p><FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong> Recipeapp@gmail.com</p>
                
            </div>

            <Footer />
        </div>
    );
};

export default ContactUs;