import React from "react"
import NavBar from "../components/NavigationBar"
import styled from "styled-components";
import "../components/layout.scss"

const LoginWrapper = styled.div``;

const StyledNavBar = styled(NavBar)`
  margin-bottom: 200px;
`;

const Login = () => {

  return (
      <LoginWrapper>
        <StyledNavBar/>

        <footer className="drk-blue-bg py-5">
          <div className="container">
            <div className="small text-center text-white">Copyright &copy; 2020 - Toddler Talk</div>
          </div>
        </footer>      
      </LoginWrapper>
  )
}

export default Login;