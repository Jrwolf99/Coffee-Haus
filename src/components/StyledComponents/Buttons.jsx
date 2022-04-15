import styled from "styled-components"



export const StyledTodayBtn = styled.button`
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
  background: white;
  color: var(--my-blue);
  border-radius: 10px;
  }
`;
export const StyledTodayDateNavBtn = styled(StyledTodayBtn)`
        position: absolute;
        margin-left: 4rem;
        padding: .5em;
`;



export const StyledWhiteButton = styled.button`
  padding: 0.1em 0.7em;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
  background: white;
  color: var(--my-blue);
  border-radius: 10px;
  }
  `;


export const StyledBlueButton = styled.button`
  color: white;
  background: var(--my-blue);
  border-radius: 10px;
  padding: 0.5em 1em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;

  &:hover {
  background: #031e58;
  border-radius: 10px;
  }
  `;
