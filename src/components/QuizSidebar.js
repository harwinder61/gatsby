import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const Sidebar = styled.div`
  position: fixed;
  top: 114px;
  left: 0;
  bottom: 0;
  width: 350px;
  background: #fff;
  border-right: 1px solid #cecece;
  z-index: 1;
  overflow-y: auto;
  @media (max-width: 1199px) {
    display: none;
  }
`;

const Header = styled.h3`
  font-size: 18px;
  text-align: center;
  margin-bottom: 0;
`;

const Step = styled.div`
  font-size: 16px;
  display: flex;
  align-items: baseline;
  ${props =>
    props.isActive &&
    `
      ${Arrow}{
        background-color: #fbc736;
        color: #fff;
        &::after {
          background: linear-gradient(-45deg, #fbc736 50%, transparent 50%);
        }
      }

      ${Circle}{
        background: radial-gradient(
          ellipse at center,
          rgba(255, 113, 12, 0) 50%,
          #fbc736 51.5%
        );
      }

      ${LineTop}{
        background: #fbc736;
      }
    `}
`;

const Arrow = styled.div`
  padding: 12px 5px 11px 20px;
  background-color: #fff;
  border-radius: 5px 0 0 5px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    width: 37px;
    height: 37px;
    border-radius: 8em 2em 2em 2em;
    margin: -7px -14px;
    transform: rotate(-45deg);
    background: linear-gradient(-45deg, #fff 50%, transparent 50%);
  }
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 1px solid #cecece;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 113, 12, 0) 50%,
    #fff 51.5%
  );
`;

const CircleContainer = styled.div`
  position: relative;
  margin-right: 20px;
  margin-top: 48px;
`;

const LineTop = styled.div`
  border-left: 1px solid #cecece;
  border-right: 1px solid #cecece;
  background: #fff;
  width: 10px;
  height: 51px;
  position: absolute;
  top: -49px;
  left: calc(50% - 5px);
`;

const Steps = styled.div`
  padding: 50px 30px 30px 30px;
  border-bottom: 1px solid #cecece;
`;

const Preview = styled.div`
  padding: 30px;
`;

const QuizSidebar = ({ sidebarImg, currentStep }) => {
  const steps = [
    { label: "Personal Info", order: 1 },
    { label: "Step 2", order: 2 },
    { label: "Step 3", order: 3 },
    { label: "Step 4", order: 4 },
    { label: "Step 5", order: 5 },
  ];
  return (
    <Sidebar>
      <Steps>
        <Header>Registration Progress</Header>
        {steps.map(step => (
          <Step isActive={step.order <= currentStep} key={step.order}>
            <CircleContainer>
              {step.order !== 1 && <LineTop />}
              <Circle>{step.order}</Circle>
            </CircleContainer>
            <Arrow>{step.label}</Arrow>
          </Step>
        ))}
      </Steps>
      <Preview>
        <p>Press below to check the preview of your information</p>
        <a href="#">
          <Img fluid={sidebarImg} />
        </a>
      </Preview>
    </Sidebar>
  );
};

QuizSidebar.propTypes = {
  currentStep: PropTypes.number,
  sidebarImg: PropTypes.object,
};

export default QuizSidebar;
