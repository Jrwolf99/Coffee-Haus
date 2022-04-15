import React from 'react'
import styled from "styled-components"
import JournalCard from './JournalCard/JournalCard';

const StyledJournalPage = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 900px) {
        height: 100%;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
    }

`;


export default function JournalPage() {

    return (
        <StyledJournalPage>
            <JournalCard
                placeholder="What did you do today?"
                title={"Daily Description"}
                keyName="desc"
            />
            <JournalCard
                placeholder="What is something that you learned today?"
                title={"Today’s Lessons"}
                keyName="lesson"
            />
            <JournalCard
                placeholder="What do you want to do tomorrow?"
                title={"Plan for Tomorrow"}
                keyName="plan"
            />
            <JournalCard
                placeholder="quote here"
                title={"Quote of the Day"}
                keyName="quote"
            />
        </StyledJournalPage>
    )
}
