import React from "react";
import styled from "styled-components"


//components
import { StyledTodayDateNavBtn, StyledWhiteButton } from "../StyledComponents/Buttons";

const StyledDateNav = styled.div`
  width: 74vw;
  padding: 1em;
  position: absolute;
  top: 2vh;
  right: 2vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:  linear-gradient(144.59deg, #00345a -63.5%, #1100d7 481.28%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  color: white;
@media (max-width: 900px) {
  width: 70vw;
}
`;



export default function DateNav({ dateHook }) {

  const { day, setDay, getDateAsString, getToday, handleDayChange } = dateHook;

  return <StyledDateNav>

    <StyledWhiteButton
      onClick={() => handleDayChange("left")}
    >&lt;</StyledWhiteButton>

    <StyledTodayDateNavBtn onClick={() => { setDay(getToday()) }}>
      <p>Today</p>
    </StyledTodayDateNavBtn>

    <div>{getDateAsString(day)}</div>

    <StyledWhiteButton
      onClick={() => handleDayChange("right")}
    >&gt;</StyledWhiteButton>
  </StyledDateNav >;
}
