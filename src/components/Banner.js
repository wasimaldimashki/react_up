import React,{ useState ,useEffect } from "react";
import { Container ,Row ,Col } from "react-bootstrap";
import { ArrowRightCircle ,CodeSlash } from "react-bootstrap-icons";
import headerImg from "../assets/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils";


export const Banner = () => {
    const [loopNum ,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ["Front End Developer","Web Designer","UI/UX Designer"];
    const [text,setText]= useState('');
    const [delta, setDelta] = useState(300- Math.random() * 100);
    const period = 4000;

    useEffect(()=>{
    let ticker = setInterval(() =>{
        tick();
    },delta)
    
    return() => { clearInterval(ticker)};
    }, [text])

    const tick =()=>{
        let i=loopNum % toRotate.length;
        let fullText =toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length -1) : fullText.substring(0,text.length +1);

        setText(updatedText);
        if (isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if(! isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '' ){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }


    return(
        <section className="banner" id="home">
            <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__fadeIn" : "" }>
                        <span className="tagline"> Welcome to WZ Technology <CodeSlash size={25}/></span>
                        <h1>{` WZ Technology `}<span className="wrap">{text}</span> </h1>
                        <p>lorem IpsumOccaecat qui eiusmod enim officia anim sint sit exercitation voluptate tempor anim non officia. Ex non adipisicing occaecat proident irure tempor. Eu elit do duis nulla. Et irure nostrud nulla ea.</p>
                        <button onClick={()=> console.log('connect')}> <a href="#connect">Let's Connect </a><ArrowRightCircle size={25}/></button>
                    </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Headder Img"  />
                </Col>
            </Row>
            </Container>
        </section>
    )
}

export default Banner;