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
`;

const Description = styled.p`
  font-size: ${props => props.size};
  font-weight: 400;
  color: #333;
  padding: 0;
  line-height: 1.5;
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

const Profile = styled.img`
  margin-left: auto;
  margin-right: auto;
  height: 120px;
  display: block;
  box-shadow: rgba(0, 0, 0, 0.125) 0px 8px 16px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const Site = styled.div`
  max-width: 70em;
  margin: 0 auto;
`;
const Landing = () => (
  <div className="landing">
    <Row>
      <Col sm={6}>
        <Call color="#333" size="36px">
          {" "}
          Learn. Make. Innovate.
        </Call>
        <Description color="#333" size="28px">
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
    <Site>
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
              Learn to code websites and applications with fun project-based
              workshops & skilled mentors. <b>No experience necessary!</b>
              <br /> <br />
              You'll also have the opportunity to attend our entrepreneurship
              session, talks, & panel.
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
              Regardless if you're a entepreneur, designer, or engineer, we all
              have one thing in common: <b>we make things</b>. <br />
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
      <br />
      <Call color="#333" className="center" size="48px">
        Location
      </Call>
      <Description color="#333" className="center" size="28px">
        <b>April 6th, 2019</b>
        <br />
        <b>8AM - 8PM</b>
        <br />
        Saint Peter's Preparatory High School <br />144 Grand St, Jersey City,
        NJ 07302<br /> <br />
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
      <Call color="#333" className="center" size="48px">
        Guests
      </Call>
      <br /> <br />
      <Row>
        <Col sm={3}>
          <Profile src="/Joshua.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Joshua Berry</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Database Engineer, Google
          </Description>
        </Col>
        <Col sm={3}>
          <Profile src="/Brendan.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Brendan Bryant</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Product Manager, Conde Nast
          </Description>
        </Col>
        <Col sm={3}>
          <Profile src="/Cat.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Cat Noone</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            CEO, Iris Health
          </Description>
          <br />
        </Col>
        <Col sm={3}>
          <Profile src="/Phil.jpg" />
          <Description className="center" color="#333" size="18px">
            {" "}
            <b> Phillip McGovern</b>
          </Description>
          <Description className="center" color="#333" size="16px">
            {" "}
            Investment Banking Associate, <br />Goldman Sachs
          </Description>
          <br />
        </Col>
      </Row>
      <Call color="#333" className="center" size="48px">
        FAQ
      </Call>
      <br /> <br />
      <Row>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            What is a hackathon?
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            A hackathon is where you have the opportunity turn your ideas into
            real projects. We'll provide skilled mentors, speakers, workshops,
            food, friends, & so much more.
          </Description>
        </Col>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            Who can attend?{" "}
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            Any student in grades 7-12 is welcome to apply to attend.
          </Description>
        </Col>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            What if I don't know how to code?
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            MakeSPP is the best place to start. We'll have beginner-friendly
            workshops and amazing mentors to help you build something amazing
            over the day.
          </Description>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            What does it cost?
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            MakeSPP is completely free thanks to our sponsors. There will be
            food, snacks, drinks, and thousands of dollars worth of prizes.
          </Description>
        </Col>

        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            What if I don’t have a team or idea?
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            Don't worry! There will be team formation & brainstorming sessions
            at the beginning of the event.
          </Description>
        </Col>
        <Col sm={4}>
          <Call className="center" color="#333" size="24px">
            I have another question!
          </Call>
          <Description className="center" color="#333" size="16px">
            {" "}
            Email us at <a href="mailto:team@makespp.com">
              team@makespp.com
            </a>{" "}
            <br />
          </Description>
        </Col>
      </Row>
    </Site>
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
