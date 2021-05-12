import React from "react";
import Scrollspy from "react-scrollspy";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import personIcon from "../images/person-icon-nav.png";
import logoIcon from "../images/logo.png";
import arrowYellow from "../images/arrow-yellow.png";
import arrowGrey from "../images/arrow-grey.png";
import lockOpen from "../images/open-lock.png";
import lockClosed from "../images/closed-lock.png";
import "@brainhubeu/react-carousel/lib/style.css";

const NavigationBar = () => {
  const Logo = styled.img`
    height: 33px;
    margin: auto;
  `;

  const MobileLogo = styled.img`
    height: 30px;
  `;

  const Icon = styled.img`
    height: 15px;
  `;

  const Img = styled.img``;

  const ProgessBody = styled.div`
    max-width: 832px;
    margin: auto;
    background: #fff;
    @media (min-width: 530px) {
      border-radius: 5px;
    }
  `;
  const SectionWrapper = styled.div`
    margin: 0 60px;
    padding-top: 10px;
    @media (max-width: 530px) {
      margin: 0 20px;
    }
  `;

  const SectionTitle = styled.span`
    font-size: 30px;
    font-weight: bold;
    padding-top: 10px;
  `;

  const ProgressReport = styled.div``;

  const Subheading = styled.div`
    text-align: right;
    text-transform: uppercase;
    font-weight: bold;
    margin-bottom: 20px;
    width: 100%;
  `;

  const ProgressChart = styled.div``;

  const StatusButton = styled.button`
    background: #ffffff;
    border: 2px solid #e6e6e6;
    width: 50px;
    height: 50px;
    border-radius: 50px;
  `;

  const SkillWrapper = styled.div`
    justify-content: space-around;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  `;

  const SkillDetials = styled.div`
    flex-grow: 1;
    margin: 0 10px;
    border: 2px solid #e6e6e6;
    border-radius: 2px;
    color: #000;
    display: flex;
    @media (max-width: 530px) {
      flex-direction: column;
    }
  `;

  const SkillTitle = styled.div`
    padding: 10px;
    border-right: 2px solid #e6e6e6;
    flex-grow: 1;
    @media (max-width: 530px) {
      border-color: #fff;
      border: none;
    }
  `;

  const CompletionDate = styled.div`
    font-weight: bold;
    padding: 10px;
    color: #fbc735;
    text-align: center;
  `;

  const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
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
                  <Nav.Link className={"js-scroll-trigger "} href="/quiz">
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
      <header className="lessons-progress">
        <div className="container mt-mobile">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-10 align-self-end">
              <h1 className="text-white mb-35">
                Complete the Toddler Talk <br /> skill inventory
              </h1>
            </div>
          </div>
        </div>
        <ProgessBody>
          <SectionWrapper>
            <TitleWrapper>
              <SectionTitle>Talking</SectionTitle>
              <Icon src={arrowGrey} height="25" alt="Grey Arrow" />
            </TitleWrapper>
            <ProgressReport>
              <Subheading>Date Mastered</Subheading>
              <ProgressChart>
                <SkillWrapper>
                  <StatusButton>
                    <Img src={lockClosed} height="30" alt="Open Lock" />
                  </StatusButton>
                  <SkillDetials>
                    <SkillTitle>Title of skill goes here...</SkillTitle>
                    <CompletionDate>10/12/2020</CompletionDate>
                  </SkillDetials>
                </SkillWrapper>
                <SkillWrapper>
                  <StatusButton>
                    <Img src={lockClosed} height="30" alt="Open Lock" />
                  </StatusButton>
                  <SkillDetials>
                    <SkillTitle>Title of skill goes here...</SkillTitle>
                    <CompletionDate>10/12/2020</CompletionDate>
                  </SkillDetials>
                </SkillWrapper>
                <SkillWrapper>
                  <StatusButton>
                    <Img src={lockClosed} height="30" alt="Open Lock" />
                  </StatusButton>
                  <SkillDetials>
                    <SkillTitle>Title of skill goes here...</SkillTitle>
                    <CompletionDate>10/12/2020</CompletionDate>
                  </SkillDetials>
                </SkillWrapper>
              </ProgressChart>
            </ProgressReport>
          </SectionWrapper>

          <SectionWrapper>
            <TitleWrapper>
              <SectionTitle>Spoken language</SectionTitle>
              <Icon src={arrowGrey} height="25" alt="Grey Arrow" />
            </TitleWrapper>
            <ProgressReport>
              <Subheading>Date Mastered</Subheading>
              <ProgressChart>
                <SkillWrapper>
                  <StatusButton>
                    <Img src={lockClosed} height="30" alt="Open Lock" />
                  </StatusButton>
                  <SkillDetials>
                    <SkillTitle>Title of skill goes here...</SkillTitle>
                    <CompletionDate>10/12/2020</CompletionDate>
                  </SkillDetials>
                </SkillWrapper>
                <SkillWrapper>
                  <StatusButton>
                    <Img src={lockClosed} height="30" alt="Open Lock" />
                  </StatusButton>
                  <SkillDetials>
                    <SkillTitle>Title of skill goes here...</SkillTitle>
                    <CompletionDate>10/12/2020</CompletionDate>
                  </SkillDetials>
                </SkillWrapper>
                <SkillWrapper>
                  <StatusButton>
                    <Img src={lockClosed} height="30" alt="Open Lock" />
                  </StatusButton>
                  <SkillDetials>
                    <SkillTitle>Title of skill goes here...</SkillTitle>
                    <CompletionDate>10/12/2020</CompletionDate>
                  </SkillDetials>
                </SkillWrapper>
              </ProgressChart>
            </ProgressReport>
          </SectionWrapper>

          <SectionWrapper>
            <TitleWrapper>
              <SectionTitle>Speech sounds</SectionTitle>
              <Icon src={arrowGrey} height="25" alt="Grey Arrow" />
            </TitleWrapper>
            <ProgressReport>
              <Subheading>Date Mastered</Subheading>
              <ProgressChart>
                <SkillWrapper>
                  <StatusButton>
                    <Img src={lockClosed} height="30" alt="Open Lock" />
                  </StatusButton>
                  <SkillDetials>
                    <SkillTitle>Title of skill goes here...</SkillTitle>
                    <CompletionDate>10/12/2020</CompletionDate>
                  </SkillDetials>
                </SkillWrapper>
                <SkillWrapper>
                  <StatusButton>
                    <Img src={lockClosed} height="30" alt="Open Lock" />
                  </StatusButton>
                  <SkillDetials>
                    <SkillTitle>Title of skill goes here...</SkillTitle>
                    <CompletionDate>10/12/2020</CompletionDate>
                  </SkillDetials>
                </SkillWrapper>
                <SkillWrapper>
                  <StatusButton>
                    <Img src={lockClosed} height="30" alt="Open Lock" />
                  </StatusButton>
                  <SkillDetials>
                    <SkillTitle>Title of skill goes here...</SkillTitle>
                    <CompletionDate>10/12/2020</CompletionDate>
                  </SkillDetials>
                </SkillWrapper>
              </ProgressChart>
            </ProgressReport>
          </SectionWrapper>

          <SectionWrapper>
            <TitleWrapper>
              <SectionTitle>Behavior</SectionTitle>
              <Icon src={arrowGrey} height="25" alt="Grey Arrow" />
            </TitleWrapper>
            <ProgressReport>
              <Subheading>Date Mastered</Subheading>
              <ProgressChart>
                <SkillWrapper>
                  <StatusButton>
                    <Img src={lockClosed} height="30" alt="Open Lock" />
                  </StatusButton>
                  <SkillDetials>
                    <SkillTitle>Title of skill goes here...</SkillTitle>
                    <CompletionDate>10/12/2020</CompletionDate>
                  </SkillDetials>
                </SkillWrapper>
                <SkillWrapper>
                  <StatusButton>
                    <Img src={lockClosed} height="30" alt="Open Lock" />
                  </StatusButton>
                  <SkillDetials>
                    <SkillTitle>Title of skill goes here...</SkillTitle>
                    <CompletionDate>10/12/2020</CompletionDate>
                  </SkillDetials>
                </SkillWrapper>
                <SkillWrapper>
                  <StatusButton>
                    <Img src={lockClosed} height="30" alt="Open Lock" />
                  </StatusButton>
                  <SkillDetials>
                    <SkillTitle>Title of skill goes here...</SkillTitle>
                    <CompletionDate>10/12/2020</CompletionDate>
                  </SkillDetials>
                </SkillWrapper>
              </ProgressChart>
            </ProgressReport>
          </SectionWrapper>

          <SectionWrapper>
            <TitleWrapper>
              <SectionTitle>Hearing</SectionTitle>
              <Icon src={arrowGrey} height="25" alt="Grey Arrow" />
            </TitleWrapper>
            <ProgressReport>
              <Subheading>Date Mastered</Subheading>
              <ProgressChart>
                <SkillWrapper>
                  <StatusButton>
                    <Img src={lockClosed} height="30" alt="Open Lock" />
                  </StatusButton>
                  <SkillDetials>
                    <SkillTitle>Title of skill goes here...</SkillTitle>
                    <CompletionDate>10/12/2020</CompletionDate>
                  </SkillDetials>
                </SkillWrapper>
                <SkillWrapper>
                  <StatusButton>
                    <Img src={lockClosed} height="30" alt="Open Lock" />
                  </StatusButton>
                  <SkillDetials>
                    <SkillTitle>Title of skill goes here...</SkillTitle>
                    <CompletionDate>10/12/2020</CompletionDate>
                  </SkillDetials>
                </SkillWrapper>
                <SkillWrapper>
                  <StatusButton>
                    <Img src={lockClosed} height="30" alt="Open Lock" />
                  </StatusButton>
                  <SkillDetials>
                    <SkillTitle>Title of skill goes here...</SkillTitle>
                    <CompletionDate>10/12/2020</CompletionDate>
                  </SkillDetials>
                </SkillWrapper>
              </ProgressChart>
            </ProgressReport>
          </SectionWrapper>
        </ProgessBody>
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
