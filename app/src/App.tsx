import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import Profile from "./img/avatar.png";
import { FlexboxGrid } from "rsuite";
import { Grid, Row, Col } from "rsuite";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./App.css";

const Container = styled.div`
  background-color: #64b5f6;
  height: 450px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const AboutMe = styled.div`
  align-self: center;
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
  margin: 0px;
`;
const TitleBlue = styled.h1`
  color: white;
  margin: 0px;
`;

const AvatarImage = styled.img`
  height: 248px;
  width: 248px;
  border-radius: 128px;
`;
const ContainerExperience = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 248px;
  width: 100%;
  border-radius: 32px;
  background-color: #1565c0;
`;

const App = () => {
  return (
    <div className="App">
      <Container>
        <SubContainer>
          <Title>Hey, I'm Luis 👋</Title>
        </SubContainer>
      </Container>
      <AboutMe>
        <h1>About me</h1>
        <AvatarImage src={Profile} />
        <p>I'm currently pursuing a Computer Science degree @ITESM</p>
        <p>Fullstack Developer / React.js Enthusiast </p>
        <p>
          I enjoy playing videogames, learning new stuff and listening to music
        </p>
      </AboutMe>
      <Experience>
        <TitleBlue>Experience</TitleBlue>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="Jun 2020 - Aug 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              <span>Lyft</span> Software Engineering Intern
            </h3>
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
            <h3 className="vertical-timeline-element-title">
              <span>Next-e</span> Junior Software Developer
            </h3>
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
            <h3 className="vertical-timeline-element-title">
              <span>SOFEX</span> Software Engineer
            </h3>
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
            <h3 className="vertical-timeline-element-title">
              <span>Grill on Box</span> Android Developer Intern
            </h3>
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
            <h3 className="vertical-timeline-element-title">
              <span>Grill on Box</span> Frontend Developer Intern
            </h3>
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
    </div>
  );
};

export default App;
