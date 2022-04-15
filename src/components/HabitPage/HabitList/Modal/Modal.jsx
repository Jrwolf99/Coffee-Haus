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
    background-color: rgba(225, 225, 225, 0.813);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 10px 10px rgba(225, 225, 225, 0.813);
`;
const StyledForm = styled.form`
    height: 30%;
    width: 50%;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    padding: 1em;
    &>label{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px

    }
    label > button{
        width: 30%;
        }

`;




export default function Modal({ setShowModal, addHabit }) {
    const [input, setInput] = useState("");

    return (
        <StyledModal>
            <StyledForm>
                <button
                    onClick={() => setShowModal(false)}
                >X
                </button>
                <label>
                    Add a habit to track:
                    <input
                        type="text"
                        autoFocus={true}
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
        </StyledModal>
    );
}
