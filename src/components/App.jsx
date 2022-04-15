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

const StyledApp = styled.div`
`;


const StyledWorkspace = styled.div`
    width: 72vw;
    height: 80vh;
    position: absolute;
    top: 13vh;
    left: 23.5vw;
`;



export default function App() {

  const [dateHook] = useDates();

  return (
    <StyledApp>
      <Router>
        <DateNav dateHook={dateHook} />
        <SideNav dateHook={dateHook} />
        <StyledWorkspace>
          <Routes>
            <Route path="/" element={<HabitPage />} />
            <Route path="/habit" element={<HabitPage />} />
            <Route path="/journal" element={<JournalPage day={dateHook.day} />} />
          </Routes>

        </StyledWorkspace>
      </Router>
    </StyledApp>
  );
}
