import React, { useState, useEffect } from "react";
import { v4 as id } from "uuid";
import PopupContainer from "./components/PopupContainer";
import AddPopup from "./components/AddPopup";
import SubContainer from "./components/SubContainer";

function App() {
    const [currentGoals, setCurrentGoals] = useState([]);
    const [currentGoal, setCurrentGoal] = useState(currentGoals[0] ?? null);
    const [showAddPopup, setShowAddPopup] = useState({
        flag: false,
        type: "",
    });

    useEffect(() => {
        const storedGoals = JSON.parse(localStorage.getItem("goals"));
        setCurrentGoals(storedGoals ?? []);
    }, []);

    const handleGoalClick = (goal) => {
        setCurrentGoal(goal);
    };

    const handleAdd = ({ type, title }) => {
        if (type === "goal") {
            const newGoals = [
                ...currentGoals,
                {
                    id: id(),
                    title,
                    tasks: [],
                },
            ];
            setCurrentGoals(newGoals);
            localStorage.setItem("goals", JSON.stringify(newGoals));

        }
        if (type === "task") {
            const newGoals = currentGoals.map((goal) => {
                if (goal.id === currentGoal.id) {
                    return {
                        ...goal,
                        tasks: [
                            ...goal.tasks,
                            {
                                id: id(),
                                title,
                            },
                        ],
                    };
                }
                return goal;
            });
            setCurrentGoals(newGoals);
            setCurrentGoal(newGoals.find((goal) => goal.id === currentGoal.id));
            localStorage.setItem("goals", JSON.stringify(newGoals));
        }
    };

    const handleClosePopup = () => {
        setShowAddPopup({ flag: false, type: "" });
    };

    return (
        <>
            <div className='main-container'>
                <SubContainer
                    type='goal'
                    title='Goals'
                    listItems={currentGoals}
                    emptyStateText='No Goals yet'
                    onAddClick={() =>
                        setShowAddPopup({
                            flag: true,
                            type: "goal",
                        })
                    }
                    onItemClick={handleGoalClick}
                />
                <SubContainer
                    type='task'
                    title={currentGoal ? currentGoal.title + " tasks" : 'Tasks'}
                    listItems={currentGoal?.tasks ?? []}
                    emptyStateText={
                        currentGoal
                            ? currentGoal &&
                              currentGoal.title + " has no tasks yet"
                            : "Select a goal to see its tasks"
                    }
                    onAddClick={() =>
                        setShowAddPopup({
                            flag: true,
                            type: "task",
                        })
                    }
                    disableAdd={!currentGoal}
                />
            </div>
            {showAddPopup.flag && (
                <PopupContainer
                    onClose={handleClosePopup}
                    title='Components'
                >
                    <AddPopup
                        currentGoal={currentGoal}
                        type={showAddPopup.type}
                        onClose={handleClosePopup}
                        onAdd={handleAdd}
                    />
                </PopupContainer>
            )}
        </>
    );
}

export default App;
