import React from "react";
import Scrollspy from "react-scrollspy";
import { Navbar, Nav } from "react-bootstrap";
import Scroller from "./scroller";
import styled from "styled-components";
import personIcon from "../images/person-icon-nav.png";
import logoIcon from "../images/logo.png";

const Header = () => {
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
      <header className="masthead">
        <div className="container mt-100 mt-mobile">
          <div className="row h-100 mobile-nm align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-white font-weight-bold desktop-only">
                The help you need now.
              </h1>
              <h1 className="text-white font-weight-bold mobile-only mobile-font">
                The help you need now.
              </h1>
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-35  font-weight-light suhead-text">
                Complete the questionaire. Get your lesson plan.
              </p>
              <a
                className="btn btn-primary btn-xl js-scroll-trigger start-button start-button-header"
                href="/quiz"
              >
                Start today
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
