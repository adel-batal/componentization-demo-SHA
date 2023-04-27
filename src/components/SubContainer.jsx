import React from "react";
import Task from "./Task";
import Goal from "./Goal";

const SubContainer = ({
    type,
    title,
    listItems,
    emptyStateText,
    onAddClick,
    disableAdd,
    onItemClick,
}) => {
    return (
        <div className='sub-container'>
            <div className='sub-container-header'>
                <h2>{listItems && title}</h2>
                <div
                    onClick={onAddClick}
                    className={
                        "action-button" + (disableAdd ? " disabled" : "")
                    }
                >
                    +
                </div>
            </div>
            {listItems.length !== 0 ? (
                <div className='item-list'>
                    {listItems.map((item) =>
                        type === "task" ? (
                            <div key={item.id}>
                                <Task {...item} />
                            </div>
                        ) : (
                            <div
                                onClick={() => onItemClick(item)}
                                key={item.id}
                            >
                                <Goal {...item} />
                            </div>
                        )
                    )}
                </div>
            ) : (
                <div className='no-tasks'>
                    {emptyStateText || "No Items yet"}
                </div>
            )}
        </div>
    );
};

export default SubContainer;
