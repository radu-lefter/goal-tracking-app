import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Bar from "./Bar";

const StyledHistogram = styled.div`
    display: flex;
    justify-content: space-around;
  `;


function Histogram(props) {
  const { bars, barCount } = props;

  return (
    <StyledHistogram>
      {bars.map((b, i) => (i <= barCount ? <Bar key={i} percentage={b} /> : ""))}
    </StyledHistogram>
  );
}

Histogram.propTypes = {
  bars: PropTypes.array.isRequired,
  barCount: PropTypes.number.isRequired
};

export default Histogram;