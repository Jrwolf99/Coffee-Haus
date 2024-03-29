import React, { useEffect } from 'react'
import styled from "styled-components"

//hooks
import { useLocalStorage } from "../../../hooks/useLocalStorage"


const StyledJournalCard = styled.div`
  padding: 1em;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;

    & > p {
    width: 100%;
    padding-left: 1em;
    margin: 0.5rem 0;
    }

    & > textarea {
    resize: none;
    width: 100%;
    height: 100%;
    padding: 1.2em;
    border: none;
    outline: none;
}

&>* {
    @media (max-width: 900px) {
        font-size: 1rem;
    }

}

`;




export default function JournalCard({ title, placeholder, keyName, value }) {

    const [text, setText, getText] = useLocalStorage(keyName, "");
    useEffect(() => {
        if (localStorage.getItem(keyName) === null) {
            setText("")
        }
        setText(getText(keyName));
    }, [
        setText,
        getText,
        keyName,
    ]);


    return (
        <StyledJournalCard>
            <p>{title}</p>
            <textarea
                placeholder={placeholder}
                onChange={(e) => setText(e.target.value)}
                value={text}
            ></textarea>
        </StyledJournalCard>
    )
}
