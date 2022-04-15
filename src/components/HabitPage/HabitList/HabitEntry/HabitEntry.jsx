import React from 'react'
import styled from "styled-components"
import { useHabitEntry } from './useHabitEntry';
import { useDates } from '../../../../hooks/useDates';


const StyledHabitEntry = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.1rem;
        background-color: whitesmoke;
        box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.35);
        margin: .4rem 0.2rem;
        padding: .6em 1em;
        border-radius: 6px;
        list-style-type: none;
        @media (max-width: 900px) {
            font-size: .8rem;
        }
`;

const StyledActions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    &> input {
   height: 30px;
   width: 30px;
   background: #f6f6f6;
  }
  & > button {
    margin:  0 .5rem;
    padding: .2em .6em;
    color: var(--my-blue);
  }

  & > button:hover {
    border-radius: 4px;
    background-color: var(--my-blue);
    color: white;
  }
    `;




export default function HabitEntry({ habit, day, toggleHabitForDay, removeHabit }) {
    const [{ getDateAsString }] = useDates();
    const [isChecked, setIsChecked] = useHabitEntry(habit, day);
    return (
        <StyledHabitEntry>
            <li>{habit.name}</li>
            <StyledActions>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {
                        toggleHabitForDay(habit, day);
                        setIsChecked(
                            habit.daysComplete.indexOf(getDateAsString(day)) > -1 ? true : false
                        )
                    }
                    }
                />
                <button onClick={() => removeHabit(habit)}>X</button>
            </StyledActions>
        </StyledHabitEntry>
    )
}
