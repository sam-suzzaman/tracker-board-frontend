import React, { useEffect, useState } from "react";
import Task from "../components/Task/Task";
import AddTaskModal from "../components/AddTaskModal/AddTaskModal";
import { useSelector } from "react-redux";
import { useGetAllTasksQuery } from "../redux/features/api/baseAPI";

const statusTypes = [
    {
        id: 1,
        title: "All",
        value: "all",
    },
    {
        id: 2,
        title: "In-progress",
        value: "in-progress",
    },
    {
        id: 3,
        title: "Complete",
        value: "Complete",
    },
];
const Landing = () => {
    // Task state
    // const { tasks } = useSelector((state) => state);

    const [selectedStatus, setSelectedStatus] = useState("all");
    const [searchString, setSearchString] = useState("");

    // Add Task Modal
    const [isOpenAddTaskModal, setIsOpenAddTaskModal] = useState(false);

    // Fetching task data
    const {
        data: tasksData,
        isLoading: tasksLoading,
        isError,
        error,
    } = useGetAllTasksQuery(searchString);

    // setting search text
    useEffect(() => {
        if (selectedStatus === "all") {
            setSearchString("");
        } else if (selectedStatus === "in-progress") {
            setSearchString = "in-progress";
        } else if (selectedStatus === "complete") {
            setSearchString = "complete";
        }
    }, [selectedStatus]);

    // Add Task Modal open handler
    const addTaskModalOpenHandler = () => setIsOpenAddTaskModal(true);
    const addTaskModalCloseHandler = () => setIsOpenAddTaskModal(false);

    return (
        <section className="w-full h-full flex justify-center">
            <div className="w-full max-w-[1200px] rounded-md max-[600px]:px-4 max-[1200px]:px-6 py-12">
                {/* Top row */}
                <div className="flex flex-row justify-between items-center bg-white py-4 px-6 rounded-md">
                    <h2 className="text-xl md:text-xl lg:text-2xl font-bold capitalize text-tracker-700">
                        tasks List
                    </h2>
                    <div className=" flex justify-end items-center">
                        <button
                            onClick={addTaskModalOpenHandler}
                            className="text-xs md:text-sm capitalize font-semibold tracking-wide px-5 py-2 rounded-sm text-tracker-800 bg-tracker-100 transition-all duration-300 hover:bg-tracker-400 hover:text-white"
                        >
                            <i class="fa-solid fa-plus mr-[5px]"></i>
                            add task
                        </button>
                        <AddTaskModal
                            open={isOpenAddTaskModal}
                            onClose={addTaskModalCloseHandler}
                        />

                        {/* filter button */}
                        <div className="relative group">
                            <button
                                className="text-xs md:text-sm capitalize font-semibold tracking-wide px-3 sm:px-5 py-2 rounded-sm text-tracker-800 bg-tracker-100 transition-all duration-300 hover:bg-tracker-400 hover:text-white ml-1"
                                title="filter"
                            >
                                <i class="fa-solid fa-filter mr-[5px]"></i>
                                <span className="hidden sm:inline-block">
                                    filter
                                </span>
                            </button>
                            <div className="absolute top-[60px] right-0 opacity-0 mt-1 py-1 rounded-sm  bg-tracker-100 w-[110px] flex flex-col group-hover:top-full group-hover:opacity-100 transition-all duration-300">
                                {statusTypes.map((value) => (
                                    <button
                                        className={`text-xs font-semibold text-left px-2 py-1 mb-1 bg-[#fff0f0] transition-all duration-300 hover:text-tracker-900 hover:bg-tracker-200 ${
                                            value.value == selectedStatus
                                                ? "text-[#fff] bg-tracker-300"
                                                : "text-black"
                                        }`}
                                        key={value.id}
                                        onClick={() =>
                                            setSelectedStatus(value.value)
                                        }
                                    >
                                        {value.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card Row */}
                {tasksLoading ? (
                    <div className="mt-4  py-2 rounded-md">
                        <h6 className="text-center text-sm md:text-base lg:text-lg capitalize text-tracker-300 font-semibold tracking-wider">
                            loading...
                        </h6>
                    </div>
                ) : (
                    <div className="mt-4 grid grid-cols-1 min-[650px]:grid-cols-2 min-[1000px]:grid-cols-3 justify-between items-center gap-4 py-2 rounded-md">
                        {tasksData?.result?.map((t) => (
                            <Task data={t} key={t._id} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Landing;
