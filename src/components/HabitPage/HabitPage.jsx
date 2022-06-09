import React, { useEffect } from "react";


//packages
import styled from "styled-components"
import HabitList from "./HabitList/HabitList";

//hooks
import { useHabits } from "../../hooks/useHabits"
import useMobile from "../../hooks/useMobile";



const StyledHabitPage = styled.div`
    width: 100%;
    max-height: 80vh;
     display: grid;
     grid-template-rows: 1fr;
     grid-template-columns: 1fr 1fr;
     gap: 2vw;
     padding-inline: 6vw;
     &>* {
         height: calc(100% - .5rem);
         margin: .5rem;
        padding: 1em;
        background-color: #ebecf0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
     }
     @media (max-width: 900px) {
        height: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }

`;

export default function HabitPage({ dateHook }) {
    const [habitHook] = useHabits();
    const { isMobile } = useMobile();
    return (
        <StyledHabitPage>
            <HabitList habitHook={habitHook} day={dateHook.day} />

        </StyledHabitPage>
    )
}
