import React from "react";
import PropTypes from "prop-types";
import Tile from "./Tile";
import Histogram from "./Histogram";
import ProgressBar from "./ProgressBar";
import styled from "styled-components";


const StyledDaysCompleteHeading = styled.h2`
    text-align: center;
    color: ${ props => props.theme.colors.purple};
  `;

  const StyledRootDiv = styled.div`
    display: grid;
    grid-template-columns: 0.8fr;
    gridTemplateRows: 55px 80px 20px auto;
    justify-content: center;
  `;

  const StyledGoalHeading = styled.h4`
    color: #1f2041;
  `;

function DaysCompleted(props) {
  const { days, shownData, shownDays } = props;
  const percent = days/30 * 100;
  //console.log(shownData);
  
  return (
    <Tile>
      <StyledRootDiv>
        <StyledDaysCompleteHeading> {days} Days Completed! </StyledDaysCompleteHeading>
        <Histogram barCount={shownDays} bars={shownData.map(c => c.score * 5)} />
        <ProgressBar percentage= {percent} />
        <StyledGoalHeading>
          <strong>{100 - Math.round(percent)}%</strong> TO <br /> GOAL!
        </StyledGoalHeading>
      </StyledRootDiv>
    </Tile>
  );
}

DaysCompleted.propTypes = {
  days: PropTypes.number,
  shownData: PropTypes.array.isRequired
};

DaysCompleted.defaultProps = {
  days: 0
};

export default DaysCompleted;