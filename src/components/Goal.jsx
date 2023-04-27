import React from "react";

const Goal = ({ title, onGoalClick }) => {
    return (
        <div className='goal-container' onClick={onGoalClick}>
            <h3>{title}</h3>
        </div>
    );
};

export default Goal;
