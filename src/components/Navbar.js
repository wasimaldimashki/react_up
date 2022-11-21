import React ,{useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo2 from '../assets/WZlogo.png';
import navIcon1 from '../assets/icons/nav-icon1.png';
import navIcon2 from '../assets/icons/nav-icon2.svg';
import navIcon3 from '../assets/icons/nav-icon3.svg';
import navIcon4 from '../assets/icons/nav-icon4.png';

function NavBar() {
    const [activeLink, setActiveLink]=useState('home');
    const [scrolled,seScrolled]=useState(false);

    useEffect(()=>{
        const onScroll = ()=> {
            if(window.scrollY>50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);

        return() => window.removeEventListener("scroll",onScroll);
    },[])

    const onUpdaateActiveLink =(value)=>{
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo2} alt="Logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdaateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdaateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdaateActiveLink('project')}>Project</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="mailto:wztechnology@outlook.sa"> <img src={navIcon1} alt="Email"/></a>
                    <a href="https://wa.me/963968281813"> <img src={navIcon4} alt="Whatsapp"/></a>
                    <a href="https://www.facebook.com/WZTechnology1"> <img src={navIcon2} alt="Facebook"/></a>
                    <a href="https://www.instagram.com/wz_technology/"> <img src={navIcon3} alt="Instagram"/></a>
                </div>
                <button className="vvd"   onClick={() => onUpdaateActiveLink('connect')}><a href="#connect"><span>Let's Connect</span></a></button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
    }

export default NavBar;