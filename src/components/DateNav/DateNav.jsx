import React from "react";
import styled from "styled-components"


//components
import { StyledNavBtn, StyledWhiteButton } from "../StyledComponents/Buttons";

const StyledDateNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(gradient-blue);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  color: white;
`;

export const StyledTodayBtn = styled(StyledNavBtn)`
        position: absolute;
        margin-left: 4rem;
        padding: .5em;

        @media (max-width: 900px) {
          display: none;
        }
`;

export const StyledDateBar = styled.div`
display: flex;
gap: 2em;
`;

export const StyledDateCircle = styled.button`

background-color: #ffffff30;
color: #ffffff;
font-size: .9rem;
border-radius: 50%;
height: 25px;
width: 25px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;

@media (max-width: 900px) {
  display: none;
}

`;








export default function DateNav({ dateHook }) {

  const { day, setDay, getDateAsString, getToday, getNextDay, getPrevDay, handleDayChange } = dateHook;

  return <StyledDateNav>

    <StyledWhiteButton
      onClick={() => handleDayChange("left")}
    >&lt;</StyledWhiteButton>

    <StyledTodayBtn onClick={() => { setDay(getToday()) }}>
      <p>Today</p>
    </StyledTodayBtn>




    <StyledDateBar>

      <StyledDateCircle
        onClick={() => { setDay(getPrevDay(getPrevDay(getPrevDay(day)))) }}
      >{getDateAsString(getPrevDay(getPrevDay(getPrevDay(day))), "short")}</StyledDateCircle>

      <StyledDateCircle
        onClick={() => { setDay(getPrevDay(getPrevDay(day))) }}
      >{getDateAsString(getPrevDay(getPrevDay(day)), "short")}</StyledDateCircle>

      <StyledDateCircle
        onClick={() => { setDay(getPrevDay(day)) }}
      >{getDateAsString(getPrevDay(day), "short")}</StyledDateCircle>

      <div>{getDateAsString(day, "long")}</div>

      <StyledDateCircle
        onClick={() => { setDay(getNextDay(day)) }}

      >{getDateAsString(getNextDay(day), "short")}</StyledDateCircle>

      <StyledDateCircle
        onClick={() => { setDay(getNextDay(getNextDay(day))) }}

      >{getDateAsString(getNextDay(getNextDay(day)), "short")}</StyledDateCircle>

      <StyledDateCircle
        onClick={() => { setDay(getNextDay(getNextDay(getNextDay(day)))) }}
      >{getDateAsString(getNextDay(getNextDay(getNextDay(day))), "short")}</StyledDateCircle>

    </StyledDateBar>

    <StyledWhiteButton
      onClick={() => handleDayChange("right")}
    >&gt;</StyledWhiteButton>
  </StyledDateNav >;
}
