import React, { useState } from "react";
import Task from "../components/Task/Task";
import AddTaskModal from "../components/AddTaskModal/AddTaskModal";

const Landing = () => {
    // Add Task Modal
    const [isOpenAddTaskModal, setIsOpenAddTaskModal] = useState(false);

    // Add Task Modal open handler
    const addTaskModalOpenHandler = () => setIsOpenAddTaskModal(true);
    const addTaskModalCloseHandler = () => setIsOpenAddTaskModal(false);

    return (
        <section className="w-full h-full flex justify-center">
            <div className="w-full max-w-[1200px] rounded-md max-[600px]:px-4 max-[1200px]:px-6 py-12">
                {/* Top row */}
                <div className="flex flex-row justify-between items-center bg-white py-4 px-6 rounded-md">
                    <h2 className="text-xl md:text-xl lg:text-2xl font-bold capitalize text-tracker-700">
                        my tasks
                    </h2>
                    <div className=" flex justify-end items-center">
                        <button
                            onClick={addTaskModalOpenHandler}
                            className="text-xs md:text-sm capitalize font-semibold tracking-wide px-5 py-1 rounded-sm text-tracker-800 bg-tracker-100 transition-all duration-300 hover:bg-tracker-400 hover:text-white"
                        >
                            <i class="fa-solid fa-plus mr-[5px]"></i>
                            add task
                        </button>
                        <AddTaskModal
                            open={isOpenAddTaskModal}
                            onClose={addTaskModalCloseHandler}
                        />
                    </div>
                </div>

                {/* Card Row */}
                <div className="mt-4 grid grid-cols-1 min-[650px]:grid-cols-2 min-[1000px]:grid-cols-3 justify-between items-center gap-4 py-2 rounded-md">
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </div>
            </div>
        </section>
    );
};

export default Landing;
