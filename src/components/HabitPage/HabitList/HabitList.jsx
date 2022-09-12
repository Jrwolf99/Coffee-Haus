import React, { useState } from "react";


//packages
import styled from "styled-components"
import { StyledBlueButton } from "../../StyledComponents/Buttons";
import HabitEntry from "./HabitEntry/HabitEntry";
import Modal from "./Modal/Modal";


const StyledHabitList = styled.div`
padding: 1em 1em;
min-height: 30vh;
`;

const StyledTitle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

&>button {
    width: 2.2rem;
    font-size: 1.6rem;
    text-align: center;
    font-weight: 100;
    margin-right: 1rem;
    transition: all .2s;

    &:hover {
        background: #1d65c1;
        border-radius: 5px;
        color: white;
    }

}


`;

export default function HabitList({ habitHook, day }) {

    const [showModal, setShowModal] = useState(false);
    const { addHabit, habits, toggleHabitForDay, removeHabit } = habitHook;

    return (
        <StyledHabitList>
            <StyledTitle>
                <p>Habits</p>
                <button onClick={() => setShowModal(true)}>+</button>
            </StyledTitle>
            {showModal && (
                <Modal setShowModal={setShowModal} addHabit={addHabit}></Modal>
            )}

            {habits.map((habit, index) => {
                return (
                    <div key={index}>
                        <HabitEntry
                            habit={habit}
                            day={day}
                            toggleHabitForDay={toggleHabitForDay}
                            removeHabit={removeHabit}
                        />
                    </div>)
            })}

        </StyledHabitList>
    )
}
