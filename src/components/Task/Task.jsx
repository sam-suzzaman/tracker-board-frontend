import React, { useState } from "react";

import EditTaskModal from "../EditTaskModal/EditTaskModal";
import Swal from "sweetalert2";
import { useDeleteTaskMutation } from "../../redux/features/api/baseAPI";

const Task = ({ data }) => {
    // Edit Modal
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    // delete task mutation
    const [
        deleteTask,
        {
            data: deleteData,
            isLoading: deleteLoading,
            isError: deleteError,
            error: deleteErrorMsg,
        },
    ] = useDeleteTaskMutation();

    // delete task handler
    const taskDeleteHandler = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "Task will be deleted permanently and can't be undo.",
            icon: "warning",
            showCancelButton: true,
            cancelButtonText: "Cancel, Don't delete",
            confirmButtonText: "Yes",
            confirmButtonColor: "#33a440d5",
            cancelButtonColor: "#f54d4de5",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteTask(id);
                console.log(res);
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
                {data?.status}
            </span>
            <h3 className="text-base md:text-lg lg:text-lg font-semibold text-tracker-800 mt-2">
                {data?.title}
            </h3>
            <p className="text-sm md:text-[14px] mt-3 text-justify ">
                {data?.description}
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
                    <EditTaskModal
                        open={open}
                        onClose={onCloseModal}
                        data={data}
                    />
                    {/* delete btn */}
                    <button
                        onClick={() => taskDeleteHandler(data?._id)}
                        className="text-[12px] font-bold capitalize bg-red-100 text-red-700 px-2 py-1 rounded-sm tracking-wide cursor-pointer hover:bg-red-400  hover:text-white transition-all duration-300"
                    >
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Task;
