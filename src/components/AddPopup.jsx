import React, { useState } from "react";

export const AddPopup = ({ currentGoal, type, onClose, onAdd }) => {
    const [goalTitle, setGoalTitle] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();

        if (!goalTitle.trim()) {
            return;
        }

        onAdd({ title: goalTitle, type, id: currentGoal?.id ?? "" });
        setGoalTitle("");
    };

    const handleAddAndClose = (e) => {
        e.preventDefault();

        if (!goalTitle.trim()) {
            return;
        }
        onAdd({ title: goalTitle, type, id: currentGoal?.id ?? "" });
        onClose();
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    return (
        <>
            <div>
                <div className='popup-form-section'>
                    <label
                        className='popup-form-section--label'
                        htmlFor='goalTitle'
                    >
                        {capitalizeFirstLetter(type)} Title
                    </label>
                    <input
                        type='text'
                        id='goalTitle'
                        value={goalTitle}
                        onChange={(e) => setGoalTitle(e.target.value)}
                    />
                </div>
                <div className='popup-button-container'>
                    <button className='popup-action-button' onClick={handleAdd}>
                        Add {type}
                    </button>
                    <button
                        onClick={handleAddAndClose}
                        className='popup-action-button'
                    >
                        Add {type} and close
                    </button>
                </div>
            </div>
        </>
    );
};

export default AddPopup;