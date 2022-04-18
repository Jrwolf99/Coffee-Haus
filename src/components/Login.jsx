import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

const StyledLoginPage = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
    padding: 3em;
    border-radius: 10px;
    gap: 20px;
    &>label{
        display: flex;
        flex-direction: column;
        align-items: left;
    }
`;



export default function Login() {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return (
        <StyledLoginPage>
            <StyledLoginForm>
                <label>
                    Username:
                    <input
                        type="text"
                        autoFocus={true}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        autoFocus={true}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <Link to="/">Submit</Link>
                <Link to="/home">Continue as Guest</Link>
            </StyledLoginForm>
        </StyledLoginPage>
    )
}
