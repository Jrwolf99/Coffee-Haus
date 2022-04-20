import React, { useState } from "react";
//packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
grid-template: "sidenav datenav datenav"
                "sidenav workspace workspace"
                "sidenav workspace workspace";
`;


const StyledWorkspace = styled.div`
  grid-area: workspace;
  width: 85vw;
  height: 80vh;
  padding: 1em;
  background-color: red;
  @media (min-width: 1500px) {
    max-width: 1500px;
    margin: auto;
  }


`;



export default function Home() {

  const [dateHook] = useDates();

  return (
    <StyledHome>
      <DateNav dateHook={dateHook} />
      <SideNav dateHook={dateHook} />
      <StyledWorkspace>
        <Routes>
          <Route path="habit/*" element={<HabitPage dateHook={dateHook} />} />
          <Route path="journal" element={<JournalPage day={dateHook.day} />} />
        </Routes>
      </StyledWorkspace>
    </StyledHome>
  );
}
