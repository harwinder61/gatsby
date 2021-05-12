import React from "react"
import { Router } from "@reach/router"
import IndexPage from "./indexPage"

// import HeaderHome from '../components/headerHome'
// import FooterHome from '../components/footerHome'
import AboutUs from './about'

const Index = () => {
  return (
    <>
    {/* <Layout > */}
      <Router>
        <IndexPage path="/" />
        <AboutUs path="/about" />
      </Router>
      {/* </Layout > */}
    </>
  )
}
export default Index