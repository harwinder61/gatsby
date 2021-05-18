import React, {useState} from "react";
import { graphql, useStaticQuery } from "gatsby";
// import Image from "gatsby-image";
// import Carousel from "@brainhubeu/react-carousel";
// import "@brainhubeu/react-carousel/lib/style.css";

// import Layout from "../components/layout";
// import SEO from "../components/seo";
// import Scroller from "../components/scroller";
import styled from "styled-components";
import Layout from "../components/layout"

const getImages = graphql`
  query {
    videoImage: file(relativePath: { eq: "TT_HOMEPAGE_VIDEOIMAGE.png" }) {
      childImageSharp {
        fluid(maxWidth: 588) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    testimonialOne: file(
      relativePath: { eq: "TT_HOMEPAGE_TESTIMONIAL_IMAGE.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 625) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    testimonialTwo: file(relativePath: { eq: "testimonial-2.png" }) {
      childImageSharp {
        fluid(maxWidth: 625) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    babyPhoto: file(relativePath: { eq: "TT_HOMEPAGE_WEREINTHIS_IMAGE.png" }) {
      childImageSharp {
        fluid(maxWidth: 625) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    circleIconFluid: file(relativePath: { eq: "TT_HOMEPAGE_ICON_01.png" }) {
      childImageSharp {
        fluid(maxWidth: 63) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    personIconFluid: file(relativePath: { eq: "person-icon.png" }) {
      childImageSharp {
        fluid(maxWidth: 63) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    houseIconFluid: file(relativePath: { eq: "TT_HOMEPAGE_ICON_03.png" }) {
      childImageSharp {
        fluid(maxWidth: 63) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;

const HR = styled.hr`
  margin-bottom: 0px !important;
`;

// const VideoCoverImage = styled.img`
//   width: 588px;
//   height: 400px;
//   background-color: /fbc736;
//   padding-top: 15px;
//   margin: auto;
// `;

