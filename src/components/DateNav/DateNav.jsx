import React from "react";
import styled from "styled-components"


//components
import { StyledTodayBtn, StyledWhiteButton } from "../StyledComponents/Buttons";



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

const StyledToday = styled.p`
  margin: .5rem;
`;


const StyledDate = styled.div``;




export default function DateNav() {
  return <StyledDateNav>
    <StyledWhiteButton>&lt;</StyledWhiteButton>
    <StyledTodayBtn
      style={{
        position: "absolute",
        marginLeft: "4rem"
      }}>
      <StyledToday>Today</StyledToday>
    </StyledTodayBtn>
    <StyledDate>{"April 1, 1999"}</StyledDate>
    <StyledWhiteButton>&gt;</StyledWhiteButton>
  </StyledDateNav>;
}
