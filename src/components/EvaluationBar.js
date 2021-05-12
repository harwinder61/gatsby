import React from "react";
import Scrollspy from "react-scrollspy";
import { Navbar, Nav } from "react-bootstrap";
import Slider from "react-slick";
import styled from "styled-components";
import personIcon from "../images/person-icon-nav.png";
import logoIcon from "../images/logo.png";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const NavigationBar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const StyledCarousel = styled(Carousel)`
    display: flex;
  `;

  const StyledSlider = styled(Slider)``;

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

  const CarouselContainer = styled.div`
    max-width: 832px;
    margin: 0 auto;
    background: #ffffff;
    border-radius: 4px;
    @media (max-width: 530px) {
      min-width: 132px;
      padding: 0 10px;
    }
  `;

  const QuestionnaireWrapper = styled.div`
    /* width: 832px;
  margin: 0 auto; */
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  `;

  const QuestionWrapper = styled.div`
    display: flex;
    align-items: center;
    font-size: 43px;
    margin: 10px 60px;
    border: solid 4px #e6e6e6;
    border-radius: 4px;
    @media (max-width: 530px) {
      flex-direction: column;
      margin: 10px 10px;
    }
  `;

  const Question = styled.h3`
    font-size: 16px;
    line-height: 24px;
    padding: 10px;
  `;

  const BoxQuestion = styled.h3`
    padding-top: 20px;
    font-size: 20px;
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
    @media (max-width: 530px) {
      margin: 10px;
    }
  `;

  const NoButton = styled(Button)`
    background: #fbc735;
    color: #ffffff;
  `;

  const YesButton = styled(Button)`
    color: #fbc735;
  `;

  const BoxQuestionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 43px;
    border-radius: 4px;
    padding: 0 60px;
  `;

  const QuestionBox = styled.input`
    padding: 10px;
    height: 50px;
    border: solid 4px #e6e6e6;
    margin: auto;
    width: 100%;
  `;

  const AgeButton = styled.button`
    background: #fbc735;
    border: solid 2px #fbc735;
    width: 100px;
    height: 48px;
    font-size: 20px;
    border-radius: 50px;
    margin: 0 5px;
    font-weight: bold;
    color: #fff;
    text-align: center;
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
      <header className="evaluations">
        <div className="container mt-mobile">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-white">Fill out your questionnaire.</h1>
            </div>
            <div className="col-lg-8 align-self-baseline">
              <h2 className="text-white-75 mb-35  font-weight-light suhead-text mobile-subhead-font"></h2>
            </div>
          </div>
        </div>
        <CarouselContainer>
          <StyledCarousel ltr dots infinite>
            <QuestionnaireWrapper>
              <QuestionWrapper>
                <Question>
                  {" "}
                  Does your child follow directions that have 1-step? For
                  example, "Get your shoes" or " Give me the ball".
                </Question>
                <YesButton>Yes</YesButton>
                <NoButton>No</NoButton>
              </QuestionWrapper>
              <QuestionWrapper>
                <Question>
                  {" "}
                  Does your child follow directions that have 1-step? For
                  example, "Get your shoes" or " Give me the ball".
                </Question>
                <YesButton>Yes</YesButton>
                <NoButton>No</NoButton>
              </QuestionWrapper>
              <QuestionWrapper>
                <Question>
                  {" "}
                  Does your child follow directions that have 1-step? For
                  example, "Get your shoes" or " Give me the ball".
                </Question>
                <YesButton>Yes</YesButton>
                <NoButton>No</NoButton>
              </QuestionWrapper>
              <QuestionWrapper>
                <Question>
                  {" "}
                  Does your child follow directions that have 1-step? For
                  example, "Get your shoes" or " Give me the ball".
                </Question>
                <YesButton>Yes</YesButton>
                <NoButton>No</NoButton>
              </QuestionWrapper>
            </QuestionnaireWrapper>
            <QuestionnaireWrapper>
              <BoxQuestionWrapper>
                <BoxQuestion> How old is your child in months?</BoxQuestion>
                <QuestionBox></QuestionBox>
              </BoxQuestionWrapper>
              <BoxQuestionWrapper>
                <BoxQuestion>
                  {" "}
                  What languages are spoken in your home?
                </BoxQuestion>
                <QuestionBox></QuestionBox>
              </BoxQuestionWrapper>
              <BoxQuestionWrapper>
                <BoxQuestion>
                  {" "}
                  Has your child previously been evaluated?
                </BoxQuestion>
                <QuestionBox></QuestionBox>
              </BoxQuestionWrapper>
              <BoxQuestionWrapper>
                <BoxQuestion>Email</BoxQuestion>
                <QuestionBox></QuestionBox>
              </BoxQuestionWrapper>
            </QuestionnaireWrapper>
          </StyledCarousel>
        </CarouselContainer>
      </header>
      {/* <footer className="drk-blue-bg py-5 footer-bottom">
          <div className="container">
            <div className="small text-center text-white">Copyright &copy; 2020 - Toddler Talk</div>
          </div>
        </footer> */}
    </>
  );
};
export default NavigationBar;
