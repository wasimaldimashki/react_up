import React  from "react";
import { Col, Container, Row } from "react-bootstrap";
import hello from '../assets/Notifications-icon-like,-speech-bubble.png';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
export const Contact = () => {
    
    // const formInitialDetails = {
    //     firstName : '',
    //     lastName : '',
    //     email : '',
    //     phone : '',
    //     message : ''
    // }

    // const {formDetails,setFormDetails} = useState(formInitialDetails);
    // const [buttonText,setButtonText] = useState ('Send');
    // const [status,setStatus] = useState({});

    // const onFormUpdate = (category, value) =>{
    //     setFormDetails({
    //         ...formDetails,
    //         [category]:value
    //     })
    // }

    // const handleSubmit = async (e)=>{
    //     e.preventDefault();
    //     setButtonText('Sending...');
    //     let response = await fetch("http://localhost:5000/contact",{
    //         method:"POST",
    //         headers:{
    //             "Content-Type":"Application/json;charset=utf-8",
    //         },
    //         body: JSON.stringify(formDetails),
    //     });
    //     setButtonText("Send");
    //     let result = response.json();
    //     setFormDetails(formInitialDetails);
    //     if(result.code === 200){
    //         setStatus({success:true , message:'Message sent successfuly'});
    //     }else{
    //         setStatus({success:false , message:'Something went wrong , please try agin later.'})
    //     }
    // };

    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={hello} alt="Contact us"/>
                    </Col>
                    <Col md={6}>
                    <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__fadeInRight" : "" }>
                    <h2>Get In Touch</h2>
                    </div>}
                    </TrackVisibility>
                    <form >  
                        <Col className="inputBox ">

                            <Row sm={6} className="px-1 ">
                                
                                <input type="text" placeholder="First Name" />
                                <input type="text" className="lef" placeholder="Last Name"/>
                            </Row>

                            <Row sm={6} className="px-1">
                            <input type="email" placeholder="Email Address" />
                            <input type="tel"  className="lef" placeholder="Phone Number" />
                            </Row>

                            <Row className="col-md-auto">
                            <textarea placeholder="Message"></textarea>
                            </Row>
                            <Row sm={6} className="xs-1" ><button type="submit" value="Send">Send</button></Row>
                        </Col>

                    </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;