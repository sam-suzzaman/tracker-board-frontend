import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="flex justify-center items-center bg-[#ffe3f2]">
            <div className="flex justify-center items-center w-full max-w[1200px] px-4 py-3">
                <p className="text-xs md:text-sm capitalize tracking-wide">
                    All &copy;copyrights reserverd by
                    <span className="font-semibold mx-[3px] text-tracker-500">
                        Bytebox
                    </span>
                    - {year}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
