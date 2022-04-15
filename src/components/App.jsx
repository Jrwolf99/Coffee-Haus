import React from "react";
//packages
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

//styles
import "../globalstyles/typography.css";
import "../globalstyles/globalreset.css";
import "../globalstyles/variables.css";

//components
import SideNav from "./SideNav/SideNav";
import DateNav from "./DateNav/DateNav";
import HabitPage from "./HabitPage/HabitPage";
import JournalPage from "./JournalPage/JournalPage";

const StyledApp = styled.div``;

export default function App() {
  return (
    <StyledApp>
      <Router>
        <DateNav />
        <SideNav />
        <Routes>
          <Route path="/" element={<HabitPage />} />
          <Route path="/habit" element={<HabitPage />} />
          <Route path="/journal" element={<JournalPage />} />
        </Routes>
      </Router>
    </StyledApp>
  );
}
