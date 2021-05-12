import React from "react";
import Scrollspy from "react-scrollspy";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import personIcon from "../images/person-icon-nav.png";
import logoIcon from "../images/logo.png";

const NavigationBar = () => {
  const Logo = styled.img`
    height: 33px;
    margin: auto;
  `;

  const MobileLogo = styled.img`
    height: 30px;
  `;

  const Icon = styled.img`
    height: 25px;
    margin-right: 16px;
  `;

  const IconWrapper = styled.div`
    height: 25px;
    margin-right: 16px;
  `;

  const LessonsWrapper = styled.div`
    max-width: 832px;
    margin: auto;
    background: #ffffff;
    height: 100%;
    border-radius: 5px;
  `;

  const LessonBody = styled.div`
    font-size: 43px;
    margin: 0 60px;
    @media (max-width: 530px) {
      margin: 0 10px;
    }
  `;

  const LessonTitle = styled.div`
    font-size: 30px;
    padding-top: 20px;
    font-weight: bold;
    text-align: center;
  `;

  const LessonDescription = styled.h3`
    font-size: 24px;
    line-height: 34px;
  `;

  const ProgressBarSection = styled.div`
    display: flex;
    flex-direction: space-around;
    margin: 20px 0;
  `;

  const ProgressLine = styled.hr`
    height: 2px;
    border-width: 0;
    margin: 0 10px;
    color: #e7e7e7;
    background-color: #e7e7e7;
  `;

  const SectionWrapper = styled.div`
    flex-basis: 33%;
    text-align: center;
  `;

  const SectionCopy = styled.div`
    font-size: 20px;
    @media (max-width: 530px) {
      font-size: 16px;
    }
  `;

  const VerticalLine = styled.div`
    border-left: 2px solid #000;
    height: 40px;
    margin-top: 10px;
  `;

  const VerticalLineWrapper = styled.div`
    display: flex;
    justify-content: center;
  `;
  const TipNavigator = styled.div`
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
  `;

  const TipButton = styled.button`
    background: #fbc735;
    width: 160px;
    border: none;
    border-radius: 50px;
    font-size: 20px;
    height: 50px;
    color: #ffffff;
  `;

  const QuestionnaireWrapper = styled.div`
    margin: auto;
    padding-top: 20px;
  `;

  const QuestionWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 43px;
    margin: 10px 0;
    border: solid 2px #e6e6e6;
    border-radius: 4px;
  `;

  const Question = styled.h3`
    font-size: 16px;
    padding: 10px;
    margin: 0;
  `;

  const BoxQuestion = styled.h3`
    padding-top: 20px;
    font-size: 24px;
    letter-spacing: 0px;
    line-height: 35px;
    color: #000000;
    font-weight: 400;
    font-family: "Roboto";
  `;

  const Button = styled.button`
    background: #ffffff;
    border: solid 2px #fbc735;
    width: 160px;
    height: 48px;
    font-size: 20px;
    border-radius: 50px;
    margin-right: 20px;
  `;

  const BoxQuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 43px;
    border-radius: 4px;
    padding: 0 60px;
  `;

  const QuestionBox = styled.div`
    padding: 10px;
    min-height: 70px;
    border: solid 4px #e6e6e6;
    margin: auto;
    width: 100%;
  `;

  return (
    <>
      <Navbar
        className="navbar navbar-expand-lg navbar-light fixed-top py-3 navbar-scrolled"
        id="mainNav"
        expand="lg"
        collapseOnSelect={true}
      >
        <div className="container top-nav">
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="navbar-nav ml-auto my-2 my-lg-0 nav-third text-uppercase">
              <Scrollspy
                className="navbar-nav"
                items={["about", "services", "portfolio", "contact"]}
                currentClassName="active"
                rootEl={"#mainNav"}
                offset={-75}
              >
                <li className="nav-item styled-text">
                  <Nav.Link className={"js-scroll-trigger"} href="/">
                    Home
                  </Nav.Link>
                </li>
                <li className="nav-item styled-text">
                  <Nav.Link className={"js-scroll-trigger"} href="/about">
                    About
                  </Nav.Link>
                </li>
              </Scrollspy>
            </Nav>
          </Navbar.Collapse>
          <a className="nav-center centered-logo desktop-only">
            <div className="nav-logo desktop-only">
              <Logo
                className="desktop-only"
                src={logoIcon}
                height="33"
                alt="Company Logo"
              />
              {/* <Image fluid={data.fluidLogo.childImageSharp.fluid}/> */}
            </div>
          </a>
          <a className="nav-center centered-logo-mobile mobile-only">
            <div className="nav-logo-mobile allow-md-screen">
              <MobileLogo
                className="mobile-only"
                height="30"
                src={logoIcon}
                alt="Company Logo"
              />
              {/* <Image fluid={data.fluidLogo.childImageSharp.fluid} fadeIn={false} loading='eager'/> */}
            </div>
          </a>
          <Navbar.Collapse id="navbarResponsive">
            <Nav className="nav-third-right">
              <Scrollspy
                className="navbar-nav"
                items={["about", "services", "portfolio", "contact"]}
                currentClassName="active"
                rootEl={"#mainNav"}
                offset={-75}
              >
                <li className="align-nav-item styled-text sign-in__padding desktop-only skip-md-screen">
                  <Nav.Link className={"js-scroll-trigger "} href="/signin">
                    SIGN IN
                  </Nav.Link>
                </li>
                <li className="nav-item align-nav-item nav-icon-pr-5 icon-padding">
                  <div className="nav-person-logo desktop-only skip-md-screen">
                    <Icon
                      className="desktop-only"
                      src={personIcon}
                      height="25"
                      alt="person icon"
                    />
                  </div>
                </li>
                <li className="nav-item desktop-only skip-md-screen">
                  <a
                    className="btn btn-primary btn-xl js-scroll-trigger start-button-header"
                    href="/quiz"
                  >
                    Start today
                  </a>
                </li>
              </Scrollspy>
            </Nav>
          </Navbar.Collapse>
          {/* <a className="navbar-brand js-scroll-trigger nav-third-right" href="#page-top" onClick={Scroller.handleAnchorScroll}>Toddler Talk</a> */}
        </div>
      </Navbar>
      <header className="lessons">
        <div className="container mt-mobile">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-white">Evaluation findings.</h1>
            </div>
            <div className="col-lg-8 align-self-baseline">
              <h4 className="text-white-75 mb-35  font-weight-light suhead-text">
                Based on your progress this is what we found.
              </h4>
            </div>
          </div>
        </div>
        <LessonsWrapper>
          <LessonBody>
            <LessonTitle>Your progress...</LessonTitle>
            <ProgressBarSection>
              <SectionWrapper>
                <ProgressLine />
                <VerticalLineWrapper>
                  <VerticalLine />
                </VerticalLineWrapper>
                <SectionCopy>Questionaire</SectionCopy>
              </SectionWrapper>
              <SectionWrapper>
                <ProgressLine />
                <VerticalLineWrapper>
                  <VerticalLine />
                </VerticalLineWrapper>
                <SectionCopy>Our Findings</SectionCopy>
              </SectionWrapper>
              <SectionWrapper>
                <ProgressLine />
                <VerticalLineWrapper>
                  <VerticalLine />
                </VerticalLineWrapper>
                <SectionCopy>Action Plan</SectionCopy>
              </SectionWrapper>
            </ProgressBarSection>
            <LessonTitle>Our findings.</LessonTitle>
            <QuestionnaireWrapper>
              <QuestionWrapper>
                <Question> Question goes here...</Question>
              </QuestionWrapper>
              <QuestionWrapper>
                <Question> Question goes here...</Question>
              </QuestionWrapper>
              <QuestionWrapper>
                <Question> Question goes here...</Question>
              </QuestionWrapper>
              <QuestionWrapper>
                <Question> Question goes here...</Question>
              </QuestionWrapper>
            </QuestionnaireWrapper>
            <LessonTitle>Next Skill findings</LessonTitle>
            <QuestionnaireWrapper>
              <QuestionWrapper>
                <Question> Question goes here...</Question>
              </QuestionWrapper>
              <QuestionWrapper>
                <Question> Question goes here...</Question>
              </QuestionWrapper>
              <QuestionWrapper>
                <Question> Question goes here...</Question>
              </QuestionWrapper>
              <QuestionWrapper>
                <Question> Question goes here...</Question>
              </QuestionWrapper>
            </QuestionnaireWrapper>
          </LessonBody>
        </LessonsWrapper>
      </header>
    </>
  );
};
export default NavigationBar;
