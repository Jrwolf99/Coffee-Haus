import React, { useEffect } from "react";
import { Calendar } from "react-calendar";

//styles
import "../../globalstyles/Calendar.css"

//packages
import styled from "styled-components"
import HabitList from "./HabitList/HabitList";

//hooks
import { useHabits } from "../../hooks/useHabits"



const StyledHabitPage = styled.div`
    height: 100%;
    width: 100%;
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

export default function HabitPage({ dateHook }) {
    const [habitHook] = useHabits();
    return (
        <StyledHabitPage>
            <HabitList habitHook={habitHook} day={dateHook.day} />
            <Calendar
                onChange={dateHook.setDay}
                value={dateHook.day}
                minDate={new Date(2015, 1, 1)}
                maxDate={new Date(2035, 1, 1)}
                minDetail="month"
            />
        </StyledHabitPage>
    )
}
