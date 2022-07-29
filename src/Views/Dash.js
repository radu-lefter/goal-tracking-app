import React from "react";
import PropTypes from "prop-types";
import DaysCompleted from "../Components/DaysCompleted";
import CheckinComment from "../Components/CheckinComment";
import Header from "../Components/Header";


function Dash(props) {

  const {checkins} = props;
  const shownDays = 8;
  const shownData = checkins.slice(0, shownDays).reverse()
  

  return (
    <div>
      <Header />
      <DaysCompleted days={checkins.length} shownData={shownData} shownDays={shownDays}>
      </DaysCompleted>
      <CheckinComment days={checkins.length} shownData={shownData} shownDays={shownDays}/>
    </div>
  );
}

Dash.propTypes = {
  checkins: PropTypes.array.isRequired
};

export default Dash;