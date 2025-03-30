import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Question({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col gap-6 border-b border-[#CECECE] py-10">
            <div className="flex justify-between items-center">
                <label className="font-medium text-xl">{question}</label>

                <button onClick={() => setIsOpen(!isOpen)} className="w-5 h-5">
                    <img src={isOpen ? "/minus.svg" : "/plus.svg"} />
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
