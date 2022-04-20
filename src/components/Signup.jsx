import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSignup } from '../hooks/useSignup';



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

const StyledLoading = styled.button`
`;
const StyledErrorMsg = styled.p`
color: red;
font-size: 0.8rem;
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
                <Link to="/">Back to Login</Link>
                <label>
                    Display Name:
                    <input
                        type="text"
                        autoFocus={true}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
                <label>
                    Username:
                    <input
                        type="text"
                        autoFocus={true}
                        onChange={(e) => setEmail(e.target.value)}
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
                {!isPending && <button>Sign Up</button>}
                {isPending && <StyledLoading disabled>loading...</StyledLoading>}
                {error && <StyledErrorMsg>{error}</StyledErrorMsg>}
            </StyledLoginForm>
        </StyledLoginPage>
    )
}

