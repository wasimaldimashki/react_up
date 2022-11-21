import React from "react";
import { Container ,Row ,Col, Tab} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import ProjectCard from "./ProjectCard";
import projImg1 from '../assets/mywork/project1.png';
import projImg2 from '../assets/mywork/project2.png';
import projImg3 from '../assets/mywork/project3.png';
import projImg4 from '../assets/mywork/project4.png';
import projImg5 from '../assets/mywork/project5.png';
import projImg6 from '../assets/mywork/project6.png';
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Projects = ()=>{

const projects=[
{
    title:"Cello Shall",
    description:"Design & Development",
    imgUrl: projImg1,
},
{
    title:"Pharmacy Online",
    description:"Design & Development",
    imgUrl: projImg2,
},
{
    title:"Driven School",
    description:"Design & Development",
    imgUrl: projImg3,
},
{
    title:"CRUD JS",
    description:"Design & Development",
    imgUrl: projImg4,
},
{
    title:"Ghraphic Design",
    description:"Design & Development",
    imgUrl: projImg5,
},
{
    title:"Portfolio",
    description:"Design & Development",
    imgUrl: projImg6,
},
];


    return(
        <>
        <section className="project" id="project">
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__bounce" : "" }>
                <h2>Projects</h2>
                <p>Nisi est laboris tempor laborum nostrud cupidatat veniam excepteur cupidatat incididunt id consectetur. Nulla esse ad eiusmod ipsum sit anim quis tempor magna anim culpa ullamco aliqua. Non cillum nisi fugiat et pariatur sunt nostrud laboris adipisicing in. Reprehenderit nulla amet mollit Lorem id consectetur exercitation pariatur. Id elit fugiat aliqua esse pariatur commodo nisi minim laboris ipsum aliqua consequat est nisi. Cillum ipsum proident cupidatat adipisicing. Ipsum dolor consectetur aliquip cillum consectetur.</p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                        </Nav.Item>
                        </Nav>

{/* Tab Content */}


                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index)=>{
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {... project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                    {
                                        projects.map((project, index)=>{
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {... project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Row>
                                    {
                                        projects.map((project, index)=>{
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {... project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                </Col>
            </Row>
        </Container>

    </section>
    </>
)
}

export default Projects;