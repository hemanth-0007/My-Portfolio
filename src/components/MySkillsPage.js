import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTypescript } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { PiFileSqlFill } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

import { SiJupyter } from "react-icons/si";
import { SiGooglecolab } from "react-icons/si";

import { SiNumpy } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { FaPython } from "react-icons/fa";

import "./styles.css";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const Icon = styled.div`
    margin-right: 1rem;
    size: 2rem;
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <Develope width={40} height={40} /> Full-Stack  
          </Title>
          <Description>
            <strong>SKILLS</strong>
            <ul className="list-container">
              <li>
                <p>Frontend</p>
                <IoLogoJavascript className="icon"/>
                <FaReact className="icon"/>
                <RiNextjsFill className="icon"/>
                <SiTypescript className="icon"/>
              </li>
              <li>
                <p>Backend</p>
                <FaNodeJs className="icon"/>
                <SiSpringboot className="icon"/>
              </li>
              <li>
                <p>Databases</p>
                <BiLogoMongodb className="icon"/>
                <PiFileSqlFill className="icon"/>
              </li>
              <li>
              </li>
            </ul>
          </Description>
          <Description>
          <strong>Tools</strong>
           <p>
                <VscVscode className="icon"/>
                <FaGithub className="icon"/>
                <SiPostman className="icon"/>
           </p>
          </Description>
        </Main>
        <Main>
          <Title>
            <Develope width={40} height={40} /> Machine Learning 
          </Title>
           
          <Description>
            <strong>Skills</strong>
            <ul className="list-container">
                <li>
                    <p>Languages</p>
                    <FaPython className="icon"/>
                </li>
                <li>
                    <p>Libraries</p>
                    <SiTensorflow className="icon"/>
                    <SiNumpy className="icon"/>
                </li>
            </ul>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>
                <SiJupyter className="icon"/>
                <SiGooglecolab className="icon"/>
            </p>
          </Description>
        </Main>

        <BigTitle text="SKILLS" top="80%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
