import React, { useState } from "react";


//packages
import styled from "styled-components"
import { StyledBlueButton } from "../../StyledComponents/Buttons";
import Modal from "./Modal/Modal";


const StyledHabitList = styled.div`
`;

const StyledTitle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;





export default function HabitList({ habitHook }) {

    const [showModal, setShowModal] = useState(false);

    return (
        <StyledHabitList>
            <StyledTitle>
                <p>Habits</p>
                <StyledBlueButton onClick={() => setShowModal(true)}>Add</StyledBlueButton>
            </StyledTitle>
            {showModal && (
                <Modal setShowModal={setShowModal} addHabit={habitHook.addHabit}></Modal>
            )}

            {/* {habitHook.habits.map((habit, index) => {
                return (
                    <div key={index}>
                        <HabitEntry habit={habit}
                            day={day}
                            HabitController={HabitController} />
                    </div>)
            })} */}





        </StyledHabitList>
    )
}
