import React from "react";
import Modal from "react-responsive-modal";

import { useForm } from "react-hook-form";
import { useAddTaskMutation } from "../../redux/features/api/baseAPI";
import Swal from "sweetalert2";

const AddTaskModal = ({ open, onClose }) => {
    // add post mutation
    const [addTask, { data, isLoading, isError, error }] = useAddTaskMutation();

    // form hook
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm();

    // form submission handler
    const onSubmit = async (data) => {
        const res = await addTask(data);
        if (res?.data?.status) {
            onClose();
            Swal.fire({
                title: "Done",
                text: "Task Added",
                icon: "success",
                confirmButtonColor: "#33a440d5",
            });
            reset();
        } else {
            Swal.fire({
                title: "Something wrong",
                text: "Failed to add task",
                icon: "error",
                confirmButtonColor: "#33a440d5",
            });
        }
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            center
            closeOnOverlayClick={false}
            classNames={{
                overlay: "addTaskModalCustomOverlay",
                modal: "addTaskModalCustomModal",
            }}
        >
            <div className="">
                <h3 className="capitalize text-center text-tracker-700 font-semibold text-lg md:text-xl lg:text-2xl">
                    Add task
                </h3>
                <form
                    className="mt-8"
                    onSubmit={handleSubmit(onSubmit)}
                    autoComplete="off"
                >
                    {/* Title row */}
                    <div className="flex flex-col">
                        <label
                            htmlFor="title"
                            className="capitalize text-xs font-semibold inline-block mb-2"
                        >
                            Task title:
                        </label>
                        <input
                            type="text"
                            id="title"
                            className="outline-none border-tracker-200 border-[1px] w-full rounded-[4px] px-[10px] py-[4px] text-sm font-semibold text-black focus:border-tracker-400 transition-all duration-300"
                            {...register("title", {
                                required: {
                                    value: true,
                                    message: "Task must have a title.",
                                },
                                maxLength: {
                                    value: 100,
                                    message: "Too long (max 100char)",
                                },
                                minLength: {
                                    value: 5,
                                    message: "Too short (min 5char)",
                                },
                            })}
                        />
                        {errors?.title && (
                            <span className="capitalize text-[11px] font-semibold inline-block mt-1 text-red-400 tracking-wide">
                                {errors?.title?.message}
                            </span>
                        )}
                    </div>
                    {/* desc row */}
                    <div className="flex flex-col mt-6">
                        <label
                            htmlFor="des"
                            className="capitalize text-xs font-semibold inline-block mb-2"
                        >
                            Task Description:
                        </label>
                        <textarea
                            type="text"
                            id="des"
                            className="outline-none border-tracker-200 border-[1px] w-full rounded-[4px] px-[10px] py-[4px] text-sm font-semibold text-black focus:border-tracker-400 transition-all duration-300"
                            {...register("description", {
                                required: {
                                    value: true,
                                    message: "Task must have a description",
                                },
                                maxLength: {
                                    value: 250,
                                    message: "Too long (max 250char)",
                                },
                                minLength: {
                                    value: 10,
                                    message: "Too short (min 10char)",
                                },
                            })}
                        />
                        {errors?.description && (
                            <span className="capitalize text-[11px] font-semibold inline-block mt-1 text-red-400 tracking-wide">
                                {errors?.description?.message}
                            </span>
                        )}
                    </div>
                    {/* button */}
                    <div className="mt-6 flex justify-center items-center">
                        <button
                            type="submit"
                            className="capitalize font-semibold text-sm bg-tracker-600 text-white px-6 py-2 rounded-sm transition-all duration-300 hover:bg-tracker-800 disabled:cursor-not-allowed"
                            disabled={isLoading}
                        >
                            {isLoading ? "Loading..." : " add task"}
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default AddTaskModal;
