import React, { useState } from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

import { StyledErrorMsg, StyledLoading } from './StyledComponents/Utility';
import { StyledBlueButton, StyledLoginButtonType2, StyledLoginLinkType2 } from "./StyledComponents/Buttons"


import { useLogin } from '../hooks/useLogin';


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
    &>button {
        width: 70%;
    }
`;


const StyledButtonColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .4rem;

  
`;



export default function Login() {

    const { login, error, isPending } = useLogin();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    }


    return (
        <StyledLoginPage>
            <StyledLoginForm onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="text"
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        autoComplete="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                {!isPending && <StyledBlueButton>Submit</StyledBlueButton>}
                {isPending && <StyledLoading disabled>loading...</StyledLoading>}
                {error && <StyledErrorMsg>{error}</StyledErrorMsg>}



                <StyledButtonColumn>
                    <StyledLoginButtonType2>
                        <StyledLoginLinkType2 to="/signup">Not signed up? Resgister here!</StyledLoginLinkType2>
                    </StyledLoginButtonType2>
                    <StyledLoginButtonType2 onClick={() => {
                        setEmail("guest@guest.com");
                        setPassword("test12345");
                        login(email, password);
                    }

                    } >Continue as Guest</StyledLoginButtonType2>
                </StyledButtonColumn>
            </StyledLoginForm>
        </StyledLoginPage >
    )
}
