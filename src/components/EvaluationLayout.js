/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import NavBar from "./EvaluationBar"
import styled from "styled-components";
import "./layout.scss"

const getScrollNode = (element) => {
  return element.ownerDocument.scrollingElement || element.ownerDocument.documentElement
}

const isScrolled = (element) => {
  const scrollNode = getScrollNode(element)
  return scrollNode.scrollTop > 0
}

const StyledNavBar = styled(NavBar)`
  margin-bottom: 200px;
`;

const LessonsBody = styled.div``;

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.siteContainer = React.createRef()
    this.state = {
      scrolled: false,
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  handleScroll() {
    const element = this.siteContainer.current
    this.setState({
      scrolled: isScrolled(element),
    })
  }

  render() {
    let className = "site-container navbar-scrolled"
    if (this.props.className) className += ` ${this.props.className}`
    if (this.state.scrolled || this.props.solidBackground) className += " navbar-scrolled"

    return (
      <div
        className={className}
        ref={this.siteContainer}
        id="page-top">
        <StyledNavBar/>
        {/* <LessonsBody>{this.props.children}</LessonsBody> */}
        {/* <footer className="drk-blue-bg py-5 footer-bottom">
          <div className="container">
            <div className="small text-center text-white">Copyright &copy; 2020 - Toddler Talk</div>
          </div>
        </footer> */}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}