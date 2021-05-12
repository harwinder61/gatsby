import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/ProgressLayout";
import styled from "styled-components";

const getImages = graphql`
  query {
    thumbsUpImage: file(relativePath: { eq: "thumbsup.png" }) {
      childImageSharp {
        fluid(maxWidth: 30) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    thumbsDownImage: file(relativePath: { eq: "thumbsDown.png" }) {
      childImageSharp {
        fluid(maxWidth: 30) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

// const StyledImage = styled(Image)`
//   margin: auto;
//   width: 30px;
// `;

const StyledRatingIcon = styled(Image)`
  width: 20px;
`;

const LessonWrapper = styled.div`
  background-image: linear-gradient(#f5f0e6, #fff);
`;

const Container = styled.div`
  background-color: #fff;
  width: 832px;
  margin: auto;
  padding: 0 60px;
`;

const ActiveTipTitle = styled.h1`
  padding: 60px 0 20px;

  font-size: 43px;
  text-align: center;
`;

const ActiveTipInstructions = styled.h3`
  font-size: 24px;
  line-height: 34px;
`;

const ActiveTipVideoBlock = styled.div`
  margin: 60px 0;
  width: 100%;
  background-color: grey;
  min-height: 399px;
`;
// const RatingSection = styled.div`
//   display: flex;
//   justify-content: center;
// `;
// const SectionTitle = styled.h1`
//   text-align:center;
// `;
// const RatingButtonsSection = styled.div`
//   margin-bottom:60px
// `;
// const RattingButton = styled.button`
//   text-align: center;
//   background: #fbc735;
//   width: 60px;
//   border: none;
//   border-radius: 50px;
//   font-size:20px;
//   height: 60px;
//   color: #ffffff;
//   margin: 10px;
// `;

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

const TrackProgressSection = styled.div``;

const SectionHeading = styled.p``;

const SectionContainer = styled.div`
  border: 4px solid #e6e6e6;
  padding: 40px 0;
  margin: 40px 0;
`;

const SectionReview = styled.div``;

const RatingIconWrapper = styled.div``;

const RatingDate = styled.div``;

const Progress = () => {
  const images = useStaticQuery(getImages);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  return (
    <Layout>
      <LessonWrapper>
        <Container>
          <ActiveTipTitle>Tip 1 - Talking with hands.</ActiveTipTitle>
          <ActiveTipInstructions>
            A large paragraph needs to be able to fit in this text block. velit
            prodesset et mei, wioso mandamus clsionu que mei ut. Est duis postea
            ad, eam w-weu liber errem invidunt. Ne vixane partem vivendum
            ullamcorper, ne mazim suscipit mea. Ius eu quotion aeterno suscipit
            me.uis postea ad, eam eu liber errem invidunt. Ne vixane partem
            vivendum ullamcorper, ne mazim suscipit mea. Ius eu quotion aeterno
            suscipit me.tea ad, eam Ne vixane partem viverno susc.terno suscipit
            me.tea ad, eam Ne vixane partem viverno susc.
          </ActiveTipInstructions>
          <ActiveTipVideoBlock></ActiveTipVideoBlock>
          {/* <SectionTitle>How did it go today?</SectionTitle>
          <RatingSection>
            <RatingButtonsSection>
              <RattingButton>
                <StyledImage fluid={images.thumbsUpImage.childImageSharp.fluid} />
              </RattingButton>
              <RattingButton>
                <StyledImage fluid={images.thumbsDownImage.childImageSharp.fluid} />
              </RattingButton>
            </RatingButtonsSection>
          </RatingSection> */}
          <TrackProgressSection>
            <SectionHeading>Track your practice here.</SectionHeading>
            <SectionContainer>
              <SectionReview>
                <RatingIconWrapper>
                  <StyledRatingIcon
                    fluid={images.thumbsUpImage.childImageSharp.fluid}
                  />
                </RatingIconWrapper>
                <RatingDate></RatingDate>
              </SectionReview>
            </SectionContainer>
          </TrackProgressSection>
          <SectionNavWrapper>
            <PrimaryButton>Next skill</PrimaryButton>
          </SectionNavWrapper>
          <SectionNavWrapper>
            <FlatButton>See all skills.</FlatButton>
          </SectionNavWrapper>
        </Container>
      </LessonWrapper>
    </Layout>
  );
};

export default Progress;
