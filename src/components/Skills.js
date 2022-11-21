import React from "react";
import { Container ,Row ,Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/skills/one-hundred-percent-blue-grey-and-white-pie-chart-on-transparent-background-PNG.png';
import meter2 from '../assets/skills/Ninety-percent-blue-grey-and-white-pie-chart-on-transparent-background-PNG.png';
import meter3 from '../assets/skills/Eighty-percent-blue-grey-and-white-pie-chart-on-transparent-background-PNG.png';
import meter4 from '../assets/skills/Seventy-percent.png';
import meter5 from '../assets/skills/Sixty-percent-blue-grey-and-white-pie-chart-on-transparent-background-PNG.png';
import meter6 from '../assets/skills/Fifty-percent-blue-grey-and-white-pie-chart-on-transparent-background-PNG.png';
import colorSharp from '../assets/images/eXpresso.jpg';
import TrackVisibility from 'react-on-screen';
import 'animate.css';



export const Skills =()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
            },
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
            },
            tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
            },
            mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
            }
        };
        return(
            <section className="skill" id="skills">
                <Container>
                    <Row>
                        <Col>
                        <div className="skill-box">
                        <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__lightSpeedInRight" : "" }>
                            <h2>Skills</h2>
                                <p>loremVoluptate laboris est deserunt mollit commodo eiusmod sint in officia officia irure. In ut consectetur et occaecat ullamco velit nulla. Voluptate sit non consectetur est. Mollit minim incididunt magna sint mollit do cillum esse.</p>
                                </div>}
                    </TrackVisibility>
                                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                    
                                    <div className="item">
                                        <img src={meter1} alt="image1" />
                                        <h5>HTML5</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter2} alt="image2" />
                                        <h5>CSS3</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter5} alt="image3" />
                                        <h5>Reactjs</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter3} alt="image4" />
                                        <h5>PHP8</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter6} alt="image5" />
                                        <h5>Python</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter4} alt="image5" />
                                        <h5>Laravel</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter2} alt="image5" />
                                        <h5>Flutter</h5>
                                    </div>
                                </Carousel>

                        </div>
                        </Col>
                    </Row>
                </Container>
                <img className="backround-image-left" src={colorSharp } alt="image6" />
            </section>
        )
}


export default Skills;
