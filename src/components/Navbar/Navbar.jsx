import React from "react";

const Navbar = () => {
    return (
        <nav className="flex justify-center items-start w-full shadow-md bg-white">
            <div className="flex justify-center items-center w-full max-w-[1200px] h-[50px] px-4">
                <h1
                    className="brand text-lg md:text-lg lg:text-xl capitalize font-bold tracking-wider text-tracker-500"
                    title="traker board"
                >
                    <span className="text-2xl md:text-2xl lg:text-3xl mr-[3px]">
                        T.
                    </span>
                    Board
                </h1>
            </div>
        </nav>
    );
};

export default Navbar;
