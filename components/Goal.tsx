import React, { useState, useRef, useEffect } from "react"

const Goal = () => {
    return (
        <div className="w-4/12 relative -rotate-12 hover:scale-110  hover:rotate-6 transition-all">
            <img
                draggable={false}
                src="goal.png"
                alt=""
                className="border-2 border-sub rounded-md shadow-2xl shadow-black "
            />
            {/*     CURSOR   */}
            <div className="absolute w-3 h-5 bg-white/80 top-[76%] left-[14%]  cursor "></div>
        </div>
    )
}

export default Goal
