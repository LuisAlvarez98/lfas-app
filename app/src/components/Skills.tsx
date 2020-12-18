import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Skill = styled.div`
  height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const SkillBall = styled.div`
  border-radius: 128px;
  width: 128px;
  height: 128px;
  background-color: #64b5f6;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #1e88e5;
  }
`;

const SkillTitle = styled.h1`
  color: white;
  font-size: 32px;
`;

const Skills = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Container fluid>
        <Row>
          <Col xs={6} md={3}>
            <Skill>
              <SkillBall>
                <SkillTitle>Ts</SkillTitle>
              </SkillBall>
            </Skill>
          </Col>
          <Col xs={6} md={3}>
            <Skill>
              <SkillBall>
                <SkillTitle>Js</SkillTitle>
              </SkillBall>
            </Skill>
          </Col>
          <Col xs={6} md={3}>
            <Skill>
              <SkillBall>
                <SkillTitle>C++</SkillTitle>
              </SkillBall>
            </Skill>
          </Col>
          <Col xs={6} md={3}>
            <Skill>
              <SkillBall>
                <SkillTitle>Java</SkillTitle>
              </SkillBall>
            </Skill>
          </Col>

          <Col xs={6} md={4}>
            <Skill>
              <SkillBall>
                <SkillTitle>Express</SkillTitle>
              </SkillBall>
            </Skill>
          </Col>
          <Col xs={6} md={4}>
            <Skill>
              <SkillBall>
                <SkillTitle>Mongo</SkillTitle>
              </SkillBall>
            </Skill>
          </Col>
          <Col xs={6} md={4}>
            <Skill>
              <SkillBall>
                <SkillTitle>React</SkillTitle>
              </SkillBall>
            </Skill>
          </Col>
          <Col xs={6} md={12}>
            <Skill>
              <SkillBall>
                <SkillTitle>SQL</SkillTitle>
              </SkillBall>
            </Skill>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
