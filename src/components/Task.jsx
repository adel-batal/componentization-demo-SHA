import React from "react";

const Task = ({ title }) => {
    return (
        <div className='task-container'>
            <h3>{title}</h3>
        </div>
    );
};

export default Task;
