import React from "react";

const PopupContainer = ({ onClose, title, children }) => {
    const handleInnerClick = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            <div onClick={onClose} className='popup'>
                <div onClick={handleInnerClick} className='popup-inner'>
                    <div className='popup-header'>
                        <h2>{title || "Popup"}</h2>
                        <div className='popup-close-button' onClick={onClose}>
                            ×
                        </div>
                    </div>
                    {children || (
                        <div className='popup-empty-state'>Nothing to show</div>
                    )}
                </div>
            </div>
        </>
    );
};

export default PopupContainer;
