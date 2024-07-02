import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-responsive-modal";

const EditTaskModal = ({ open, onClose }) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <Modal
            open={open}
            onClose={onClose}
            center
            closeOnOverlayClick={false}
            classNames={{
                overlay: "editTaskModalCustomOverlay",
                modal: "editTaskModalCustomModal",
            }}
        >
            <div className="">
                <h3 className="capitalize text-center text-tracker-700 font-semibold text-lg md:text-xl lg:text-2xl">
                    Edit task
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
                    {/* Task Status row */}
                    <div className="flex flex-col mt-6">
                        <label
                            htmlFor="title"
                            className="capitalize text-xs font-semibold inline-block mb-2"
                        >
                            Task Status:
                        </label>
                        <select
                            name="status"
                            id="status"
                            className="outline-none border-tracker-200 border-[1px] w-full rounded-[4px] px-[10px] py-[4px] text-sm font-semibold text-black focus:border-tracker-400 transition-all duration-300"
                            defaultValue="none"
                            {...register("status", {
                                required: {
                                    value: true,
                                    message: "Task Status is required",
                                },
                                validate: {
                                    valueType: (value) => {
                                        return (
                                            value !== "none" ||
                                            "Task Status is required"
                                        );
                                    },
                                },
                            })}
                        >
                            <option disabled value="none">
                                Select Option
                            </option>
                            <option value="in-progress">In-progress</option>
                            <option value="complete">Complete</option>
                        </select>

                        {errors?.status && (
                            <span className="capitalize text-[11px] font-semibold inline-block mt-1 text-red-400 tracking-wide">
                                {errors?.status?.message}
                            </span>
                        )}
                    </div>
                    {/* button */}
                    <div className="mt-6 flex justify-center items-center">
                        <button
                            type="submit"
                            className="capitalize font-semibold text-sm bg-tracker-600 text-white px-6 py-2 rounded-sm transition-all duration-300 hover:bg-tracker-800"
                        >
                            Update task
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default EditTaskModal;