const IndexPage = () => {
  const data = useStaticQuery(getImages);
  const [accordionObject, setAccordionObject] = useState({
    name: "expression",
    value: true
  })
  
console.log("data", data, HR)
  return (
    <Layout>
      <div id="content" className="site-content">
        <div className="content-inner">
          <div className="">
            <div className="row content-row">
              <div id="primary" className="content-area col-12">
                <main id="main" className="site-main">
                  <article
                    id="post-45"
                    className="post-45 page type-page status-publish hentry"
                  >
                    <div className="entry-content clearfix">
                      <div
                        data-elementor-type="wp-page"
                        data-elementor-id="45"
                        className="elementor elementor-45"
                        data-elementor-settings="[]"
                      >
                        <div className="elementor-section-wrap">
                          <div
                            className="elementor-section elementor-top-section elementor-element elementor-element-06481c4 elementor-section-stretched elementor-section-full_width elementor-section-height-min-height elementor-section-items-top elementor-section-height-default"
                            data-id="06481c4"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                          >
                            <div className="elementor-container elementor-column-gap-default ">
                              <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c1fe0d6"
                                data-id="c1fe0d6"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-811492b elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                    data-id="811492b"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-default ">
                                      <div
                                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-21ccc75"
                                        data-id="21ccc75"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-04219a5 elementor-widget elementor-widget-cms_image_single"
                                            data-id="04219a5"
                                            data-element_type="widget"
                                            data-widget_type="cms_image_single.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-image-single cms-animation-bottom-to-top wow pulse">
                                                <div className="cms-img-box">
                                                  <img
                                                    width="104"
                                                    height="116"
                                                    src="images/image-birth.png"
                                                    className="attachment-full size-full"
                                                    alt=""
                                                    loading="lazy"
                                                  />{" "}
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-099e703"
                                        data-id="099e703"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-33124d9 elementor-widget elementor-widget-cms_image_single"
                                            data-id="33124d9"
                                            data-element_type="widget"
                                            data-widget_type="cms_image_single.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-image-single cms-animation-left-to-right wow fadeInRight">
                                                <div className="cms-img-box">
                                                  <img
                                                    width="648"
                                                    height="274"
                                                    src="images/image-clound.png"
                                                    className="attachment-full size-full"
                                                    alt=""
                                                    loading="lazy"
                                                  />{" "}
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-c67ed09 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="c67ed09"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-default ">
                                      <div
                                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-16f9d33"
                                        data-id="16f9d33"
                                        data-element_type="column"
                                        data-settings='{"background_background":"classic"}'
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-58c85b7 elementor-widget elementor-widget-cms_heading"
                                            data-id="58c85b7"
                                            data-element_type="widget"
                                            data-widget_type="cms_heading.default"
                                          >
                                            <div className="elementor-widget-container heading-default-font">
                                              <div className="cms-heading-wrapper cms-heading-layout1 wow fadeInUp">
                                                <div className="custom-subheading">
                                                  Welcome to Toddler Talk
                                                </div>

                                                <h3 className="custom-heading">
                                                  <span>
                                                    A Brighter Future for your
                                                    child
                                                  </span>
                                                </h3>

                                                <div className="custom-heading-description">
                                                  Uncover your power. You can be
                                                  the hero of your child’s
                                                  communication journey.{" "}
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-871cfa4 elementor-widget elementor-widget-cms_button"
                                            data-id="871cfa4"
                                            data-element_type="widget"
                                            data-widget_type="cms_button.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div
                                                id="cms_button-871cfa4"
                                                className="cms-button-wrapper cms-button-layout1 wow fadeInUp"
                                              >
                                               <a class="btn btn-primary hv-secondary" href="https://demo.cmssuperheroes.com/themeforest/kindori/classes-page/" target="_blank">
             
                                                            <span class="btn-text">
                                                Start today                </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c7e8322"
                                        data-id="c7e8322"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-4d2f573a elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="4d2f573a"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                          >
                            <div className="elementor-container elementor-column-gap-default ">
                              <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-25c1041"
                                data-id="25c1041"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-fb2a341 elementor-widget elementor-widget-cms_heading"
                                    data-id="fb2a341"
                                    data-element_type="widget"
                                    data-widget_type="cms_heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="cms-heading-wrapper cms-heading-layout1 wow pulse">
                                        <div className="custom-subheading">
                                          Why choose us
                                        </div>

                                        <h3 className="custom-heading">
                                          <span>Communication Connects Us</span>
                                        </h3>

                                        <div className="custom-heading-description">
                                          If you are questioning whether your
                                          child’s speech and language
                                          development is on track, Toddler Talk
                                          is for you.{" "}
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-6878b5e1 elementor-widget elementor-widget-cms_image_single"
                                    data-id="6878b5e1"
                                    data-element_type="widget"
                                    data-widget_type="cms_image_single.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="cms-image-single cms-animation-left-to-right wow flash">
                                        <div className="cms-img-box">
                                          <img
                                            width="99"
                                            height="23"
                                            src="images/image-bee.png"
                                            className="attachment-full size-full"
                                            alt="Kindori"
                                            loading="lazy"
                                          />{" "}
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-73812581 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="73812581"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-extended ">
                                      <div
                                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-102b5c40"
                                        data-id="102b5c40"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-33d5373e elementor-widget elementor-widget-cms_fancy_box"
                                            data-id="33d5373e"
                                            data-element_type="widget"
                                            data-widget_type="cms_fancy_box.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-fancy-box layout1 wow flipInX">
                                                <div className="inner-content">
                                                  <div className="item--icon icon-image">
                                                    <div className="inner-icon">
                                                      <img
                                                        width="800"
                                                        height="800"
                                                        src="images/image-fcb-1.jpg"
                                                        className="attachment-full"
                                                        alt=""
                                                        loading="lazy"
                                                      />{" "}
                                                    </div>
                                                  </div>

                                                  <h3 className="item--title">
                                                    Proven Results{" "}
                                                  </h3>
                                                  <div className="item--description">
                                                    Our program is inspired by
                                                    decades of combined
                                                    professional experience.{" "}
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-2b9e5136"
                                        data-id="2b9e5136"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-6fb89582 elementor-widget elementor-widget-cms_fancy_box"
                                            data-id="6fb89582"
                                            data-element_type="widget"
                                            data-widget_type="cms_fancy_box.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-fancy-box layout1 ">
                                                <div className="inner-content">
                                                  <div className="item--icon icon-image">
                                                    <div className="inner-icon">
                                                      <img
                                                        width="800"
                                                        height="800"
                                                        src="images/image-fcb-2.jpg"
                                                        className="attachment-full"
                                                        alt=""
                                                        loading="lazy"
                                                      />{" "}
                                                    </div>
                                                  </div>

                                                  <h3 className="item--title">
                                                    Human{" "}
                                                  </h3>
                                                  <div className="item--description">
                                                    Don’t lose sight of what
                                                    communication really is.
                                                    Human interactions matter.{" "}
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-22c02e62"
                                        data-id="22c02e62"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-3ddb7e4a elementor-widget elementor-widget-cms_fancy_box"
                                            data-id="3ddb7e4a"
                                            data-element_type="widget"
                                            data-widget_type="cms_fancy_box.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-fancy-box layout1 wow bounce">
                                                <div className="inner-content">
                                                  <div className="item--icon icon-image">
                                                    <div className="inner-icon">
                                                      <img
                                                        width="800"
                                                        height="800"
                                                        src="images/image-fcb-3.jpg"
                                                        className="attachment-full"
                                                        alt=""
                                                        loading="lazy"
                                                      />{" "}
                                                    </div>
                                                  </div>

                                                  <h3 className="item--title">
                                                    Uncomplicated{" "}
                                                  </h3>
                                                  <div className="item--description">
                                                    We explain child development
                                                    in words you can understand.{" "}
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-7e3abd5a"
                                        data-id="7e3abd5a"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-16844e72 elementor-widget elementor-widget-cms_fancy_box"
                                            data-id="16844e72"
                                            data-element_type="widget"
                                            data-widget_type="cms_fancy_box.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-fancy-box layout1 ">
                                                <div className="inner-content">
                                                  <div className="item--icon icon-image">
                                                    <div className="inner-icon">
                                                      <img
                                                        width="800"
                                                        height="800"
                                                        src="images/image-fcb-4.jpg"
                                                        className="attachment-full"
                                                        alt=""
                                                        loading="lazy"
                                                      />{" "}
                                                    </div>
                                                  </div>

                                                  <h3 className="item--title">
                                                    Personalized{" "}
                                                  </h3>
                                                  <div className="item--description">
                                                    Your lessons will be
                                                    tailored to your child’s
                                                    specific needs.{" "}
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <div
                                    className="elementor-element elementor-element-2ded355 elementor-widget elementor-widget-cms_cta"
                                    data-id="2ded355"
                                    data-element_type="widget"
                                    data-widget_type="cms_cta.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="cms-cta layout1 ">
                                        <div className="inner-cms-cta">
                                          <div className="col-content"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-d8ac008 elementor-section-stretched elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="d8ac008"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                          >
                            <div className="elementor-container elementor-column-gap-default ">
                              <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4720d02"
                                data-id="4720d02"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-7a9a9b1 elementor-widget elementor-widget-cms_image_single"
                                    data-id="7a9a9b1"
                                    data-element_type="widget"
                                    data-widget_type="cms_image_single.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="cms-image-single cms-animation-left-to-right wow zoomIn">
                                        <div className="cms-img-box">
                                          <img
                                            width="616"
                                            height="660"
                                            src="images/image-left-home.png"
                                            className="attachment-full size-full"
                                            alt=""
                                            loading="lazy"
                                          />{" "}
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b68ff25"
                                data-id="b68ff25"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-2750712 elementor-widget elementor-widget-cms_heading"
                                    data-id="2750712"
                                    data-element_type="widget"
                                    data-widget_type="cms_heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="cms-heading-wrapper cms-heading-layout1 ">
                                        <h3 className="custom-heading">
                                          <span>
                                            Promote Your Child’s Development.{" "}
                                          </span>
                                        </h3>

                                        <div className="custom-heading-description">
                                          Founded in the midst of a global
                                          pandemic, Toddler Talk is designed for
                                          the parent who wears a thousand hats.
                                          Our program will help you uncover the
                                          ways you can support your toddler’s
                                          speech and language development within
                                          your everyday routines. You do not
                                          need apps, special toys, or
                                          meticulously planned activities. We
                                          invite you to teach your child to talk
                                          as you take a bath, eat breakfast, and
                                          put your shoes on. How does that
                                          sound?{" "}
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-805af7e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="805af7e"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-default ">
                                      <div
                                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0995737"
                                        data-id="0995737"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-3dfa74e elementor-widget elementor-widget-cms_text_box"
                                            data-id="3dfa74e"
                                            data-element_type="widget"
                                            data-widget_type="cms_text_box.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-textbox ">
                                                <h3 className="box-title">
                                                  Vision{" "}
                                                </h3>

                                                <div className="box-excerpt">
                                                  At Toddler Talk, we want to
                                                  create a world in which every
                                                  child experiences the joy of
                                                  communication and connection
                                                  with others.{" "}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-416b559"
                                        data-id="416b559"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-83f2dc8 elementor-widget elementor-widget-cms_text_box"
                                            data-id="83f2dc8"
                                            data-element_type="widget"
                                            data-widget_type="cms_text_box.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-textbox ">
                                                <h3 className="box-title">
                                                  Mission{" "}
                                                </h3>

                                                <div className="box-excerpt">
                                                  Toddler Talk provides parents
                                                  with trustworthy and
                                                  approachable information so
                                                  they can be empowered to
                                                  support their child’s speech
                                                  and language development.{" "}
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <div
                                    className="elementor-element elementor-element-cba85af elementor-widget elementor-widget-cms_button"
                                    data-id="cba85af"
                                    data-element_type="widget"
                                    data-widget_type="cms_button.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        id="cms_button-cba85af"
                                        className="cms-button-wrapper cms-button-layout1 wow flash"
                                      >
                                        <button className="btn btn-primary hv-secondary">
                                          <span className="btn-text">
                                            Start Today{" "}
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-f6893e0 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                            data-id="f6893e0"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched"}'
                          >
                            <div className="elementor-container elementor-column-gap-default ">
                              <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9f5f77a"
                                data-id="9f5f77a"
                                data-element_type="column"
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-4522805 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                    data-id="4522805"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-default ">
                                      <div
                                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-367b21f"
                                        data-id="367b21f"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-9265126 cms-element elementor-widget elementor-widget-cms_image_single"
                                            data-id="9265126"
                                            data-element_type="widget"
                                            data-widget_type="cms_image_single.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-image-single cms-animation-left-to-right ">
                                                <div className="cms-img-box">
                                                  <img
                                                    width="133"
                                                    height="137"
                                                    src="images/image-home-2.png"
                                                    className="attachment-full size-full"
                                                    alt=""
                                                    loading="lazy"
                                                  />{" "}
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8869f2a"
                                        data-id="8869f2a"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-8832270 elementor-widget elementor-widget-cms_heading"
                                            data-id="8832270"
                                            data-element_type="widget"
                                            data-widget_type="cms_heading.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-heading-wrapper cms-heading-layout1 wow pulse">
                                                <div className="custom-subheading">
                                                  How it works
                                                </div>

                                                <h3 className="custom-heading">
                                                  <span>
                                                    The Toddler Talk Way
                                                  </span>
                                                </h3>

                                                <div className="custom-heading-description">
                                                  Optimize your time. Toddler
                                                  Talk can help fill the gap
                                                  from the moment you have a
                                                  concern about your child’s
                                                  development until to the time
                                                  you receive professional
                                                  support.{" "}
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-6f927b2 elementor-widget elementor-widget-cms_image_single"
                                            data-id="6f927b2"
                                            data-element_type="widget"
                                            data-widget_type="cms_image_single.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-image-single animation-none wow flash">
                                                <div className="cms-img-box">
                                                  <img
                                                    width="99"
                                                    height="23"
                                                    src="images/image-bee.png"
                                                    className="attachment-full size-full"
                                                    alt="Kindori"
                                                    loading="lazy"
                                                  />{" "}
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6be929f"
                                        data-id="6be929f"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-97fbc33 cms-animation-bottom-to-top2 elementor-widget elementor-widget-cms_image_single"
                                            data-id="97fbc33"
                                            data-element_type="widget"
                                            data-widget_type="cms_image_single.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-image-single cms-animation-bottom-to-top ">
                                                <div className="cms-img-box">
                                                  <img
                                                    width="180"
                                                    height="186"
                                                    src="images/image-home-3.png"
                                                    className="attachment-full size-full"
                                                    alt=""
                                                    loading="lazy"
                                                  />{" "}
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <section
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-74d00c8 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="74d00c8"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-default ">
                                      <div
                                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0d5a18e"
                                        data-id="0d5a18e"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-72bd156 elementor-widget elementor-widget-cms_fancy_box"
                                            data-id="72bd156"
                                            data-element_type="widget"
                                            data-widget_type="cms_fancy_box.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-fancy-box layout3 box-icon-right ">
                                                <div className="inner-content">
                                                  <div className="item--icon icon-image">
                                                    <div className="inner-icon">
                                                      <img
                                                        width="36"
                                                        height="35"
                                                        src="images/icon-fcb-10.png"
                                                        className="attachment-full"
                                                        alt=""
                                                        loading="lazy"
                                                      />{" "}
                                                    </div>
                                                  </div>
                                                  <div className="item-holder">
                                                    <h3 className="item--title">
                                                      Assess{" "}
                                                    </h3>
                                                    <div className="item--description">
                                                      Complete our custom speech
                                                      and language assessment
                                                      for parents of toddlers{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-b49b259 elementor-widget elementor-widget-cms_fancy_box"
                                            data-id="b49b259"
                                            data-element_type="widget"
                                            data-widget_type="cms_fancy_box.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-fancy-box layout3 box-icon-right wow fadeInUp">
                                                <div className="inner-content">
                                                  <div className="item--icon icon-image">
                                                    <div className="inner-icon">
                                                      <img
                                                        width="35"
                                                        height="35"
                                                        src="images/icon-fcb-11.png"
                                                        className="attachment-full"
                                                        alt=""
                                                        loading="lazy"
                                                      />{" "}
                                                    </div>
                                                  </div>
                                                  <div className="item-holder">
                                                    <h3 className="item--title">
                                                      Realize{" "}
                                                    </h3>
                                                    <div className="item--description">
                                                      Is your child on track?
                                                      Use our findings page to
                                                      see how your child
                                                      compares to their peers.{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5383465"
                                        data-id="5383465"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-344e293 elementor-widget elementor-widget-cms_image_single"
                                            data-id="344e293"
                                            data-element_type="widget"
                                            data-widget_type="cms_image_single.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-image-single animation-none wow zoomIn">
                                                <div className="cms-img-box">
                                                  <img
                                                    width="383"
                                                    height="344"
                                                    src="images/child-man.png"
                                                    className="attachment-full size-full"
                                                    alt=""
                                                    loading="lazy"
                                                  />{" "}
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6aba877"
                                        data-id="6aba877"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-7f512c1 elementor-widget elementor-widget-cms_fancy_box"
                                            data-id="7f512c1"
                                            data-element_type="widget"
                                            data-widget_type="cms_fancy_box.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-fancy-box layout3 box-icon-left wow fadeInDown">
                                                <div className="inner-content">
                                                  <div className="item--icon icon-image">
                                                    <div className="inner-icon">
                                                      <img
                                                        width="35"
                                                        height="35"
                                                        src="images/icon-fcb-12.png"
                                                        className="attachment-full"
                                                        alt=""
                                                        loading="lazy"
                                                      />{" "}
                                                    </div>
                                                  </div>
                                                  <div className="item-holder">
                                                    <h3 className="item--title">
                                                      Amplify{" "}
                                                    </h3>
                                                    <div className="item--description">
                                                      Discover tools to level up
                                                      your child’s skills in
                                                      your individualized lesson
                                                      plan.{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-a267d66 elementor-widget elementor-widget-cms_fancy_box"
                                            data-id="a267d66"
                                            data-element_type="widget"
                                            data-widget_type="cms_fancy_box.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-fancy-box layout3 box-icon-left ">
                                                <div className="inner-content">
                                                  <div className="item--icon icon-image">
                                                    <div className="inner-icon">
                                                      <img
                                                        width="48"
                                                        height="36"
                                                        src="images/icon-fcb-13.png"
                                                        className="attachment-full"
                                                        alt=""
                                                        loading="lazy"
                                                      />{" "}
                                                    </div>
                                                  </div>
                                                  <div className="item-holder">
                                                    <h3 className="item--title">
                                                      Excel{" "}
                                                    </h3>
                                                    <div className="item--description">
                                                      Experience success with
                                                      your child and continue to
                                                      receive new goals and
                                                      lessons.{" "}
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </section>
                                  <div
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-b410ac4 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                    data-id="b410ac4"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-default ">
                                      <div
                                        className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-0b4fe1f"
                                        data-id="0b4fe1f"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-1bae692 cms-animation-bottom-to-top elementor-widget elementor-widget-cms_image_single"
                                            data-id="1bae692"
                                            data-element_type="widget"
                                            data-widget_type="cms_image_single.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-image-single cms-animation-bottom-to-top2 ">
                                                <div className="cms-img-box">
                                                  <img
                                                    width="132"
                                                    height="116"
                                                    src="images/image-home-1.png"
                                                    className="attachment-full size-full"
                                                    alt=""
                                                    loading="lazy"
                                                  />{" "}
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            className="elementor-section elementor-top-section elementor-element elementor-element-6516ee7 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                            data-id="6516ee7"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched"}'
                          >
                            <div className="elementor-container elementor-column-gap-default ">
                              <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9dca640 cms-bg-secondary"
                                data-id="9dca640"
                                data-element_type="column"
                                data-settings='{"background_background":"classic"}'
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-section elementor-inner-section elementor-element elementor-element-db92e98 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="db92e98"
                                    data-element_type="section"
                                  >
                                    <div className="elementor-container elementor-column-gap-default ">
                                      <div
                                        className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-f18b045"
                                        data-id="f18b045"
                                        data-element_type="column"
                                      >
                                        <div className="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            className="elementor-element elementor-element-821699b inline-block elementor-widget elementor-widget-cms_heading"
                                            data-id="821699b"
                                            data-element_type="widget"
                                            data-widget_type="cms_heading.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-heading-wrapper cms-heading-layout1 ">
                                                <div className="custom-subheading">
                                                  our program
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            className="elementor-element elementor-element-8927298 inline-block elementor-widget elementor-widget-cms_image_single"
                                            data-id="8927298"
                                            data-element_type="widget"
                                            data-widget_type="cms_image_single.default"
                                          >
                                            <div className="elementor-widget-container">
                                              <div className="cms-image-single animation-none wow fadeInRight">
                                                <div className="cms-img-box">
                                                  <img
                                                    width="99"
                                                    height="23"
                                                    src="images/image-bee-1.png"
                                                    className="attachment-full size-full"
                                                    alt=""
                                                    loading="lazy"
                                                  />{" "}
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-9fea2b2 elementor-widget elementor-widget-cms_heading"
                                    data-id="9fea2b2"
                                    data-element_type="widget"
                                    data-widget_type="cms_heading.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="cms-heading-wrapper cms-heading-layout1 ">
                                        <h3 className="custom-heading">
                                          <span>Communication Pillars</span>
                                        </h3>

                                        <div className="custom-heading-description">
                                          Communication Pillars Learning to
                                          communicate is a complicated process.
                                          We break it down into four teachable
                                          areas.{" "}
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-25742d5 elementor-widget elementor-widget-cms_accordion"
                                    data-id="25742d5"
                                    data-element_type="widget"
                                    data-widget_type="cms_accordion.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div
                                        id="cms_accordion-25742d5"
                                        className="cms-accordion layout3"
                                      >
                                        <div className="inner-layout">
                                          <div className="cms-accordion-item  active">
                                            <div
                                              className="cms-ac-title active"
                                              data-target="/fb147ddcms_accordion-25742d5"
                                              onClick={() =>setAccordionObject({
                                                name: "expression",
                                                value: accordionObject.name === "expression" ? !accordionObject.value : true
                                              })}
                                            >
                                              <span className="image-icon">
                                                <img
                                                  width="31"
                                                  height="30"
                                                  src="images/icon-accordion-1.png"
                                                  className="attachment-full"
                                                  alt=""
                                                  loading="lazy"
                                                />{" "}
                                              </span>
                                              <a href="/" className="cms-ac-title-text">
                                                Expression{" "}
                                              </a>
                                            </div>
                                            <div
                                              id="fb147ddcms_accordion-25742d5"
                                              className="cms-ac-content"
                                              style={{ display: accordionObject.name === "expression" && accordionObject.value ? "block" : "none" }}
                                            >
                                              Expression includes all of the
                                              ways your child tells you about
                                              their wants, needs, and ideas.
                                              Talking, facial expressions,
                                              gestures, pointing, eye-gaze, and
                                              tone of voice can all be a part of
                                              a child’s expression.{" "}
                                            </div>
                                          </div>
                                          <div className="cms-accordion-item  ">
                                            <div
                                              className="cms-ac-title "
                                              data-target="/89e6b88cms_accordion-25742d5"
                                              onClick={() =>setAccordionObject({
                                                name: "comprehension",
                                                value: accordionObject.name === "comprehension" ? !accordionObject.value : true
                                              })}
                                            >
                                              <span className="image-icon">
                                                <img
                                                  width="29"
                                                  height="31"
                                                  src="images/icon-accordion-2.png"
                                                  className="attachment-full"
                                                  alt=""
                                                  loading="lazy"
                                                />{" "}
                                              </span>
                                              <a  href="/" className="cms-ac-title-text">
                                                Comprehension{" "}
                                              </a>
                                            </div>
                                            <div
                                              id="89e6b88cms_accordion-25742d5"
                                              className="cms-ac-content"
                                              style={{ display: accordionObject.name === "comprehension" && accordionObject.value ? "block" : "none" }}

                                            >
                                              Comprehension refers to what your
                                              child understands. What words do
                                              they know the meaning of? As your
                                              child continues to understand more
                                              words, they will begin to
                                              understand new questions and
                                              directions also.{" "}
                                            </div>
                                          </div>
                                          <div className="cms-accordion-item  ">
                                            <div
                                              className="cms-ac-title "
                                              data-target="/979d89ecms_accordion-25742d5"
                                              onClick={() =>setAccordionObject({
                                                name: "speech",
                                                value: accordionObject.name === "speech" ? !accordionObject.value : true
                                              })}
                                           
                                            >
                                              <span className="image-icon">
                                                <img
                                                  width="31"
                                                  height="31"
                                                  src="images/icon-accordion-3.png"
                                                  className="attachment-full"
                                                  alt=""
                                                  loading="lazy"
                                                />{" "}
                                              </span>
                                              <a href="/" className="cms-ac-title-text">
                                                Speech Sounds{" "}
                                              </a>
                                            </div>
                                            <div
                                              id="979d89ecms_accordion-25742d5"
                                              className="cms-ac-content"
                                              style={{ display: accordionObject.name === "speech" && accordionObject.value ? "block" : "none" }}

                                            >
                                              Speech refers to the specific
                                              sounds a child makes (e.g., the
                                              “m” sound). Let us teach you which
                                              sounds we would expect your child
                                              to pronounce at their age.{" "}
                                            </div>
                                          </div>
                                          <div className="cms-accordion-item  ">
                                            <div
                                              className="cms-ac-title "
                                              data-target="/f9b277ecms_accordion-25742d5"
                                              onClick={() =>setAccordionObject({
                                                name: "readiness",
                                                value: accordionObject.name === "readiness" ? !accordionObject.value : true
                                              })}
                                            >
                                              <span className="image-icon">
                                                <img
                                                  width="31"
                                                  height="31"
                                                  src="images/icon-accordion-4.png"
                                                  className="attachment-full"
                                                  alt=""
                                                  loading="lazy"
                                                />{" "}
                                              </span>
                                              <a href="/" className="cms-ac-title-text">
                                                Readiness to Learn{" "}
                                              </a>
                                            </div>
                                            <div
                                              id="f9b277ecms_accordion-25742d5"
                                              className="cms-ac-content"
                                              style={{ display: accordionObject.name === "readiness" && accordionObject.value ? "block" : "none" }}

                                            >
                                              Create an environment that
                                              supports learning. Support your
                                              child’s ability to pay attention
                                              and avoid frustration in order to
                                              optimize their progress.
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b8d9e40"
                                data-id="b8d9e40"
                                data-element_type="column"
                                data-settings='{"background_background":"classic"}'
                              >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    className="elementor-element elementor-element-94831e6 elementor-widget elementor-widget-cms_video_player"
                                    data-id="94831e6"
                                    data-element_type="widget"
                                    data-widget_type="cms_video_player.default"
                                  >
                                    <div className="elementor-widget-container">
                                      <div className="cms-video-player layout5 wow bounce">
                                        <div className="inner-layout">
                                          <div className="wp-box-meta">
                                            <a
                                              className="btn-video"
                                              href="https://www.youtube.com/watch?v=SF4aHwxHtZ0"
                                            >
                                              <img
                                                width="136"
                                                height="136"
                                                src="images/button-video.png"
                                                className="attachment-full size-full"
                                                alt=""
                                                loading="lazy"
                                              />
                                            </a>
                                          </div>
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  </article>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>
     </Layout>
  );
};

export default IndexPage;
