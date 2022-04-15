import React from "react";
import { Calendar } from "react-calendar";

//styles
import "../../globalstyles/Calendar.css"

//packages
import styled from "styled-components"
import HabitList from "./HabitList/HabitList";


const StyledHabitPage = styled.div`

     display: grid;
     grid-template-rows: 1fr;
     grid-template-columns: 1fr 1fr;

     &>* {
         height: calc(100% - .5rem);
         margin: .5rem;
        padding: 1em;
        background-color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
     }

     @media (max-width: 900px) {
        height: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }

`;



export default function HabitPage({ day, setDay }) {
    return (
        <StyledHabitPage>
            <HabitList />
            <Calendar
                onChange={setDay}
                value={day}
                minDate={new Date(2015, 1, 1)}
                maxDate={new Date(2035, 1, 1)}
                minDetail="month"
            />
        </StyledHabitPage>
    )
}
