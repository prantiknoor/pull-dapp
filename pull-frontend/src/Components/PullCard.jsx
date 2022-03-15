import React from "react";
import "./pullCard.css";

const PullCard = () => {
  return (
    <div className="container">
      <div className="pull-container">
        <div className="pull-header">
          <div className="pull-title">It is the title of the pull</div>
          <div className="item2 ">
            <button className="blue-button">Vote</button>
          </div>
          <div className="pull-owner-address">0x123...89</div>
          <div className="pull-countdown"> 12h 24m</div>
        </div>
        <div className="options">{[PullOption(1), PullOption(1)]}</div>
        <div className="pull-footer">
          <div className="time">12:10 pm, 3 March, 2022</div>
          <div className="vote-count">62 votes</div>
        </div>
      </div>
    </div>
  );
};

const PullOption = (index) => {
  return (
    <div className="option">
      <div className="pull-selection">
      <input type="radio" name="option" id={`selection${index}`} />
        <label>
          1.
        </label>
      </div>
      <div className="fill">
        <div className="slider"></div>
        <div className="content">
          <div>Option</div>
          <div>40%</div>
        </div>
      </div>
    </div>
  );
};

export default PullCard;
