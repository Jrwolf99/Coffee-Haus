import { Link } from "react-router-dom";
import styled from "styled-components"



export const StyledNavBtn = styled.button`
  font-size: 1rem;
  transition: all 0.2s ease-in-out;
  &:hover {
  background: white;
  color: var(--my-blue);
  border-radius: 10px;
  }
`;



export const StyledWhiteButton = styled.button`
  padding: 0.1em 0.7em;
  margin: 1rem;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;
  &:hover {
  background: white;
  color: var(--my-blue);
  border-radius: 10px;
  }
  `;


export const StyledLoginButtonType2 = styled.button`
        padding: 0.5em 1em;
        width: 100%;
        color: black;
        text-decoration: none;
    &:hover {
      background-color: #cdddff5d;
        border-radius: 5px;
        transition: all .2s;
    }`;

export const StyledLoginLinkType2 = styled(Link)`
        padding: 0.5em;
        width: 100%;
        color: black;
        text-decoration: none;
    &:hover {
        background-color: var(--my-blue);
        background-color: #cdddff5d;
        border-radius: 5px;
        transition: all .2s;
    }`;


export const StyledBlueButton = styled.button`
  color: white;
  background: var(--my-blue);
  border-radius: 3px;
  padding: 0.5em 1em;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.2s ease-in-out;

  &:hover {
  background: #031e58;
  }
  `;
