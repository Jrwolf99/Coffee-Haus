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
import { useLogout } from "../../hooks/useLogout"

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
  @media (max-width: 900px) {
    &>* {
      padding:  1.4em .8em;

      font-size: 1rem;
  }
  }


`;


const StyledSideLink = styled(Link)`
  width: 100%;
  color: white;
  display: flex;
  justify-content: left;
  align-items: center;


  &:hover {
      background-color: #ffffff16;
 }
 &>p {
    color: white;
  padding: 0.6em 1em;
  outline: none;
 }
 @media (max-width: 900px) {
    justify-content: center;
        &>p {
        display: none;
    }
 
    &>*{
            font-size: 1.4rem;
        }

}


`;

const StyledLogoutBtn = styled(StyledNavBtn)`
 margin-top: auto;
 margin-bottom: 1rem;
 
`;



export default function SideNav() {
    const { logout } = useLogout();
    const handleLogout = () => {
        logout();
    }

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
        <StyledLogoutBtn onClick={handleLogout}>Logout</StyledLogoutBtn>
    </StyledSideNav>;
}
