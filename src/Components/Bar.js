import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledBar = styled.div`
background: linear-gradient(
  180deg,
  rgba(56, 149, 95, 0.25),
  rgba(102, 210, 234, 0.25)
);
width: 30px;
height: 70.74px;
border-radius: 2px;
display: flex;
align-items: flex-end;
`;

const StyledInnerBar = styled.div`
background: linear-gradient(
  180deg,
  rgba(56, 149, 95, 1),
  rgba(102, 210, 234, 0.5)
);
opacity: 100 !important;
height: ${props => props.height + "%"};
width: 100%;
border-radius: 1px;
`;

function Bar(props) {
  const { percentage } = props;

  return (
    <StyledBar>
      <StyledInnerBar height={percentage}> </StyledInnerBar>
    </StyledBar>
  );
}

Bar.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default Bar;