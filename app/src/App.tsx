import React from "react";
import styled from "styled-components";
import Profile from "./img/avatar.png";
import HackCemex from "./img/hack-cemex.jpeg";
import HackMty from "./img/hack-mty.jpg";
import { Footer } from "rsuite";
import Typing from "react-typing-animation";
import { Container, Row, Col } from "react-bootstrap";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./App.css";
import Skills from "./components/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Navbar, Nav } from "react-bootstrap";
let scrollToElement = require("scroll-to-element");

const MainContainer = styled.div`
  background-color: #64b5f6;
  height: 450px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const CompanyTitle = styled.span`
  color: #0d47a1;
`;
const AboutMe = styled.div`
  align-self: center;
`;

const Contact = styled.div`
  align-self: center;
`;

const Hackathons = styled.div`
  align-self: center;
  padding: 16px;
  background-color: #64b5f6;
`;
const HackathonPlacing = styled.h6`
  color: white;
`;
const HackathonImage = styled.img`
  height: 248px;
  width: 348px;
  border-radius: 64px;
`;
const HackathonDescription = styled.p`
  color: white;
  margin-top: 10px;
`;
const Experience = styled.div`
  align-self: center;
  padding: 32px;
  background-color: #64b5f6;
`;

const SubContainer = styled.div`
  align-self: center;
`;

const Title = styled.h1`
  color: white;
`;

const TitleBlue = styled.h1`
  color: white;
`;
const SubTitleBlue = styled.h4`
  color: white;
`;

const AvatarImage = styled.img`
  height: 224px;
  width: 224px;
  border-radius: 128px;
`;
const SkillsContainer = styled.div`
  align-self: center;
  padding: 16px;
`;

const SocialBallGit = styled.a`
  border-radius: 128px;
  width: 64px;
  height: 64px;
  background-color: #24292e;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #1e88e5;
  }
`;
const EmailTitle = styled.a`
  font-size: 26px;
`;

const SocialBallLinkedIn = styled.a`
  border-radius: 128px;
  width: 64px;
  height: 64px;
  background-color: #0e76a8;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #1e88e5;
  }
