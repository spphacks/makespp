import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";
import Iframe from "react-iframe";

let images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg"];

const Call = styled.h2`
  margin: 0;
  padding: 0;
  font-size: ${props => props.size};
  color: ${props => props.color};
  font-family: "Playfair Display", serif;
`;

const Description = styled.p`
  font-size: ${props => props.size};

  font-family: "Lato", sans-serif;
  line-spacing: 1.6;
  color: ${props => props.color};
`;

const Card = styled.div`
  background: ${props => props.bg};
  padding: 10px;
  margin-bottom: 20px;
  height: 285px;
  box-shadow: rgba(0, 0, 0, 0.125) 0px 8px 16px;
  border-radius: 10px;

  @media only screen and (max-width: 1024px) {
    height: 330px;
  }
`;

const Img = styled.img`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;

  display: block;
  box-shadow: rgba(0, 0, 0, 0.125) 0px 8px 16px;
  border-radius: 10px;

  @media only screen and (max-width: 1024px) {
    height: 200px;
    max-width: 100%;
  }
`;

const Pitch = styled.div`
  max-width: 60em;
  margin: 0 auto;
`;
const Landing = () => (
  <div className="landing">
    <Row>
      <Col sm={6}>
        <Call color="333" size="36px">
          {" "}
          Learn. Make. Innovate.
        </Call>
        <Description color="#333" size="30px">
          MakeSPP brings together over 100 innovative young minds for an all-day
          hackathon and technology conference. We're a diverse and creative
          community of students dedicated to solving some of the most
          challenging problems with technology.{" "}
          <b>
            <u>
              <Link to="/register">Join Us.</Link>
            </u>{" "}
          </b>
        </Description>
      </Col>
      <Col sm={6}>
        <Img height="300px" src="/4.jpg" />
        <br />
        <br />
      </Col>
    </Row>

    <Pitch>
      <Row>
        <Col sm={6}>
          <Card bg="#f9e5eb;">
            <Call size="24px" color="#333;">
              {" "}
              <img height="30px" src="/learn.png" />
              <br />Beginner oriented.{" "}
            </Call>
            <Description color="#333" size="18px">
              {" "}
              Interested in computer science? Learn to code websites and
              applications through fun project-based workshops.{" "}
              <b>No experience necessary!</b>
              <br />
              <br />
              Love design? Work with your team to create a seamless user
              experience for your project. <br />
              <br /> Passion for business? Attend our entrepreneurship session,
              talks, & panel.
            </Description>
          </Card>
        </Col>
        <Col sm={6}>
          <Img height="300px" src="/8.jpg" />
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Img height="300px" src="/5.jpg" />
        </Col>
        <Col sm={6}>
          <Card bg="#deeaf7;">
            <Call color="#333" size="24px">
              {" "}
              <img height="30px" src="/build.png" />
              <br />Build something amazing.{" "}
            </Call>
            <Description color="#333" size="18px">
              {" "}
              Regardless if you're a code monkey, entepreneur, designer, or
              engineer, we all have one thing in common: <b>
                we make things
              </b>. <br />
              <br /> Let's use our creativity to make a difference.
            </Description>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Card bg="#f9e5eb;">
            <Call size="24px" color="#333;">
              {" "}
              <img height="30px" src="/share.png" />
              <br />Share and win prizes.{" "}
            </Call>
            <Description color="#333" size="18px">
              You'll have the opportunity to win prizes worth thousands of
              dollars — AirPods, tablets, drones, Raspberry Pis, speakers,
              software subscriptions, and much more! <br />
              <br />
              In addition to grand prizes, we also have four tracks which you
              may choose to enter your project in:{" "}
              <b>social justice, education, healthcare, and environment.</b>
            </Description>
          </Card>
        </Col>
        <Col sm={6}>
          <Img height="300px" src="/1.jpg" />
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Img height="300px" src="/6.jpg" />
        </Col>
        <Col sm={6}>
          <Card bg="#deeaf7;">
            <Call color="#333" size="24px">
              {" "}
              <img height="30px" src="/fun.png" />
              <br />Fun, food, and swag.{" "}
            </Call>
            <Description color="#333" size="18px">
              {" "}
              With delicious food and awesome swag from the hottest tech
              companies, you'll have a great time.
              <br /> <br />
              Whether you're working on a marketing pitch or coding up a new AI
              algorithm, MakeSPP is a place for everyone to thrive.{" "}
            </Description>
          </Card>
        </Col>
      </Row>
    </Pitch>
    <Call color="fff" className="center" size="48px">
      Location
    </Call>
    <Description color="#333" className="center" size="28px">
      <b>April 6th, 2019</b>
      <br />
      8AM - 8PM
      <br />
      <br />
      Saint Peter's Preparatory High School <br />144 Grand St, Jersey City, NJ
      07302<br /> <br />
      <Iframe
        url="https://www.google.com/maps/embed/v1/place?key=AIzaSyCa49laFsNCNi0KJWPHSTtkkAl-WHuh2LE
      &q=Saint+Peter's+Prep"
        width="90%"
        height="300px"
        display="initial"
        position="relative"
        allowFullScreen
      />
    </Description>
    <Description color="#333" className="center" size="16px">
      © 2019 <a href="https://spprep.org"> Saint Peter's Prep High School</a>
    </Description>
  </div>
);

// Last year-- Must do (state dept. t shirts, video in square)
// Location + Time
// Tracks + Prizes
// FAQ -- must do
// Guests
// Team
// Sponsors
// Footer -- Must do

// Notes -- 3-4 workshops max, 1 entreprenurship panel, 1 opening talk, sponsor opening talks, juding final talk

export default Landing;
