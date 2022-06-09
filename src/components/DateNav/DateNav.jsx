import React from "react";
import styled from "styled-components"


//components
import { StyledNavBtn, StyledWhiteButton } from "../StyledComponents/Buttons";

const StyledDateNav = styled.div`
  grid-area: datenav;
  margin-top: 2vh;
  margin-right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(gradient-blue)
  /* background-color: pink; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  color: white;


`;

export const StyledTodayBtn = styled(StyledNavBtn)`
        position: absolute;
        margin-left: 4rem;
        padding: .5em;
`;




export default function DateNav({ dateHook }) {

  const { day, setDay, getDateAsString, getToday, handleDayChange } = dateHook;

  return <StyledDateNav>

    <StyledWhiteButton
      onClick={() => handleDayChange("left")}
    >&lt;</StyledWhiteButton>

    <StyledTodayBtn onClick={() => { setDay(getToday()) }}>
      <p>Today</p>
    </StyledTodayBtn>

    <div>{getDateAsString(day)}</div>

    <StyledWhiteButton
      onClick={() => handleDayChange("right")}
    >&gt;</StyledWhiteButton>
  </StyledDateNav >;
}
