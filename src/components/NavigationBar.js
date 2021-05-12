import React from "react";
import Scrollspy from "react-scrollspy";
import { Navbar, Nav } from "react-bootstrap";
import Scroller from "./scroller";
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

  // const LessonsWrapper = styled.div`
  //   max-width: 832px;
  //   margin:auto;
  //   background: #ffffff;
  //   height: 100%;
  //   border-radius: 4px 4px 0 0;
  // `;

  // const LessonBody = styled.div`
  //   font-size: 43px;
  //   margin: 0 60px;

  // `;

  // const LessonTitle = styled.span`
  //   font-size: 30px;
  //   font-weight: bold;
  //   padding-top: 30px;
  //   font-weight: normal;
  // `;

  // const LessonDescription = styled.h3`
  //     font-size: 20px;
  //     line-height: 34px;
  // `;

  // const BreakLine = styled.hr`
  //   height:3px;
  //   border-width:0;
  //   color:#e7e7e7;
  //   background-color:#e7e7e7;
  // `;

  // const TipNavigator = styled.div`
  //   margin-top: 20px;
  //   display: flex;
  //   justify-content: space-between;
  // `;

  // const TipButton = styled.button`
  //   background: #fbc735;
  //   /* width: 160px; */
  //   border: none;
  //   border-radius: 50px;
  //   font-size:20px;
  //   height: 50px;
  //   color: #ffffff;
  //   display: flex;
  //     flex-grow: 1;
  //     align-items: center;
  //     justify-content: center;
  //     margin: 0 20px;
  //   @media (max-width: 530px) {
  //     margin: 0 5px;
  //   }
  // `;

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
      {/* <header className="lessons">
        <div className="container mt-mobile">
          <div className="row h-100  align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
            <h1 className="text-white">Nick's communication plan.</h1>
            </div>
            <div className="col-lg-8 align-self-baseline">
              <h2 className="text-white-75 mb-35  font-weight-light suhead-text" >Follow our tips below to master each skill.</h2>
            </div>
          </div>
        </div>
        <LessonsWrapper>
        <LessonBody>
          <LessonTitle>Say 10 words.</LessonTitle>
          <BreakLine />
          <LessonDescription>
            3 sentance paragraph goes here. 10 pt helvetica nueu  si woniso wordswii velit wi prodesset et mei, mandamus clsionuworiplorve quepo mei utooi. ndamus clsionu que mei utooi.
            Est duis postea ad, eam eu liber errem invidunt.  aeterno  
          </LessonDescription>
          <TipNavigator>
            <TipButton>Tip 1</TipButton>
            <TipButton>Tip 2</TipButton>
            <TipButton>Tip 3</TipButton>
          </TipNavigator>
        </LessonBody>
        </LessonsWrapper>
      </header> */}
    </>
  );
};
export default NavigationBar;
