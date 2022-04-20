import React from "react";

//packages
import { Link } from "react-router-dom";
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//assets
import CoffeeHaus from "../../assets/images/LOGO.svg"
import CoffeeHausSmall from "../../assets/images/LOGOsmall.svg"
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

//hooks
import { useWindowSize } from "../../hooks/useWindowSize"

//components
import { StyledNavBtn } from "../StyledComponents/Buttons";






const StyledSideNav = styled.div`
  grid-area: sidenav;
  height: 95vh;
  margin-top: 2vh;
  border-radius: 0 10px 10px 0;
  background: var(--gradient-blue);
  color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  &>* {
      padding: 1em;
  }
`;


const StyledSideLink = styled(Link)`
  width: 100%;
  color: white;
  display: flex;
  justify-content: left;
  align-items: center;
  &:hover {
  background: linear-gradient(144.59deg, #001f35 -63.5%, #1100d7 481.28%);
 }
 &>p {
    color: white;
  padding: 0.6em 1em;
  outline: none;
 }

`;

const StyledLogoutBtn = styled(StyledNavBtn)`
 margin-top: auto;
 margin-bottom: 1rem;
`;



export default function SideNav() {
    const size = useWindowSize();
    return <StyledSideNav>
        {size[0] > 900 && <img src={CoffeeHaus} alt="CoffeeHaus logo" />}
        {size[0] < 900 && <img src={CoffeeHausSmall} alt="CoffeeHaus logo" />}
        {size[0] < 900 && <StyledNavBtn>Today</StyledNavBtn>}

        <StyledSideLink to="/home/habit">
            <FontAwesomeIcon icon={faPuzzlePiece} />
            <p>Habits</p>
        </StyledSideLink>

        <StyledSideLink to="/home/journal">
            <FontAwesomeIcon icon={faBook} />
            <p>Journal</p>
        </StyledSideLink>


        <StyledLogoutBtn>Logout</StyledLogoutBtn>


    </StyledSideNav>;
}
