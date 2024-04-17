import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg1 from "../assets/img/fronted.jpg"
import projImg2 from "../assets/img/cloud.avif";
import projImg3 from "../assets/img/backend.jpg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "UI/UX designer",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Web Development",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "App Development",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Cloud Services",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Frontend Development",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Backend Development",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). 
                Full-stack developers have a high level of competency in both frontend and backend languages. They are skilled in HTML, CSS, JavaScript, NodeJS, ExpressJS Equally full-stack developers understand various database management systems (DBMS) like MySQL, PostgreSQL, MongoDB, and more</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <h2>Education</h2>
                    <p>I have Completed my Bachelor of Engineering from Rashtrasant Tukadoji Maharaj Nagpur University</p>
                    <p>I have Completed my Diploma from Maharashtra State Board of Technical Education</p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                  
                      <p>Full-stack developers have a high level of competency in both frontend and backend languages. They are skilled in HTML, CSS, JavaScript, NodeJS, ExpressJS Equally full-stack developers understand various database management systems (DBMS) like MySQL, PostgreSQL, MongoDB, and more</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <h2>Education</h2>
                      <p>I have Completed my Bachelor of Engineering from Rashtrasant Tukadoji Maharaj Nagpur University</p>
                      <p>I have Completed my Diploma from Maharashtra State Board of Technical Education</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
