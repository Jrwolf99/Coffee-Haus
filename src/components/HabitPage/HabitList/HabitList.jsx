import React, { useState } from "react";


//packages
import styled from "styled-components"
import { StyledBlueButton } from "../../StyledComponents/Buttons";
import HabitEntry from "./HabitEntry/HabitEntry";
import Modal from "./Modal/Modal";


const StyledHabitList = styled.div`
overflow: auto;
padding: 1em 1em;
min-height: 30vh;
`;

const StyledTitle = styled.div`
padding-inline: .8em;
display: flex;
justify-content: space-between;
align-items: center;
&>button {
    
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
