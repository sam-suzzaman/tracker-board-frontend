import React, { useState } from "react";

import EditTaskModal from "../EditTaskModal/EditTaskModal";
import Swal from "sweetalert2";

const Task = () => {
    // Edit Modal
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    // delete task handler
    const taskDeleteHandler = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Task will be deleted permanently and can't be undo.",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancel, Don't delete",
            confirmButtonText: "Yes",
            confirmButtonColor: "#33a440d5",
            cancelButtonColor: "#f54d4de5",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Done",
                    text: "Task removed successfully.",
                    icon: "success",
                    confirmButtonText: "Close",
                    confirmButtonColor: "#ff0088",
                });
            }
        });
    };

    return (
        <div className="bg-white px-4 py-6 rounded-[4px]">
            <span className="text-[11px] font-semibold capitalize bg-orange-100 text-orange-800 px-3 py-[2px] rounded-sm tracking-wide">
                in-progress
            </span>
            <h3 className="text-base md:text-lg lg:text-lg font-semibold text-tracker-800 mt-2">
                Reading Electrical Circuit
            </h3>
            <p className="text-sm md:text-[14px] mt-3 text-justify ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
                reiciendis incidunt facere neque, ducimus assumenda fugiat
                perferendis eligendi minus facilis!
            </p>
            <div className="flex justify-between items-center mt-6">
                <div className="">
                    <button className="text-[11px] font-semibold capitalize bg-green-100 text-green-800 px-3 py-[2px] rounded-sm tracking-wide cursor-pointer hover:bg-green-400  hover:text-white transition-all duration-300">
                        <i class="fa-solid fa-check mr-1"></i>make complete
                    </button>
                </div>
                <div className="flex justify-end items-center gap-[6px]">
                    {/* edit btn */}
                    <button
                        onClick={onOpenModal}
                        className="text-[12px] font-bold capitalize bg-orange-200 text-orange-800 px-2 py-1 rounded-sm tracking-wide cursor-pointer hover:bg-orange-500  hover:text-white transition-all duration-300"
                    >
                        <i class="fa-regular fa-pen-to-square"></i>
                    </button>
                    {/* delete btn */}
                    <button
                        onClick={taskDeleteHandler}
                        className="text-[12px] font-bold capitalize bg-red-100 text-red-700 px-2 py-1 rounded-sm tracking-wide cursor-pointer hover:bg-red-400  hover:text-white transition-all duration-300"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
            <EditTaskModal open={open} onClose={onCloseModal} />
        </div>
    );
};

export default Task;
