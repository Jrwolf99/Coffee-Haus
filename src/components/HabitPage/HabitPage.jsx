import React, { useEffect } from "react";


//packages
import styled from "styled-components"
import HabitList from "./HabitList/HabitList";

//hooks
import { useHabits } from "../../hooks/useHabits"
import useMobile from "../../hooks/useMobile";



const StyledHabitPage = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
    gap: 2vw;
     &>* {
        background-color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
        border-radius: 5px;
     }
     @media (max-width: 900px) {
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
