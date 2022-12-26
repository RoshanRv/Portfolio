import React, { useState, useRef, useEffect } from "react"

const Goal = () => {
    return (
        <div className="relative w-10/12 transition-all md:w-4/12 -rotate-12 hover:scale-110 hover:rotate-6">
            <img
                draggable={false}
                src="goal.png"
                alt=""
                className="border-2 rounded-md shadow-2xl border-sec shadow-black "
            />
            {/*     CURSOR   */}
            <div className="absolute w-3 h-5 bg-white/80 top-[76%] left-[14%]  cursor "></div>
        </div>
    )
}

export default Goal
