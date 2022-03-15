import React from "react";
import "./createPull.css";

const CreatePull = () => {
  return (
    <div className="container">
      <div className="pull-container">
        <div className="pull-title">
          <p>Title</p>
          <input type="text" placeholder="Enter title of your pull..." />
        </div>
        <p>Options</p>
        <div className="pull-options">{[Option(1), Option(2)]}</div>
        <button id="add-button">add more option + </button>
        <p>Duration</p>
        <div className="duration-input">
            <input className="dur-input" type="number" placeholder="00"/>
            minutes
            <input className="dur-input" type="number" placeholder="00"/>
            hours
            <input className="dur-input" type="number" placeholder="00"/>
            days
        </div>
        <button className="blue-button">Create Pull</button>
        <p id="pull-charge">Pull Creation charge: <b>0.1 ether</b></p>
      </div>
    </div>
  );
};

const Option = (index) => {
  return (
    <div className="option">
      {index}.{" "}
      <input
        id={`option${index}`}
        type="text"
        placeholder="Enter your option..."
      />
    </div>
  );
};

export default CreatePull;
