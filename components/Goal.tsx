import { motion } from "framer-motion"

const Goal = () => {
    return (
        <motion.div
            initial={{ scale: 0 }}
            whileInView={{ rotate: -12, scale: 0.95 }}
            whileHover={{ scale: 1.15, rotate: 12 }}
            transition={{ duration: 0.05, type: "spring", bounce: 1 }}
            className="relative w-10/12 transition-all md:w-4/12 -rotate-12 hover:rotate-6"
        >
            <img
                draggable={false}
                src="goal.png"
                alt=""
                className="border-2 rounded-md shadow-2xl border-sec shadow-black "
            />
            {/*     CURSOR   */}
            <div className="absolute w-2 md:w-3 h-4 md:h-5 bg-white/80 top-[76%] left-[14%]  cursor "></div>
        </motion.div>
    )
}

export default Goal
