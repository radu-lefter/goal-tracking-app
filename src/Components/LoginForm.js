import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Components/Input';
import Button from '../Components/Button';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';
import Label from './Label';
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../config/UserAuthContext";

const StyledHeading = styled.h2`
  text-align: center;
  margin-top: 2%;
  color: ${({ theme }) => theme.colors.purple};
`;

const StyledSocialIconArea = styled.div`
  display: flex;
  justify-content: space-around;
`;

function LoginForm(props) {
  const { buttonText } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <React.Fragment>
      <StyledSocialIconArea>
        <SocialIcon network="facebook" />
        <SocialIcon network="google" />
        <SocialIcon network="twitter" />
      </StyledSocialIconArea>
      <StyledHeading> OR </StyledHeading>
      <Button text="Email" />
      {error && <p >{error}</p>}
      <form onSubmit={handleSubmit}>
        <p>
          <Label> Email </Label>
        </p>
        <p>
          <Input type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)} />
        </p>
        <p>
          <Label> Password </Label>
        </p>
        <p>
          <Input type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)} />
        </p>
        <Button text={buttonText} />
      </form>
    </React.Fragment>
  );
}

LoginForm.propTypes = {
  buttonText: PropTypes.string,
};

LoginForm.defaultProps = {
  buttonText: 'JOIN',
};

export default LoginForm;
