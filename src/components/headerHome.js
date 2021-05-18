import React, { useState } from "react";
import { Link } from "gatsby"

const HeaderHome = () => {
  const [showModel, setShowMode  ] = useState(false)

  return (
    <>
        <div id="page" className="site">
        <div  />
        <div className="loading-spinner">
          <div className="load-1">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <header id="masthead" className="site-header">
        <div id="site-header-wrap" className="header-layout1 is-sticky">
          <div id="site-topbar" className="site-topbar">
            <div className="container">
              <div className="inner-container">
                <div className="item-phone">
                  <i className="material zmdi zmdi-smartphone-android" />
                  <a className="info-text" href="tel:8886661234">
                    888 666 1234{" "}
                  </a>
                </div>

                <div className="item-adderess">
                  <i className="fa fa-map" />
                  <span className="info-text">Suite 100 San Francisco</span>
                </div>

                <div className="item-time">
                  <i className="material zmdi zmdi-hourglass-alt" />
                  <span className="info-text">Mon-Sat 8am - 5pm, Sun Closed</span>
                </div>

                <div className="item-socials">
                  <a title="Facebook" href="/">
                    <i className="zmdi zmdi-facebook" />
                  </a>{" "}
                  <a title="Twitter" href="/">
                    <i className="zmdi zmdi-twitter" />
                  </a>{" "}
                  <a title="Instagram" href="/">
                    <i className="zmdi zmdi-instagram" />
                  </a>{" "}
                  <a title="Skype" href="/">
                    <i className="zmdi zmdi-skype" />
                  </a>
                </div>
                <div className="site-header-search-mobile">
                  <span className="h-btn-search">
                    <i className="flaticon3 flaticon3-search-icon" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div id="site-header" className="site-header-main h-fixed">
            <div className="container">
              <div className="row">
                <div className="site-branding site-branding-mobile">
                  <a
                    className="logo-light"
                    href="http://localhost/wordpress/"
                    title="Toddler Talk"
                    rel="home"
                  >
                    <img src="images/talk-dark-2.png" alt="Toddler Talk" />
                  </a>
                  <a
                    className="logo-dark"
                    href="http://localhost/wordpress/"
                    title="Toddler Talk"
                    rel="home"
                  >
                    <img src="images/talk-dark-2.png" alt="Toddler Talk" />
                  </a>
                  <a
                    className="logo-mobile"
                    href="http://localhost/wordpress/"
                    title="Toddler Talk"
                    rel="home"
                  >
                    <img src="images/talk-dark-2.png" alt="Toddler Talk" />
                  </a>{" "}
                </div>
                <div className="site-navigation">
                  <nav className="main-navigation">
                    <ul id="mastmenu" className="primary-menu clearfix">
                      <li
                        id="menu-item-3158"
                        className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-3158"
                      >
                        <Link to="/">Home</Link>
                        <ul className="sub-menu">
                          <li
                            id="menu-item-3184"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-45 current_page_item menu-item-3184"
                          >
                            <Link to="/" aria-current="page">
                              Sign In
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        id="menu-item-3182"
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3182"
                      >
                        <Link to="/about">About Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="site-header-right">
                  <div className="site-header-item site-header-search">
                    <span className="h-btn-search" onClick={() => setShowMode(true)}>
                      <i className="flaticon3 flaticon3-search-icon"></i>
                    </span>
                  </div>

                  <div id="main-menu-mobile">
                    <span className="btn-nav-mobile open-menu">
                      <span></span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>{" "}
      
      <div onClick={() => setShowMode(false)} className={showModel ? "cms-modal cms-modal-search open" : "cms-modal cms-modal-search"}>
            <div className="cms-modal-close" onClick={() => setShowMode(false)} >x</div>
            <div className="cms-modal-content">
                <form role="search" method="get" className="search-form-popup" action="http://localhost/wordpress/">
                    <div className="searchform-wrap">
                        <input type="text" placeholder="Type Words Then Enter" id="search" name="s" className="search-field"/>
                        <button type="submit" className="search-submit"><i className="fa fa-search"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </>
  );
};
export default HeaderHome;
