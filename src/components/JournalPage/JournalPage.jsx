import React from 'react'
import styled from "styled-components"
import JournalCard from './JournalCard/JournalCard';
import { useFetch } from "../../hooks/useFetch"

const StyledJournalPage = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    @media (max-width: 900px) {
        height: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }
`;


export default function JournalPage({ day }) {
    const { data } = useFetch("https://stoicquotesapi.com/v1/api/quotes/random");
    return (
        <StyledJournalPage>
            <JournalCard
                placeholder="What did you do today?"
                title={"Daily Description"}
                keyName={"dayInfo/" + day.toLocaleDateString("en-US") + "/desc"}
            />
            <JournalCard
                placeholder="What is something that you learned today?"
                title={"Today’s Lessons"}
                keyName={"dayInfo/" + day.toLocaleDateString("en-US") + "/lesson"}
            />
            <JournalCard
                placeholder="What do you want to do tomorrow?"
                title={"Plan for Tomorrow"}
                keyName={"dayInfo/" + day.toLocaleDateString("en-US") + "/plan"}
            />
            <JournalCard
                title={"Quote of the Day"}
                keyName={"dayInfo/" + day.toLocaleDateString("en-US") + "/quote"}
                placeholder={data ? "\"" + data.body + "\"\n- " + data.author : "loading..."}
            />
        </StyledJournalPage>
    )
}