`;
const SocialBall = styled.div`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const SocialBallInsta = styled.a`
  border-radius: 128px;
  width: 64px;
  height: 64px;
  background-color: #e1306c;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #1e88e5;
  }
`;
const App = () => {
  const goToAbout = () => {
    scrollToElement(".about-me", {
      offset: 0,
      ease: "out-bounce",
      duration: 1500,
    }).on("end", () => {});
  };
  const goToExperience = () => {
    scrollToElement(".experience", {
      offset: 0,
      ease: "out-bounce",
      duration: 1500,
    }).on("end", () => {});
  };
  const goToSkills = () => {
    scrollToElement(".skills", {
      offset: 0,
      ease: "out-bounce",
      duration: 1500,
    }).on("end", () => {});
  };
  const goToHackathons = () => {
    scrollToElement(".hacks", {
      offset: 0,
      ease: "out-bounce",
      duration: 1500,
    }).on("end", () => {});
  };
  const goToContact = () => {
    scrollToElement(".contact", {
      offset: 0,
      ease: "out-bounce",
      duration: 1500,
    }).on("end", () => {});
  };
  return (
    <div className="App">
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#64b5f6" }}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end navbar-right">
            <Nav.Link style={{ color: "white" }} onClick={goToAbout}>
              About me
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} onClick={goToExperience}>
              Professional Experience
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} onClick={goToSkills}>
              Skills
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} onClick={goToHackathons}>
              Hackathons
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} onClick={goToContact}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <MainContainer>
        <SubContainer>
          <Typing loop={false} speed={125}>
            <Title>Hello there, I'm Luis!</Title>
          </Typing>
        </SubContainer>
      </MainContainer>
      <AboutMe style={{ padding: "16px" }} className="about-me">
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <AvatarImage src={Profile} />
            </Col>
            <Col xs={12} md={8} style={{ alignSelf: "center" }}>
              <h5
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  color: "#64b5f6",
                }}
              >
                About me
              </h5>
              <h5
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                I'm currently pursuing a Computer Science degree @ITESM
              </h5>
              <h5 style={{ fontWeight: "bold", textAlign: "left" }}>
                Fullstack Developer / React.js Enthusiast{" "}
              </h5>
              <h5 style={{ fontWeight: "bold", textAlign: "left" }}>
                I enjoy playing videogames, learning new stuff and listening to
                music
              </h5>
            </Col>
          </Row>
        </Container>
      </AboutMe>
      <Experience>
        <TitleBlue className="experience">Profesional Experience</TitleBlue>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Jun 2020 - Aug 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h4 className="vertical-timeline-element-title">
              Lyft <CompanyTitle>Software Engineering Intern</CompanyTitle>
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              <ul>
                <li style={{ textAlign: "left" }}>
                  Worked in a change management internal tool as a Frontend
                  Engineer in the Marketplace, Pricing XP core team. Implemented
                  modular code for a change flow using React.js and xstate. This
                  change flow process used to take hours and now it takes
                  minutes.
                </li>
                <li style={{ textAlign: "left" }}>
                  Implemented various Frontend endpoints to communicate with the
                  backend in Express.js.
                </li>
                <li style={{ textAlign: "left" }}>
                  Implemented unit tests using Jest with Enzyme.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Jun 2019 - Dec 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h4 className="vertical-timeline-element-title">
              Next-e <CompanyTitle>Junior Software Developer</CompanyTitle>
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              Monterrey, NL
            </h4>
            <p>
              <ul>
                <li style={{ textAlign: "left" }}>
                  Worked in fixing, optimizing, creating and updating features
                  of the company’s platform as a Native Android Developer and
                  Frontend web developer.
                </li>
                <li style={{ textAlign: "left" }}>
                  Redesigned, refactored and optimized the landing page of the
                  company using React js and react-bootstrap to make it
                  responsive.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2018 - Jun 2018"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h4 className="vertical-timeline-element-title">
              SOFEX <CompanyTitle>Software Engineer</CompanyTitle>
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              Monterrey, NL
            </h4>
            <p>
              <ul>
                <li style={{ textAlign: "left" }}>
                  Lead the Android Development team and used SCRUM Framework for
                  software development.
                </li>
                <li style={{ textAlign: "left" }}>
                  Accomplished as a team to develop the front end of the main
                  site of Zone Fitness Mexico using Vue.js and Vuetify which
                  lead to the client winning $5k dollars profit in only a week
                  after the implementation. https://www.zonefitness.mx/
                </li>
                <li style={{ textAlign: "left" }}>
                  {" "}
                  Developed an e-commerce native android app for Uey MX which
                  led to an increase of sales by 10%. https://uey.mx/{" "}
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2018 - Jul 2018"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h4 className="vertical-timeline-element-title">
              Grill on Box <CompanyTitle>Android Developer Intern</CompanyTitle>
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              Monterrey, NL
            </h4>
            <p>
              <ul>
                <li style={{ textAlign: "left" }}>
                  Composed an e-commerce native android app for Grill on Box
                  which led to an increase of clients by 10%.
                </li>
                <li style={{ textAlign: "left" }}>
                  Implemented a shopping cart system using local storage.
                </li>
                <li style={{ textAlign: "left" }}>
                  Carried out an efficient way of navigation using android
                  fragments for the reduction of memory consumption and
                  optimization.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="May 2017 - Aug 2017"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h4 className="vertical-timeline-element-title">
              Grill on Box{" "}
              <CompanyTitle>Frontend Developer Intern</CompanyTitle>
            </h4>
            <h4 className="vertical-timeline-element-subtitle">
              Monterrey, NL
            </h4>
            <p>
              <ul>
                <li style={{ textAlign: "left" }}>
                  Redesigned and the front end of the main site of the company
                  using Materialize CSS, Laravel PHP, MySQL, JavaScript, HTML
                  and CSS which lead an increase of daily users by 5%.
                </li>
                <li style={{ textAlign: "left" }}>
                  Refactored and optimized the payment system by using Stripe to
                  enable more credit and debit cards to expand our market in
                  Latin America.
                </li>
                <li style={{ textAlign: "left" }}>
                  Designed the SQL model for the main site and integrated Google
                  Maps API.
                </li>
              </ul>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          />
        </VerticalTimeline>
      </Experience>
      <SkillsContainer className="skills">
        <h1 style={{ color: "#64b5f6" }}>Skills</h1>
        <Skills />
      </SkillsContainer>
      <Hackathons>
        <TitleBlue className="hacks">Hackathons</TitleBlue>
        <Container fluid>
          <Row>
            <Col xs={12} md={6}>
              <SubTitleBlue>Hack MTY 2019</SubTitleBlue>
              <HackathonPlacing>3rd place</HackathonPlacing>
              <HackathonImage src={HackMty} />
              <HackathonDescription>
                We delivered a mobile app where users upload a photo of their
                favorite clothes for receiving suggestions of similar items in
                order to purchase them. Lead the development of the native
                android app where I consumed all the services from our API
                hosted by AWS.
              </HackathonDescription>
            </Col>
            <Col xs={12} md={6}>
              <SubTitleBlue>CEMEX Hackathon 2018</SubTitleBlue>
              <HackathonPlacing>
                1st place (University Category)
              </HackathonPlacing>
              <HackathonImage src={HackCemex} />
              <HackathonDescription>
                Freight Pool challenge, we developed a ReactJS app with Flask
                that lets the user purchase space for their goods from CEMEX
                freight trucks. I worked mainly on the main views design and
                with the services consumption.
              </HackathonDescription>
            </Col>
          </Row>
        </Container>
      </Hackathons>
      <Contact className="contact">
        <Footer>
          <h1 style={{ marginTop: "10px" }}>Let's get in touch</h1>
          <EmailTitle href="mailto:luisfalvarezsanchez@gmail.com">
            luisfalvarezsanchez@gmail.com
          </EmailTitle>
          <Container fluid style={{ marginTop: "25px" }}>
            <Row>
              <Col xs={12} md={4}>
                <SocialBall>
                  <SocialBallGit
                    target="_new"
                    href="https://github.com/LuisAlvarez98"
                  >
                    <FontAwesomeIcon size="2x" color="white" icon={faGithub} />
                  </SocialBallGit>
                </SocialBall>
              </Col>
              <Col xs={12} md={4}>
                <SocialBall>
                  <SocialBallLinkedIn
                    target="_new"
                    href="https://www.linkedin.com/in/luisalvarez98/"
                  >
                    <FontAwesomeIcon
                      size="2x"
                      color="white"
                      icon={faLinkedin}
                    />
                  </SocialBallLinkedIn>
                </SocialBall>
              </Col>
              <Col xs={12} md={4}>
                <SocialBall>
                  <SocialBallInsta
                    target="_new"
                    href="https://www.instagram.com/luisalvarezsanchez/"
                  >
                    <FontAwesomeIcon
                      size="2x"
                      color="white"
                      icon={faInstagram}
                    />
                  </SocialBallInsta>
                </SocialBall>
              </Col>
            </Row>
          </Container>
        </Footer>
      </Contact>
    </div>
  );
};

export default App;
