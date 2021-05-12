import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Image from "gatsby-image";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Scroller from "../components/scroller";
import styled from "styled-components";

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

const VideoCoverImage = styled.img`
  width: 588px;
  height: 400px;
  background-color: #fbc736;
  padding-top: 15px;
  margin: auto;
`;

const IndexPage = () => {
  const data = useStaticQuery(getImages);

  return (
    <>
      <div id="page" class="site">
        <div id="cms-loadding" class="cms-loader" />
        <div class="loading-spinner">
          <div class="load-1">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
        </div>
      </div>
      <header id="masthead" class="site-header">
        <div id="site-header-wrap" class="header-layout1 is-sticky">
          <div id="site-topbar" class="site-topbar">
            <div class="container">
              <div class="inner-container">
                <div class="item-phone">
                  <i class="material zmdi zmdi-smartphone-android" />
                  <a class="info-text" href="tel:8886661234">
                    888 666 1234{" "}
                  </a>
                </div>

                <div class="item-adderess">
                  <i class="fa fa-map" />
                  <span class="info-text">Suite 100 San Francisco</span>
                </div>

                <div class="item-time">
                  <i class="material zmdi zmdi-hourglass-alt" />
                  <span class="info-text">Mon-Sat 8am - 5pm, Sun Closed</span>
                </div>

                <div class="item-socials">
                  <a title="Facebook" href="#">
                    <i class="zmdi zmdi-facebook" />
                  </a>{" "}
                  <a title="Twitter" href="#">
                    <i class="zmdi zmdi-twitter" />
                  </a>{" "}
                  <a title="Instagram" href="#">
                    <i class="zmdi zmdi-instagram" />
                  </a>{" "}
                  <a title="Skype" href="#">
                    <i class="zmdi zmdi-skype" />
                  </a>
                </div>
                <div class="site-header-search-mobile">
                  <span class="h-btn-search">
                    <i class="flaticon3 flaticon3-search-icon" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="site-header" class="site-header-main h-fixed">
            <div class="container">
              <div class="row">
                <div class="site-branding site-branding-mobile">
                  <a
                    class="logo-light"
                    href="http://localhost/wordpress/"
                    title="Toddler Talk"
                    rel="home"
                  >
                    <img src="images/talk-dark-2.png" alt="Toddler Talk" />
                  </a>
                  <a
                    class="logo-dark"
                    href="http://localhost/wordpress/"
                    title="Toddler Talk"
                    rel="home"
                  >
                    <img src="images/talk-dark-2.png" alt="Toddler Talk" />
                  </a>
                  <a
                    class="logo-mobile"
                    href="http://localhost/wordpress/"
                    title="Toddler Talk"
                    rel="home"
                  >
                    <img src="images/talk-dark-2.png" alt="Toddler Talk" />
                  </a>{" "}
                </div>
                <div class="site-navigation">
                  <nav class="main-navigation">
                    <ul id="mastmenu" class="primary-menu clearfix">
                      <li
                        id="menu-item-3158"
                        class="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-3158"
                      >
                        <a href="#">Home</a>
                        <ul class="sub-menu">
                          <li
                            id="menu-item-3184"
                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-45 current_page_item menu-item-3184"
                          >
                            <a href="#" aria-current="page">
                              Sign In
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-3182"
                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3182"
                      >
                        <a href="#">About Us</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div class="site-header-right">
                  <div class="site-header-item site-header-search">
                    <span class="h-btn-search">
                      <i class="flaticon3 flaticon3-search-icon"></i>
                    </span>
                  </div>

                  <div id="main-menu-mobile">
                    <span class="btn-nav-mobile open-menu">
                      <span></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>{" "}
      <div id="content" class="site-content">
        <div class="content-inner">
          <div class="container content-container">
            <div class="row content-row">
              <div id="primary" class="content-area col-12">
                <main id="main" class="site-main">
                  <article
                    id="post-45"
                    class="post-45 page type-page status-publish hentry"
                  >
                    <div class="entry-content clearfix">
                      <div
                        data-elementor-type="wp-page"
                        data-elementor-id="45"
                        class="elementor elementor-45"
                        data-elementor-settings="[]"
                      >
                        <div class="elementor-section-wrap">
                          <div
                            class="elementor-section elementor-top-section elementor-element elementor-element-06481c4 elementor-section-stretched elementor-section-full_width elementor-section-height-min-height elementor-section-items-top elementor-section-height-default"
                            data-id="06481c4"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                          >
                            <div class="elementor-container elementor-column-gap-default ">
                              <div
                                class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c1fe0d6"
                                data-id="c1fe0d6"
                                data-element_type="column"
                              >
                                <div class="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    class="elementor-section elementor-inner-section elementor-element elementor-element-811492b elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                    data-id="811492b"
                                    data-element_type="section"
                                  >
                                    <div class="elementor-container elementor-column-gap-default ">
                                      <div
                                        class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-21ccc75"
                                        data-id="21ccc75"
                                        data-element_type="column"
                                      >
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            class="elementor-element elementor-element-04219a5 elementor-widget elementor-widget-cms_image_single"
                                            data-id="04219a5"
                                            data-element_type="widget"
                                            data-widget_type="cms_image_single.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-image-single cms-animation-bottom-to-top wow pulse">
                                                <div class="cms-img-box">
                                                  <img
                                                    width="104"
                                                    height="116"
                                                    src="images/image-birth.png"
                                                    class="attachment-full size-full"
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
                                        class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-099e703"
                                        data-id="099e703"
                                        data-element_type="column"
                                      >
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            class="elementor-element elementor-element-33124d9 elementor-widget elementor-widget-cms_image_single"
                                            data-id="33124d9"
                                            data-element_type="widget"
                                            data-widget_type="cms_image_single.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-image-single cms-animation-left-to-right wow fadeInRight">
                                                <div class="cms-img-box">
                                                  <img
                                                    width="648"
                                                    height="274"
                                                    src="images/image-clound.png"
                                                    class="attachment-full size-full"
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
                                    class="elementor-section elementor-inner-section elementor-element elementor-element-c67ed09 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="c67ed09"
                                    data-element_type="section"
                                  >
                                    <div class="elementor-container elementor-column-gap-default ">
                                      <div
                                        class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-16f9d33"
                                        data-id="16f9d33"
                                        data-element_type="column"
                                        data-settings='{"background_background":"classic"}'
                                      >
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            class="elementor-element elementor-element-58c85b7 elementor-widget elementor-widget-cms_heading"
                                            data-id="58c85b7"
                                            data-element_type="widget"
                                            data-widget_type="cms_heading.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-heading-wrapper cms-heading-layout1 wow fadeInUp">
                                                <div class="custom-subheading">
                                                  Welcome to Toddler Talk
                                                </div>

                                                <h3 class="custom-heading">
                                                  <span>
                                                    A Brighter Future for your
                                                    child
                                                  </span>
                                                </h3>

                                                <div class="custom-heading-description">
                                                  Uncover your power. You can be
                                                  the hero of your child’s
                                                  communication journey.{" "}
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            class="elementor-element elementor-element-871cfa4 elementor-widget elementor-widget-cms_button"
                                            data-id="871cfa4"
                                            data-element_type="widget"
                                            data-widget_type="cms_button.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div
                                                id="cms_button-871cfa4"
                                                class="cms-button-wrapper cms-button-layout1 wow fadeInUp"
                                              >
                                                <a
                                                  class="btn btn-primary hv-secondary"
                                                  href="https://demo.cmssuperheroes.com/themeforest/kindori/classes-page/"
                                                  target="_blank"
                                                >
                                                  <span class="btn-text">
                                                    Start today{" "}
                                                  </span>
                                                </a>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-c7e8322"
                                        data-id="c7e8322"
                                        data-element_type="column"
                                      >
                                        <div class="elementor-widget-wrap"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <section
                            class="elementor-section elementor-top-section elementor-element elementor-element-4d2f573a elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="4d2f573a"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                          >
                            <div class="elementor-container elementor-column-gap-default ">
                              <div
                                class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-25c1041"
                                data-id="25c1041"
                                data-element_type="column"
                              >
                                <div class="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    class="elementor-element elementor-element-fb2a341 elementor-widget elementor-widget-cms_heading"
                                    data-id="fb2a341"
                                    data-element_type="widget"
                                    data-widget_type="cms_heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="cms-heading-wrapper cms-heading-layout1 wow pulse">
                                        <div class="custom-subheading">
                                          Why choose us
                                        </div>

                                        <h3 class="custom-heading">
                                          <span>Communication Connects Us</span>
                                        </h3>

                                        <div class="custom-heading-description">
                                          If you are questioning whether your
                                          child’s speech and language
                                          development is on track, Toddler Talk
                                          is for you.{" "}
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-6878b5e1 elementor-widget elementor-widget-cms_image_single"
                                    data-id="6878b5e1"
                                    data-element_type="widget"
                                    data-widget_type="cms_image_single.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="cms-image-single cms-animation-left-to-right wow flash">
                                        <div class="cms-img-box">
                                          <img
                                            width="99"
                                            height="23"
                                            src="images/image-bee.png"
                                            class="attachment-full size-full"
                                            alt="Kindori"
                                            loading="lazy"
                                          />{" "}
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                  <section
                                    class="elementor-section elementor-inner-section elementor-element elementor-element-73812581 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="73812581"
                                    data-element_type="section"
                                  >
                                    <div class="elementor-container elementor-column-gap-extended ">
                                      <div
                                        class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-102b5c40"
                                        data-id="102b5c40"
                                        data-element_type="column"
                                      >
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            class="elementor-element elementor-element-33d5373e elementor-widget elementor-widget-cms_fancy_box"
                                            data-id="33d5373e"
                                            data-element_type="widget"
                                            data-widget_type="cms_fancy_box.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-fancy-box layout1 wow flipInX">
                                                <div class="inner-content">
                                                  <div class="item--icon icon-image">
                                                    <div class="inner-icon">
                                                      <img
                                                        width="800"
                                                        height="800"
                                                        src="images/image-fcb-1.jpg"
                                                        class="attachment-full"
                                                        alt=""
                                                        loading="lazy"
                                                      />{" "}
                                                    </div>
                                                  </div>

                                                  <h3 class="item--title">
                                                    Proven Results{" "}
                                                  </h3>
                                                  <div class="item--description">
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
                                        class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-2b9e5136"
                                        data-id="2b9e5136"
                                        data-element_type="column"
                                      >
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            class="elementor-element elementor-element-6fb89582 elementor-widget elementor-widget-cms_fancy_box"
                                            data-id="6fb89582"
                                            data-element_type="widget"
                                            data-widget_type="cms_fancy_box.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-fancy-box layout1 ">
                                                <div class="inner-content">
                                                  <div class="item--icon icon-image">
                                                    <div class="inner-icon">
                                                      <img
                                                        width="800"
                                                        height="800"
                                                        src="images/image-fcb-2.jpg"
                                                        class="attachment-full"
                                                        alt=""
                                                        loading="lazy"
                                                      />{" "}
                                                    </div>
                                                  </div>

                                                  <h3 class="item--title">
                                                    Human{" "}
                                                  </h3>
                                                  <div class="item--description">
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
                                        class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-22c02e62"
                                        data-id="22c02e62"
                                        data-element_type="column"
                                      >
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            class="elementor-element elementor-element-3ddb7e4a elementor-widget elementor-widget-cms_fancy_box"
                                            data-id="3ddb7e4a"
                                            data-element_type="widget"
                                            data-widget_type="cms_fancy_box.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-fancy-box layout1 wow bounce">
                                                <div class="inner-content">
                                                  <div class="item--icon icon-image">
                                                    <div class="inner-icon">
                                                      <img
                                                        width="800"
                                                        height="800"
                                                        src="images/image-fcb-3.jpg"
                                                        class="attachment-full"
                                                        alt=""
                                                        loading="lazy"
                                                      />{" "}
                                                    </div>
                                                  </div>

                                                  <h3 class="item--title">
                                                    Uncomplicated{" "}
                                                  </h3>
                                                  <div class="item--description">
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
                                        class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-7e3abd5a"
                                        data-id="7e3abd5a"
                                        data-element_type="column"
                                      >
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            class="elementor-element elementor-element-16844e72 elementor-widget elementor-widget-cms_fancy_box"
                                            data-id="16844e72"
                                            data-element_type="widget"
                                            data-widget_type="cms_fancy_box.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-fancy-box layout1 ">
                                                <div class="inner-content">
                                                  <div class="item--icon icon-image">
                                                    <div class="inner-icon">
                                                      <img
                                                        width="800"
                                                        height="800"
                                                        src="images/image-fcb-4.jpg"
                                                        class="attachment-full"
                                                        alt=""
                                                        loading="lazy"
                                                      />{" "}
                                                    </div>
                                                  </div>

                                                  <h3 class="item--title">
                                                    Personalized{" "}
                                                  </h3>
                                                  <div class="item--description">
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
                                    class="elementor-element elementor-element-2ded355 elementor-widget elementor-widget-cms_cta"
                                    data-id="2ded355"
                                    data-element_type="widget"
                                    data-widget_type="cms_cta.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="cms-cta layout1 ">
                                        <div class="inner-cms-cta">
                                          <div class="col-content"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            class="elementor-section elementor-top-section elementor-element elementor-element-d8ac008 elementor-section-stretched elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                            data-id="d8ac008"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                          >
                            <div class="elementor-container elementor-column-gap-default ">
                              <div
                                class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4720d02"
                                data-id="4720d02"
                                data-element_type="column"
                              >
                                <div class="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    class="elementor-element elementor-element-7a9a9b1 elementor-widget elementor-widget-cms_image_single"
                                    data-id="7a9a9b1"
                                    data-element_type="widget"
                                    data-widget_type="cms_image_single.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="cms-image-single cms-animation-left-to-right wow zoomIn">
                                        <div class="cms-img-box">
                                          <img
                                            width="616"
                                            height="660"
                                            src="images/image-left-home.png"
                                            class="attachment-full size-full"
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
                                class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b68ff25"
                                data-id="b68ff25"
                                data-element_type="column"
                              >
                                <div class="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    class="elementor-element elementor-element-2750712 elementor-widget elementor-widget-cms_heading"
                                    data-id="2750712"
                                    data-element_type="widget"
                                    data-widget_type="cms_heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="cms-heading-wrapper cms-heading-layout1 ">
                                        <h3 class="custom-heading">
                                          <span>
                                            Promote Your Child’s Development.{" "}
                                          </span>
                                        </h3>

                                        <div class="custom-heading-description">
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
                                    class="elementor-section elementor-inner-section elementor-element elementor-element-805af7e elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="805af7e"
                                    data-element_type="section"
                                  >
                                    <div class="elementor-container elementor-column-gap-default ">
                                      <div
                                        class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0995737"
                                        data-id="0995737"
                                        data-element_type="column"
                                      >
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            class="elementor-element elementor-element-3dfa74e elementor-widget elementor-widget-cms_text_box"
                                            data-id="3dfa74e"
                                            data-element_type="widget"
                                            data-widget_type="cms_text_box.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-textbox ">
                                                <h3 class="box-title">
                                                  Vision{" "}
                                                </h3>

                                                <div class="box-excerpt">
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
                                        class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-416b559"
                                        data-id="416b559"
                                        data-element_type="column"
                                      >
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            class="elementor-element elementor-element-83f2dc8 elementor-widget elementor-widget-cms_text_box"
                                            data-id="83f2dc8"
                                            data-element_type="widget"
                                            data-widget_type="cms_text_box.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-textbox ">
                                                <h3 class="box-title">
                                                  Mission{" "}
                                                </h3>

                                                <div class="box-excerpt">
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
                                    class="elementor-element elementor-element-cba85af elementor-widget elementor-widget-cms_button"
                                    data-id="cba85af"
                                    data-element_type="widget"
                                    data-widget_type="cms_button.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div
                                        id="cms_button-cba85af"
                                        class="cms-button-wrapper cms-button-layout1 wow flash"
                                      >
                                        <a class="btn btn-primary hv-secondary">
                                          <span class="btn-text">
                                            Start Today{" "}
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                          <section
                            class="elementor-section elementor-top-section elementor-element elementor-element-f6893e0 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                            data-id="f6893e0"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched"}'
                          >
                            <div class="elementor-container elementor-column-gap-default ">
                              <div
                                class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9f5f77a"
                                data-id="9f5f77a"
                                data-element_type="column"
                              >
                                <div class="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    class="elementor-section elementor-inner-section elementor-element elementor-element-4522805 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                    data-id="4522805"
                                    data-element_type="section"
                                  >
                                    <div class="elementor-container elementor-column-gap-default ">
                                      <div
                                        class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-367b21f"
                                        data-id="367b21f"
                                        data-element_type="column"
                                      >
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            class="elementor-element elementor-element-9265126 cms-element elementor-widget elementor-widget-cms_image_single"
                                            data-id="9265126"
                                            data-element_type="widget"
                                            data-widget_type="cms_image_single.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-image-single cms-animation-left-to-right ">
                                                <div class="cms-img-box">
                                                  <img
                                                    width="133"
                                                    height="137"
                                                    src="images/image-home-2.png"
                                                    class="attachment-full size-full"
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
                                        class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8869f2a"
                                        data-id="8869f2a"
                                        data-element_type="column"
                                      >
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            class="elementor-element elementor-element-8832270 elementor-widget elementor-widget-cms_heading"
                                            data-id="8832270"
                                            data-element_type="widget"
                                            data-widget_type="cms_heading.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-heading-wrapper cms-heading-layout1 wow pulse">
                                                <div class="custom-subheading">
                                                  How it works
                                                </div>

                                                <h3 class="custom-heading">
                                                  <span>
                                                    The Toddler Talk Way
                                                  </span>
                                                </h3>

                                                <div class="custom-heading-description">
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
                                            class="elementor-element elementor-element-6f927b2 elementor-widget elementor-widget-cms_image_single"
                                            data-id="6f927b2"
                                            data-element_type="widget"
                                            data-widget_type="cms_image_single.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-image-single animation-none wow flash">
                                                <div class="cms-img-box">
                                                  <img
                                                    width="99"
                                                    height="23"
                                                    src="images/image-bee.png"
                                                    class="attachment-full size-full"
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
                                        class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6be929f"
                                        data-id="6be929f"
                                        data-element_type="column"
                                      >
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            class="elementor-element elementor-element-97fbc33 cms-animation-bottom-to-top2 elementor-widget elementor-widget-cms_image_single"
                                            data-id="97fbc33"
                                            data-element_type="widget"
                                            data-widget_type="cms_image_single.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-image-single cms-animation-bottom-to-top ">
                                                <div class="cms-img-box">
                                                  <img
                                                    width="180"
                                                    height="186"
                                                    src="images/image-home-3.png"
                                                    class="attachment-full size-full"
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
                                    class="elementor-section elementor-inner-section elementor-element elementor-element-74d00c8 elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="74d00c8"
                                    data-element_type="section"
                                  >
                                    <div class="elementor-container elementor-column-gap-default ">
                                      <div
                                        class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0d5a18e"
                                        data-id="0d5a18e"
                                        data-element_type="column"
                                      >
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            class="elementor-element elementor-element-72bd156 elementor-widget elementor-widget-cms_fancy_box"
                                            data-id="72bd156"
                                            data-element_type="widget"
                                            data-widget_type="cms_fancy_box.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-fancy-box layout3 box-icon-right ">
                                                <div class="inner-content">
                                                  <div class="item--icon icon-image">
                                                    <div class="inner-icon">
                                                      <img
                                                        width="36"
                                                        height="35"
                                                        src="images/icon-fcb-10.png"
                                                        class="attachment-full"
                                                        alt=""
                                                        loading="lazy"
                                                      />{" "}
                                                    </div>
                                                  </div>
                                                  <div class="item-holder">
                                                    <h3 class="item--title">
                                                      Assess{" "}
                                                    </h3>
                                                    <div class="item--description">
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
                                            class="elementor-element elementor-element-b49b259 elementor-widget elementor-widget-cms_fancy_box"
                                            data-id="b49b259"
                                            data-element_type="widget"
                                            data-widget_type="cms_fancy_box.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-fancy-box layout3 box-icon-right wow fadeInUp">
                                                <div class="inner-content">
                                                  <div class="item--icon icon-image">
                                                    <div class="inner-icon">
                                                      <img
                                                        width="35"
                                                        height="35"
                                                        src="images/icon-fcb-11.png"
                                                        class="attachment-full"
                                                        alt=""
                                                        loading="lazy"
                                                      />{" "}
                                                    </div>
                                                  </div>
                                                  <div class="item-holder">
                                                    <h3 class="item--title">
                                                      Realize{" "}
                                                    </h3>
                                                    <div class="item--description">
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
                                        class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5383465"
                                        data-id="5383465"
                                        data-element_type="column"
                                      >
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            class="elementor-element elementor-element-344e293 elementor-widget elementor-widget-cms_image_single"
                                            data-id="344e293"
                                            data-element_type="widget"
                                            data-widget_type="cms_image_single.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-image-single animation-none wow zoomIn">
                                                <div class="cms-img-box">
                                                  <img
                                                    width="383"
                                                    height="344"
                                                    src="images/child-man.png"
                                                    class="attachment-full size-full"
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
                                        class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-6aba877"
                                        data-id="6aba877"
                                        data-element_type="column"
                                      >
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            class="elementor-element elementor-element-7f512c1 elementor-widget elementor-widget-cms_fancy_box"
                                            data-id="7f512c1"
                                            data-element_type="widget"
                                            data-widget_type="cms_fancy_box.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-fancy-box layout3 box-icon-left wow fadeInDown">
                                                <div class="inner-content">
                                                  <div class="item--icon icon-image">
                                                    <div class="inner-icon">
                                                      <img
                                                        width="35"
                                                        height="35"
                                                        src="images/icon-fcb-12.png"
                                                        class="attachment-full"
                                                        alt=""
                                                        loading="lazy"
                                                      />{" "}
                                                    </div>
                                                  </div>
                                                  <div class="item-holder">
                                                    <h3 class="item--title">
                                                      Amplify{" "}
                                                    </h3>
                                                    <div class="item--description">
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
                                            class="elementor-element elementor-element-a267d66 elementor-widget elementor-widget-cms_fancy_box"
                                            data-id="a267d66"
                                            data-element_type="widget"
                                            data-widget_type="cms_fancy_box.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-fancy-box layout3 box-icon-left ">
                                                <div class="inner-content">
                                                  <div class="item--icon icon-image">
                                                    <div class="inner-icon">
                                                      <img
                                                        width="48"
                                                        height="36"
                                                        src="images/icon-fcb-13.png"
                                                        class="attachment-full"
                                                        alt=""
                                                        loading="lazy"
                                                      />{" "}
                                                    </div>
                                                  </div>
                                                  <div class="item-holder">
                                                    <h3 class="item--title">
                                                      Excel{" "}
                                                    </h3>
                                                    <div class="item--description">
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
                                    class="elementor-section elementor-inner-section elementor-element elementor-element-b410ac4 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                                    data-id="b410ac4"
                                    data-element_type="section"
                                  >
                                    <div class="elementor-container elementor-column-gap-default ">
                                      <div
                                        class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-0b4fe1f"
                                        data-id="0b4fe1f"
                                        data-element_type="column"
                                      >
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            class="elementor-element elementor-element-1bae692 cms-animation-bottom-to-top elementor-widget elementor-widget-cms_image_single"
                                            data-id="1bae692"
                                            data-element_type="widget"
                                            data-widget_type="cms_image_single.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-image-single cms-animation-bottom-to-top2 ">
                                                <div class="cms-img-box">
                                                  <img
                                                    width="132"
                                                    height="116"
                                                    src="images/image-home-1.png"
                                                    class="attachment-full size-full"
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
                            class="elementor-section elementor-top-section elementor-element elementor-element-6516ee7 elementor-section-stretched elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                            data-id="6516ee7"
                            data-element_type="section"
                            data-settings='{"stretch_section":"section-stretched"}'
                          >
                            <div class="elementor-container elementor-column-gap-default ">
                              <div
                                class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9dca640 cms-bg-secondary"
                                data-id="9dca640"
                                data-element_type="column"
                                data-settings='{"background_background":"classic"}'
                              >
                                <div class="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    class="elementor-section elementor-inner-section elementor-element elementor-element-db92e98 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                    data-id="db92e98"
                                    data-element_type="section"
                                  >
                                    <div class="elementor-container elementor-column-gap-default ">
                                      <div
                                        class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-f18b045"
                                        data-id="f18b045"
                                        data-element_type="column"
                                      >
                                        <div class="elementor-widget-wrap elementor-element-populated">
                                          <div
                                            class="elementor-element elementor-element-821699b inline-block elementor-widget elementor-widget-cms_heading"
                                            data-id="821699b"
                                            data-element_type="widget"
                                            data-widget_type="cms_heading.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-heading-wrapper cms-heading-layout1 ">
                                                <div class="custom-subheading">
                                                  our program
                                                </div>
                                              </div>{" "}
                                            </div>
                                          </div>
                                          <div
                                            class="elementor-element elementor-element-8927298 inline-block elementor-widget elementor-widget-cms_image_single"
                                            data-id="8927298"
                                            data-element_type="widget"
                                            data-widget_type="cms_image_single.default"
                                          >
                                            <div class="elementor-widget-container">
                                              <div class="cms-image-single animation-none wow fadeInRight">
                                                <div class="cms-img-box">
                                                  <img
                                                    width="99"
                                                    height="23"
                                                    src="images/image-bee-1.png"
                                                    class="attachment-full size-full"
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
                                    class="elementor-element elementor-element-9fea2b2 elementor-widget elementor-widget-cms_heading"
                                    data-id="9fea2b2"
                                    data-element_type="widget"
                                    data-widget_type="cms_heading.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="cms-heading-wrapper cms-heading-layout1 ">
                                        <h3 class="custom-heading">
                                          <span>Communication Pillars</span>
                                        </h3>

                                        <div class="custom-heading-description">
                                          Communication Pillars Learning to
                                          communicate is a complicated process.
                                          We break it down into four teachable
                                          areas.{" "}
                                        </div>
                                      </div>{" "}
                                    </div>
                                  </div>
                                  <div
                                    class="elementor-element elementor-element-25742d5 elementor-widget elementor-widget-cms_accordion"
                                    data-id="25742d5"
                                    data-element_type="widget"
                                    data-widget_type="cms_accordion.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div
                                        id="cms_accordion-25742d5"
                                        class="cms-accordion layout3"
                                      >
                                        <div class="inner-layout">
                                          <div class="cms-accordion-item  active">
                                            <div
                                              class="cms-ac-title active"
                                              data-target="#fb147ddcms_accordion-25742d5"
                                            >
                                              <span class="image-icon">
                                                <img
                                                  width="31"
                                                  height="30"
                                                  src="images/icon-accordion-1.png"
                                                  class="attachment-full"
                                                  alt=""
                                                  loading="lazy"
                                                />{" "}
                                              </span>
                                              <a class="cms-ac-title-text">
                                                Expression{" "}
                                              </a>
                                            </div>
                                            <div
                                              id="fb147ddcms_accordion-25742d5"
                                              class="cms-ac-content"
                                              style={{ display: "block" }}
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
                                          <div class="cms-accordion-item  ">
                                            <div
                                              class="cms-ac-title "
                                              data-target="#89e6b88cms_accordion-25742d5"
                                            >
                                              <span class="image-icon">
                                                <img
                                                  width="29"
                                                  height="31"
                                                  src="images/icon-accordion-2.png"
                                                  class="attachment-full"
                                                  alt=""
                                                  loading="lazy"
                                                />{" "}
                                              </span>
                                              <a class="cms-ac-title-text">
                                                Comprehension{" "}
                                              </a>
                                            </div>
                                            <div
                                              id="89e6b88cms_accordion-25742d5"
                                              class="cms-ac-content"
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
                                          <div class="cms-accordion-item  ">
                                            <div
                                              class="cms-ac-title "
                                              data-target="#979d89ecms_accordion-25742d5"
                                            >
                                              <span class="image-icon">
                                                <img
                                                  width="31"
                                                  height="31"
                                                  src="images/icon-accordion-3.png"
                                                  class="attachment-full"
                                                  alt=""
                                                  loading="lazy"
                                                />{" "}
                                              </span>
                                              <a class="cms-ac-title-text">
                                                Speech Sounds{" "}
                                              </a>
                                            </div>
                                            <div
                                              id="979d89ecms_accordion-25742d5"
                                              class="cms-ac-content"
                                            >
                                              Speech refers to the specific
                                              sounds a child makes (e.g., the
                                              “m” sound). Let us teach you which
                                              sounds we would expect your child
                                              to pronounce at their age.{" "}
                                            </div>
                                          </div>
                                          <div class="cms-accordion-item  ">
                                            <div
                                              class="cms-ac-title "
                                              data-target="#f9b277ecms_accordion-25742d5"
                                            >
                                              <span class="image-icon">
                                                <img
                                                  width="31"
                                                  height="31"
                                                  src="images/icon-accordion-4.png"
                                                  class="attachment-full"
                                                  alt=""
                                                  loading="lazy"
                                                />{" "}
                                              </span>
                                              <a class="cms-ac-title-text">
                                                Readiness to Learn{" "}
                                              </a>
                                            </div>
                                            <div
                                              id="f9b277ecms_accordion-25742d5"
                                              class="cms-ac-content"
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
                                class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b8d9e40"
                                data-id="b8d9e40"
                                data-element_type="column"
                                data-settings='{"background_background":"classic"}'
                              >
                                <div class="elementor-widget-wrap elementor-element-populated">
                                  <div
                                    class="elementor-element elementor-element-94831e6 elementor-widget elementor-widget-cms_video_player"
                                    data-id="94831e6"
                                    data-element_type="widget"
                                    data-widget_type="cms_video_player.default"
                                  >
                                    <div class="elementor-widget-container">
                                      <div class="cms-video-player layout5 wow bounce">
                                        <div class="inner-layout">
                                          <div class="wp-box-meta">
                                            <a
                                              class="btn-video"
                                              href="https://www.youtube.com/watch?v=SF4aHwxHtZ0"
                                            >
                                              <img
                                                width="136"
                                                height="136"
                                                src="images/button-video.png"
                                                class="attachment-full size-full"
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
      <footer id="colophon" class="site-footer-custom">
        <div class="footer-custom-inner">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div
                  data-elementor-type="wp-post"
                  data-elementor-id="30"
                  class="elementor elementor-30"
                  data-elementor-settings="[]"
                >
                  <div class="elementor-section-wrap">
                    <section
                      class="elementor-section elementor-top-section elementor-element elementor-element-a17f965 elementor-section-stretched bg-footer-custom elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="a17f965"
                      data-element_type="section"
                      data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                    >
                      <div class="elementor-container elementor-column-gap-default ">
                        <div
                          class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-f321375"
                          data-id="f321375"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-4896a0e elementor-widget elementor-widget-cms_image_single"
                              data-id="4896a0e"
                              data-element_type="widget"
                              data-widget_type="cms_image_single.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="cms-image-single animation-none ">
                                  <div class="cms-img-box">
                                    <a href="#">
                                      {" "}
                                      <img
                                        width="395"
                                        height="100"
                                        src="images/talk-light.png"
                                        class="attachment-full size-full"
                                        alt=""
                                        loading="lazy"
                                      />{" "}
                                    </a>{" "}
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-3a12c04 elementor-widget elementor-widget-cms_text_editor"
                              data-id="3a12c04"
                              data-element_type="widget"
                              data-widget_type="cms_text_editor.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-text-editor elementor-clearfix ">
                                  <p>
                                    Uncover your power. You can be the hero of
                                    your child’s communication journey.
                                  </p>
                                </div>{" "}
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-dcd56bc elementor-widget elementor-widget-cms_icon"
                              data-id="dcd56bc"
                              data-element_type="widget"
                              data-widget_type="cms_icon.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="cms-icon1">
                                  <a href="#">
                                    <i
                                      aria-hidden="true"
                                      class="fab fa-facebook-f"
                                    ></i>
                                    <i
                                      aria-hidden="true"
                                      class="fab fa-facebook-f"
                                    ></i>{" "}
                                  </a>
                                  <a href="#">
                                    <i
                                      aria-hidden="true"
                                      class="fab fa-twitter"
                                    ></i>
                                    <i
                                      aria-hidden="true"
                                      class="fab fa-twitter"
                                    ></i>{" "}
                                  </a>
                                  <a href="#">
                                    <i
                                      aria-hidden="true"
                                      class="material zmdi zmdi-email"
                                    ></i>
                                    <i
                                      aria-hidden="true"
                                      class="material zmdi zmdi-email"
                                    ></i>{" "}
                                  </a>
                                  <a href="#">
                                    <i
                                      aria-hidden="true"
                                      class="fab fa-skype"
                                    ></i>
                                    <i
                                      aria-hidden="true"
                                      class="fab fa-skype"
                                    ></i>{" "}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-be68c21"
                          data-id="be68c21"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-1d2a5ba elementor-widget elementor-widget-cms_contact_info"
                              data-id="1d2a5ba"
                              data-element_type="widget"
                              data-widget_type="cms_contact_info.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="cms-contact-info3 ">
                                  <h3 class="entry-title">Contact Us</h3>
                                  <ul class="list-li">
                                    <li>
                                      <span class="item--icon">
                                        <i
                                          aria-hidden="true"
                                          class="fas fa-phone-alt"
                                        ></i>{" "}
                                      </span>
                                      888 777 7777{" "}
                                    </li>
                                    <li>
                                      <span class="item--icon">
                                        <i
                                          aria-hidden="true"
                                          class="material zmdi zmdi-email"
                                        ></i>{" "}
                                      </span>
                                      info@toddlertalk.com{" "}
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-04f7b9a"
                          data-id="04f7b9a"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-764a111 elementor-widget elementor-widget-cms_heading"
                              data-id="764a111"
                              data-element_type="widget"
                              data-widget_type="cms_heading.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="cms-heading-wrapper cms-heading-layout1 ">
                                  <h3 class="custom-heading">
                                    <span>Our Program</span>
                                  </h3>
                                </div>{" "}
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-de7b6b0 elementor-widget elementor-widget-cms_navigation_menu"
                              data-id="de7b6b0"
                              data-element_type="widget"
                              data-widget_type="cms_navigation_menu.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="cms-navigation-wrap style2 ">
                                  <div
                                    id="cms_navigation_menu-de7b6b0"
                                    class="cms-navigation-menu1 style2"
                                  >
                                    <div class="menu-class-single-menu-container">
                                      <ul
                                        id="menu-class-single-menu"
                                        class="menu"
                                      >
                                        <li
                                          id="menu-item-3168"
                                          class="menu-item menu-item-type-post_type menu-item-object-classes menu-item-3168"
                                        >
                                          <a href="#">Expression</a>
                                        </li>
                                        <li
                                          id="menu-item-3170"
                                          class="menu-item menu-item-type-post_type menu-item-object-classes menu-item-3170"
                                        >
                                          <a href="#">Comprehension</a>
                                        </li>
                                        <li
                                          id="menu-item-3171"
                                          class="menu-item menu-item-type-post_type menu-item-object-classes menu-item-3171"
                                        >
                                          <a href="#">Speech Sounds</a>
                                        </li>
                                        <li
                                          id="menu-item-3172"
                                          class="menu-item menu-item-type-post_type menu-item-object-classes menu-item-3172"
                                        >
                                          <a href="#">Readiness to Learn</a>
                                        </li>
                                      </ul>
                                    </div>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-4290735"
                          data-id="4290735"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-1311044 elementor-widget elementor-widget-cms_heading"
                              data-id="1311044"
                              data-element_type="widget"
                              data-widget_type="cms_heading.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="cms-heading-wrapper cms-heading-layout1 ">
                                  <h3 class="custom-heading">
                                    <span>Newsletter</span>
                                  </h3>

                                  <div class="custom-heading-description">
                                    Subscribe to our Newsletter right now to be
                                    updated.{" "}
                                  </div>
                                </div>{" "}
                              </div>
                            </div>
                            <div
                              class="elementor-element elementor-element-1bfd487 elementor-widget elementor-widget-cms_newsletter"
                              data-id="1bfd487"
                              data-element_type="widget"
                              data-widget_type="cms_newsletter.default"
                            >
                              <div class="elementor-widget-container">
                                <div
                                  id="cms_newsletter-1bfd487"
                                  class="cms-newsletter style2"
                                >
                                  <form
                                    class="tnp-form"
                                    action="http://localhost/wordpress/?na=s"
                                    method="post"
                                    onsubmit="return newsletter_check(this)"
                                  >
                                    <input
                                      type="hidden"
                                      name="nr"
                                      value="widget-minimal"
                                    />
                                    <div class="tnp-field tnp-field-email">
                                      <input
                                        class="tnp-email"
                                        type="email"
                                        required
                                        name="ne"
                                        value=""
                                        placeholder=" Email"
                                      />
                                    </div>
                                    <div class="tnp-field tnp-field-button">
                                      <input
                                        class="tnp-button"
                                        type="submit"
                                        value="Subscribe"
                                      />
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section
                      class="elementor-section elementor-top-section elementor-element elementor-element-13939f2 elementor-section-stretched elementor-section-content-middle elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                      data-id="13939f2"
                      data-element_type="section"
                      data-settings='{"stretch_section":"section-stretched","background_background":"classic"}'
                    >
                      <div class="elementor-container elementor-column-gap-default ">
                        <div
                          class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b5a94c1"
                          data-id="b5a94c1"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-9b61f8c elementor-widget elementor-widget-cms_text_editor"
                              data-id="9b61f8c"
                              data-element_type="widget"
                              data-widget_type="cms_text_editor.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="elementor-text-editor elementor-clearfix ">
                                  <p>
                                    © 2020 Kindori, All Rights Reserved. With
                                    love by{" "}
                                    <a href="#" target="_blank" rel="noopener">
                                      Toddler Talk
                                    </a>
                                    .
                                  </p>
                                </div>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-da52401"
                          data-id="da52401"
                          data-element_type="column"
                        >
                          <div class="elementor-widget-wrap elementor-element-populated">
                            <div
                              class="elementor-element elementor-element-45fe0af elementor-widget elementor-widget-cms_navigation_menu"
                              data-id="45fe0af"
                              data-element_type="widget"
                              data-widget_type="cms_navigation_menu.default"
                            >
                              <div class="elementor-widget-container">
                                <div class="cms-navigation-wrap style1 ">
                                  <div
                                    id="cms_navigation_menu-45fe0af"
                                    class="cms-navigation-menu1 style1"
                                  >
                                    <div class="menu-class-single-menu-container">
                                      <ul
                                        id="menu-class-single-menu-1"
                                        class="menu"
                                      >
                                        <li class="menu-item menu-item-type-post_type menu-item-object-classes menu-item-3168">
                                          <a href="#">About Us</a>
                                        </li>
                                      </ul>
                                    </div>{" "}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="cms-modal cms-modal-search">
        <div class="cms-modal-close">x</div>
        <div class="cms-modal-content">
          <form
            role="search"
            method="get"
            class="search-form-popup"
            action="http://localhost/wordpress/"
          >
            <div class="searchform-wrap">
              <input
                type="text"
                placeholder="Type Words Then Enter"
                id="search"
                name="s"
                class="search-field"
              />
              <button type="submit" class="search-submit">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
