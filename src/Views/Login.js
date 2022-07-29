import React, { useState } from 'react';
import styled from 'styled-components';
import Tile from '../Components/Tile';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../Components/Input';
import Button from '../Components/Button';
import Label from '../Components/Label';
import { SocialIcon } from 'react-social-icons';
import { useUserAuth } from '../config/UserAuthContext';
//import Form from "../Components/LoginForm";

const StyledWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
min-width: 100vw;
`;

const StyledTile = styled(Tile)`
display: grid;
grid-template-columns: repeat(1, 1fr);
justify-content: center;
grid-row-gap: 20px;
width: 100%;
@media (min-width: 600px) {
  width: 30%;
}
`;

const StyledHeading = styled.h2`
text-align: center;
margin-top: 2%;
color: ${({ theme }) => theme.colors.purple};
`;
const StyledLink = styled(Link)`
text-align: center;
`;

const StyledSocialIconArea = styled.div`
display: flex;
justify-content: space-around;
`;


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };


  return (
    <StyledWrapper>
      <StyledTile>
  
        <StyledHeading>Login With </StyledHeading>
        <StyledSocialIconArea>
          <SocialIcon network="facebook" />
          <SocialIcon network="google" onClick={handleGoogleSignIn} />
          <SocialIcon network="twitter" />
        </StyledSocialIconArea>
        <StyledHeading> OR </StyledHeading>
        <Button text="Email" />
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <p>
            <Label> Email </Label>
          </p>
          <p>
            <Input
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <Label> Password </Label>
          </p>
          <p>
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          <Button text={'Loggin'} />
        </form>
        <StyledLink to="/join"> Not a member - Join </StyledLink>
      </StyledTile>
    </StyledWrapper>
  );
}

export default Login;