import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/LessonsLayout";
import styled from "styled-components";

const NavLessonTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding-top: 30px;
`;

const NavLessonDescription = styled.h3`
  font-size: 20px;
  line-height: 34px;
`;

const NavBreakLine = styled.hr`
  height: 3px;
  border-width: 0;
  color: #e7e7e7;
  background-color: #e7e7e7;
`;

const NavTipNavigator = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const NavTipButton = styled.button`
  background: #fbc735;
  /* width: 160px; */
  border: none;
  border-radius: 50px;
  font-size: 20px;
  height: 50px;
  color: #ffffff;
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  @media (max-width: 530px) {
    margin: 0 5px;
  }
`;

const LessonWrapper = styled.div`
  margin: auto;
`;

const Container = styled.div`
  background-color: #fff;
  max-width: 832px;
  margin: auto;
  padding: 0 60px;
  border-radius: 5px;
  /* @media (max-width: 530px) {
    width: 80px;
    font-size: 17px;
  } */
`;

const ActiveTipTitle = styled.h1`
  padding: 20px 0 10px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const ActiveTipInstructions = styled.h3`
  font-size: 20px;
  line-height: 34px;
`;

const ActiveTipVideoBlock = styled.div`
  margin: 60px 0;
  width: 100%;
  background-color: grey;
  min-height: 399px;
`;

const SectionTitle = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const SectionNavWrapper = styled.div`
  display: flex;
`;

const PrimaryButton = styled.button`
  margin: auto;
  background: #fbc735;
  width: 160px;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  height: 50px;
  color: #ffffff;
`;

const FlatButton = styled.button`
  margin: auto;
  background: #fff;
  width: 160px;
  border: none;
  border-radius: 50px;
  font-size: 20px;
  height: 50px;
  color: #000;
`;

const AnswerWrapper = styled.div``;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li``;

const Label = styled.label`
  padding-left: 10px;
  font-size: 18px;
  font-weight: bold;
`;

const Input = styled.input``;

const OptionsText = styled.p`
  color: #000 !important;
`;

const Lessons = () => {
  return (
    <header className="lessons">
      <div className="container mt-mobile">
        <div className="row h-100  align-items-center justify-content-center text-center">
          <div className="col-lg-10 align-self-end">
            <h1 className="text-white">Nick's communication plan.</h1>
          </div>
          <div className="col-lg-8 align-self-baseline">
            <h2 className="text-white-75 mb-35  font-weight-light suhead-text">
              Follow our tips below to master each skill.
            </h2>
          </div>
        </div>
      </div>
      <Layout>
        <LessonWrapper>
          <Container>
            <NavLessonTitle>Say 10 words.</NavLessonTitle>
            <NavBreakLine />
            <NavLessonDescription>
              3 sentance paragraph goes here. 10 pt helvetica nueu si woniso
              wordswii velit wi prodesset et mei, mandamus clsionuworiplorve
              quepo mei utooi. ndamus clsionu que mei utooi. Est duis postea ad,
              eam eu liber errem invidunt. aeterno
            </NavLessonDescription>
            <NavTipNavigator>
              <NavTipButton>Tip 1</NavTipButton>
              <NavTipButton>Tip 2</NavTipButton>
              <NavTipButton>Tip 3</NavTipButton>
            </NavTipNavigator>
            <ActiveTipTitle>Tip 1 - Talking with hands.</ActiveTipTitle>
            <ActiveTipInstructions>
              A large paragraph needs to be able to fit in this text block.
              velit prodesset et mei, wioso mandamus clsionu que mei ut. Est
              duis postea ad, eam w-weu liber errem invidunt. Ne vixane partem
              vivendum ullamcorper, ne mazim suscipit mea. Ius eu quotion
              aeterno suscipit me.uis postea ad, eam eu liber errem invidunt. Ne
              vixane partem vivendum ullamcorper, ne mazim suscipit mea. Ius eu
              quotion aeterno suscipit me.tea ad, eam Ne vixane partem viverno
              susc.terno suscipit me.tea ad, eam Ne vixane partem viverno susc.
            </ActiveTipInstructions>
            <ActiveTipVideoBlock></ActiveTipVideoBlock>
            <SectionTitle>How did it go today?</SectionTitle>
            <OptionsText>Select an option below:</OptionsText>
            <AnswerWrapper>
              <Ul>
                <Li>
                  <Input type="radio" value="Answer 1" />
                  <Label>Answer 1 - Lesson - PracticeLevels[0]</Label>
                </Li>

                <Li>
                  <Input type="radio" value="Answer 2" />
                  <Label>Answer 2 - Lesson - PracticeLevels[1]</Label>
                </Li>

                <Li>
                  <Input type="radio" value="Answer 3" />
                  <Label>Answer 3 - Lesson - PracticeLevels[2]</Label>
                </Li>

                <Li>
                  <Input type="radio" value="Answer 4" />
                  <Label>Answer 4 - Lesson - PracticeLevels[3]</Label>
                </Li>
              </Ul>
            </AnswerWrapper>
            <SectionNavWrapper>
              <PrimaryButton>Next skill</PrimaryButton>
            </SectionNavWrapper>
            <SectionNavWrapper>
              <FlatButton>See all skills.</FlatButton>
            </SectionNavWrapper>
            {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
          </Container>
        </LessonWrapper>
      </Layout>
    </header>
  );
};

export default Lessons;
