import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


const StyledDiv = styled.div`
border-radius: 11px;
border: 1px solid ${({ theme }) => theme.colors.purple};
width: 40px;
height: 20px;
display: flex;
justify-content: center;
align-items: center;
color: ${({ theme }) => theme.colors.purple};
`;

function LikeButton(props) {

  
    return (
      <StyledDiv>
        <h6>
          <FontAwesomeIcon style={{ fontSize: '12px' }} icon={faHeart} /> 12{' '}
        </h6>
      </StyledDiv>
    );
  }

  export default LikeButton