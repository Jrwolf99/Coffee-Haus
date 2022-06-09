import React from 'react'
import styled from "styled-components"
import { useHabitEntry } from './useHabitEntry';
import { useDates } from '../../../../hooks/useDates';


const StyledHabitEntry = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: .8rem;
        background-color: #f9f9f9;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;        margin: .8rem 0.2rem;
        padding: .6em .6em;
        border-radius: 3px;
        list-style-type: none;
        @media (max-width: 900px) {
            font-size: 1rem;
        }
`;

const StyledActions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    &> input {
   height: 22px;
   width: 22px;
  }
  & > button {
    margin:  0 .5rem;
    padding: .2em .6em;
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
