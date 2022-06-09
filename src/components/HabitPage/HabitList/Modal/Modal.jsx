import React, { useState } from "react";

//packages
import styled from "styled-components"
import { StyledBlueButton } from "../../../StyledComponents/Buttons";


const StyledModal = styled.div`
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(42, 42, 51, 0.813);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 10px rgba(225, 225, 225, 0.813);
`;



const StyledCard = styled.div`
    width: 50%;
    background-color: #ebecf0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    padding: 1em;
    position: relative;

    &>button {
        position: absolute;
        top: 0;
        right: 0;
        margin: 1rem;
    }


`;



const StyledForm = styled.form`
    &>label{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        &>input {
            width: 50%;
            border: none;
        }
    }
    label > button{
        width: 50%;
        }

`;




export default function Modal({ setShowModal, addHabit }) {
    const [input, setInput] = useState("");

    return (
        <StyledModal>
            <StyledCard>
                <button
                    onClick={() => setShowModal(false)}
                >X
                </button>
                <StyledForm>
                    <label>
                        Add a habit to track:
                        <input
                            type="text"
                            autoComplete="off"
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <StyledBlueButton
                            onClick={() => {
                                const habit = {
                                    name: input,
                                };
                                setShowModal(false);
                                addHabit(habit);
                            }}
                        >
                            add
                        </StyledBlueButton>
                    </label>
                </StyledForm>
            </StyledCard>
        </StyledModal>
    );
}
