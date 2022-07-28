import React, {useContext} from "react";
import styled from "styled-components";
import {Link, useNavigate} from "react-router-dom";
import {Context} from "../config/context";

const StyledNav = styled.nav`
ul {  
  display: flex;
  flex-direction: column;
  align-items: center;
}
`;

const StyledLi = styled.li`
margin-bottom: 10%;
cursor: pointer;
width: 100%;
text-align: center;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
background: ${({ theme, active }) =>
  active ? theme.colors.darkShade[25] : ""};
`;

const StyledClosedText = styled.p`
text-align: right;
padding-right: 3%;
margin-bottom: 15%;
font-size: 18px;
cursor: pointer;
`;


function Menu(props) {

    const {toggle} = useContext(Context)
    const location = useNavigate();

    return (
      <div>
        <StyledClosedText onClick={toggle}> X </StyledClosedText>
        <StyledNav>
          <ul>
            <StyledLi active={location.pathname === "/"}>  <Link to="/"> Dash </Link> </StyledLi>
            <StyledLi active={location.pathname === "/profile"}>  <Link to="/profile"> Profile </Link> </StyledLi>
            <StyledLi active={location.pathname === "/checkin"}>  <Link to="/checkin"> Checkin </Link> </StyledLi>
          </ul>
        </StyledNav>
      </div>
    );
  }
  

  export default Menu;