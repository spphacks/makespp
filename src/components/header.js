import { Link } from "gatsby";
import React from "react";
import Particles from "react-particles-js";
import styled from "styled-components";
import Iframe from "react-iframe";

const Background = styled.header`
  width: 100vw;
  height: 100vh;
  margin: 0;
  color: #fff;
  padding: 0;
  background: linear-gradient(180deg, #141e30, #20354c, #3d6591);
`;

const LogoContainer = styled.div`
  margin: 0;
  position: absolute;
  padding: 0;
  margin: 0;
`;
const Logo = styled.img`
  padding-top: 30px;
  height: 75px;
  padding-left: 30px;
  filter: drop-shadow(0px 0px 5px #ca043f);
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;
const Tagline = styled.h1`
  position: absolute;
  top: 125px;
  max-width: 500px;
  font-size: 3.5rem;
  padding-left: 5%;
  color: #fff;
  font-family: "Lato", sans-serif;

  @media only screen and (max-width: 1024px) {
    font-size: 48px;
    top: 100px;
  }
`;

const Date = styled.h1`
  position: absolute;
  bottom: 75px;
  font-family: "Lato", sans-serif;
  border-bottom: 5px solid #ca043f;
  margin-left: 5%;
`;

const Register = styled.h3`
  position: absolute;
  bottom: 50px;
  font-family: "Lato", sans-serif;
  margin-left: 5%;
`;

const Title = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 64px;
  position: absolute;
  left: 50%;
  top: 30px;
  padding: 0;
  letter-spacing: -3px;
  margin: 0;
  transition: all 300ms ease;
  transform: translateX(-50%);
  &:hover {
    opacity: 0.8;
  }
  @media only screen and (max-width: 1024px) {
    font-size: 56px;
    top: 0;
  }
`;

// temp solution for video --  future use youtube component autoplay
const Header = ({ siteTitle }) => (
  <Background>
    <div class="video">
      <Iframe
        url="https://www.youtube.com/embed/xVsXm120dmQ"
        width="560"
        height="315"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        display="initial"
        position="relative"
        allowFullScreen
      />
    </div>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`
      }}
    >
      {" "}
      <Title className="title">
        Make<span className="red">SPP</span> <span class="two">2.0</span>
      </Title>
    </Link>
    <LogoContainer>
      <Logo src="/logo.png" />
    </LogoContainer>
    <Tagline> New Jersey's Premier High School Hackathon </Tagline>
    <Date className="font">April 6th, 2019 </Date>
    <Register> Applications open 02/09/19 </Register>
    <Particles
      height="100vh"
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 0.3
            }
          },
          line_linked: {
            enable: false
          },
          move: {
            random: true,
            speed: 1,
            direction: "top",
            out_mode: "out"
          }
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "bubble"
            },
            onclick: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0
            },
            repulse: {
              distance: 25,
              duration: 1
            }
          }
        }
      }}
    />
  </Background>
);

export default Header;
