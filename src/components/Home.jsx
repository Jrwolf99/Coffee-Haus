import React, { useState } from "react";
//packages
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import styled from "styled-components";

//styles
import "../globalstyles/typography.css";
import "../globalstyles/globalreset.css";
import "../globalstyles/Global.css";

//components
import SideNav from "./SideNav/SideNav";
import DateNav from "./DateNav/DateNav";
import HabitPage from "./HabitPage/HabitPage";
import JournalPage from "./JournalPage/JournalPage";
import { useDates } from "../hooks/useDates";

const StyledHome = styled.div`
display: grid;
gap: 1rem;
grid-template: "sidenav datenav datenav" 12vh
                "sidenav workspace workspace";




`;
const StyledWorkspace = styled.div`
  grid-area: workspace;
  width: 80vw;
  @media (min-width: 1500px) {
    max-width: 1500px;
    margin-inline: auto;
  }
`;
const StyledDate = styled.div`
  grid-area: datenav;
  margin-top: 2vh;
  margin-right: 1rem;
`;
const StyledSide = styled.div`
  grid-area: sidenav;
  height: 95vh;
  max-width: 14vw;
`;


export default function Home() {
  const [dateHook] = useDates();
  return (
    <StyledHome>
      <StyledDate><DateNav dateHook={dateHook} /></StyledDate>
      <StyledSide><SideNav dateHook={dateHook} /></StyledSide>
      <StyledWorkspace>
        <Routes>
          <Route path="habit/*" element={<HabitPage dateHook={dateHook} />} />
          <Route path="/*" element={<Navigate to="/home/habit" replace />} />
          <Route path="journal/*" element={<JournalPage day={dateHook.day} />} />
        </Routes>
      </StyledWorkspace>
    </StyledHome>
  );
}
