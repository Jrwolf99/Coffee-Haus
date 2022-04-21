import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSignup } from '../hooks/useSignup';
import { StyledBlueButton, StyledLoginLinkType2 } from './StyledComponents/Buttons';
import { StyledErrorMsg, StyledLoading } from './StyledComponents/Utility';



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
    width: 90%;
}
`;



export default function Signup() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [displayName, setDisplayName] = useState();

    const { signup, isPending, error } = useSignup();


    const handleSubmit = (e) => {
        e.preventDefault();
        signup(email, password, displayName)
    }



    return (
        <StyledLoginPage>
            <StyledLoginForm onSubmit={handleSubmit}>
                <StyledLoginLinkType2 to="/">Back to Login</StyledLoginLinkType2>
                <label>
                    Display Name:
                    <input
                        type="text"
                        autoComplete="off"
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
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
                {!isPending && <StyledBlueButton>Sign Up</StyledBlueButton>}
                {isPending && <StyledLoading disabled>loading...</StyledLoading>}
                {error && <StyledErrorMsg>{error}</StyledErrorMsg>}
            </StyledLoginForm>
        </StyledLoginPage>
    )
}

