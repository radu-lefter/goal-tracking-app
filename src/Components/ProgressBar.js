import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";


const StyledBar = styled.div`
background: rgba(188, 156, 255, 0.2);
width: 100%;
height: 13px;
boarder-radius: 2px;
display: flex;
align-items: flex-end;
margin-top: 15px;
`;


const StyledInnerBar = styled.div`
background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
opacity: 100 !important;
height: 100%;
width: ${props => props.percentage}%;
border-radius: 2px;
`;

function ProgressBar(props) {
  const { percentage } = props;

  return (
    <StyledBar>
      <StyledInnerBar percentage={percentage}></StyledInnerBar>
    </StyledBar>
  );
}

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default ProgressBar;