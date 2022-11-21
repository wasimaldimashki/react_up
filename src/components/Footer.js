import React from "react"
import { Container ,Row ,Col} from "react-bootstrap";
import {MailchimpForm} from "./MailchimpForm"
import logo2 from '../assets/WZlogo.png';
import navIcon1 from '../assets/icons/nav-icon1.png';
import navIcon2 from '../assets/icons/nav-icon2.svg';
import navIcon3 from '../assets/icons/nav-icon3.svg';
import navIcon4 from '../assets/icons/nav-icon4.png';

export const Footer = ()=>{
return(
    <footer className="footer">
        <Container>
            <Row className="align-items-center">
            <MailchimpForm/>
            <Col sm={6}>
                <img src={logo2} alt="WZ Logo"/>
            </Col>
            <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                    <a href="mailto:wztechnology@outlook.sa"> <img src={navIcon1} alt="Email"/></a>
                    <a href="https://wa.me/963968281813"> <img src={navIcon4} alt="Whatsapp"/></a>
                    <a href="https://www.facebook.com/WZTechnology1"> <img src={navIcon2} alt="Facebook"/></a>
                    <a href="https://www.instagram.com/wz_technology/"> <img src={navIcon3} alt="Instagram"/></a>
                </div>
                <p>©2025 WZ Technology | All Rights Reserved</p>
            </Col>
            </Row>
        </Container>
    </footer>
)
}

export default Footer;