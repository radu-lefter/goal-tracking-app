import React, {useContext} from "react";
import styled from "styled-components";
import avatarLarge from "../assets/avatar_small.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Menu from "./Menu";
import {Context} from "../config/context";

const StyledBurgerMenu = styled.div`
width: 90px;
cursor: pointer;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
hr {
  margin: 4px 0 0 4px;
  width: 20%;
  border: 1px solid ${({ theme }) => theme.colors.darkShade[100]};
}
`;

const StyledUserAvatar = styled.div`
color: ${({ theme }) => theme.colors.darkShade[50]};
display: flex;
align-items: center;
img {
  margin-top: 8%;
}
`;

const StyledMenuWrapper = styled.div`
transition: all 1s ease-in-out;
transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
height: 100vh;
width: 304px;
background: linear-gradient(180deg, #6fcf9d 0%, #67d2e8 100%);
position: absolute;
padding-top: 1%;
top: 0;
left: 0;
`;

const StyledWrapper = styled.div`
width: 100%;
background: linear-gradient(
  180deg,
  ${({ theme }) => theme.colors.lightPurple} 0%,
  ${({ theme }) => theme.colors.purple} 100%
);
height: 50px;
display: flex;
justify-content: space-between;
`;




function Header(props) {

  const {isOpen, toggle} = useContext(Context)

  return (
    <div>
      <StyledMenuWrapper open={isOpen}>
        <Menu  />
      </StyledMenuWrapper>

      <StyledWrapper>
        <StyledBurgerMenu onClick={toggle}>
          <hr />
          <hr />
          <hr />
        </StyledBurgerMenu>
        <StyledUserAvatar>
          <FontAwesomeIcon style={{ fontSize: "16px" }} icon={faChevronDown} />
          <h6> Joe Appleton</h6>
          <img src={avatarLarge} alt="avatar" />
        </StyledUserAvatar>
      </StyledWrapper>
    </div>
  );
}


export default Header;