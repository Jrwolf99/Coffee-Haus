import React, { useState } from "react";


//packages
import styled from "styled-components"
import { StyledBlueButton } from "../../StyledComponents/Buttons";
import HabitEntry from "./HabitEntry/HabitEntry";
import Modal from "./Modal/Modal";


const StyledHabitList = styled.div`
`;

const StyledTitle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;





export default function HabitList({ habitHook, day }) {

    const [showModal, setShowModal] = useState(false);
    const { addHabit, habits, toggleHabitForDay, removeHabit } = habitHook;

    return (
        <StyledHabitList>
            <StyledTitle>
                <p>Habits</p>
                <StyledBlueButton onClick={() => setShowModal(true)}>Add</StyledBlueButton>
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
