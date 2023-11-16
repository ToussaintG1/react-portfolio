import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Advert Logix",
      description: "Full Service Marketing Firm",
      imgUrl: projImg1,
    },
    {
      title: "Horiseon Digital Marketing",
      description: "Digital Marketing Agency",
      imgUrl: projImg2,
    },
    {
      title: "Toussaint's Coding Quiz",
      description: "Coding quiz for those lookig to learn the basics of JavaScript",
      imgUrl: projImg3,
    },
    {
      title: "Better Meals",
      description: "Nutrition and Diet Web Application",
      imgUrl: projImg4,
    },
    {
      title: "Note Taker",
      description: "Note taking application to save your greatest ideas.",
      imgUrl: projImg5,
    },
    {
      title: "Space Invaders",
      description: "Space Invaders video game inspired by the original.",
      imgUrl: projImg6,
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
                <p>During my years of programming I have been able to build a wide variety of sufficient web applications including: Both Front-end, Back-end, Full-Stack, Database, E-commerce, and PWA Web Applications.</p>
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
                      <p>During my years of programming I have been able to build a wide variety of sufficient web applications including: both Front-end, Back-end, Full-Stack, Database, E-commerce, and PWAWeb Applications.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Feel free to contact me if you enjoy my work.</p>
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