"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const PaginationScreen = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  const pages = [
    { id: 1, content: "Page 1 content" },
    { id: 2, content: "Page 2 content" },
    { id: 3, content: "Page 3 content" },
  ]

  return (
    // <div className=" h-screen flex flex-col p-4">
    //   <div className=" h-full flex-grow max-w-md mx-auto">
    //     <div className=" h-full">
    //       <AnimatePresence initial={false} custom={currentPage}>
    //         <motion.div
    //           key={currentPage}
    //           initial="enter"
    //           animate="center"
    //           exit="exit"
    //           custom={currentPage}
    //           variants={{
    //             enter: (direction) => {
    //               return {
    //                 // x: direction > 0 ? "100%" : "-100%",
    //                 opacity: 0,
    //               }
    //             },
    //             center: {
    //               x: 0,
    //               opacity: 1,
    //             },
    //             exit: (direction) => {
    //               return {
    //                 // x: direction > 0 ? "-100%" : "100%",
    //                 opacity: 0,
    //               }
    //             },
    //           }}
    //           transition={{
    //             x: { type: "spring", stiffness: 300, damping: 30 },
    //             opacity: { duration: 0.2 },
    //           }}
    //           className=" h-full flex justify-center items-center "
    //         >
    //           <div className="bg-white  h-full border border-red-500 p-8 rounded-lg shadow-md">
    //             {pages.find((page) => page.id === currentPage)?.content}
    //           </div>
    //         </motion.div>
    //       </AnimatePresence>
    //     </div>
    //   </div>
    //   <div className="flex justify-center p-4 none">
    //     <button
    //       disabled={currentPage === 1}
    //       onClick={prevPage}
    //       className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md mr-2"
    //     >
    //       Previous
    //     </button>
    //     <button
    //       disabled={currentPage === pages.length}
    //       onClick={nextPage}
    //       className="px-4 py-2 bg-blue-500 text-white rounded-md    pb-3  text-center text-zinc-800 font-bold leading-5 flex align-middle gap-2"
    //     >
    //       Next
    //     </button>
    //   </div>
    // </div>
    <div className="flex flex-col w-screen h-screen overflow-hidden">
      <div className="h-full flex-grow p-4">
        <div className="relative h-full w-full p-9 bg-blue-500 flex justify-center">
          <AnimatePresence initial={false} custom={currentPage}>
            <motion.div
              key={currentPage}
              initial="enter"
              animate="center"
              exit="exit"
              custom={currentPage}
              variants={{
                enter: (direction) => {
                  return {
                    x: direction > 0 ? "100%" : "-100%",
                    opacity: 0,
                  }
                },
                center: {
                  x: 0,
                  opacity: 1,
                },
                exit: (direction) => {
                  return {
                    x: direction > 0 ? "-100%" : "100%",
                    opacity: 0,
                  }
                },
              }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute bg-red-500 w-[93%] h-[83%] overflow-hidden"
            >
              <div className="bg-white rounded-lg h-full w-full">
                {pages.find((page) => page.id === currentPage)?.content}
              </div>
            </motion.div>
          </AnimatePresence>
          {/* <div className="">Thanh</div> */}
        </div>
      </div>
      <div className="flex justify-center p-4 z-10 flex-none">
        <button
          disabled={currentPage === 1}
          onClick={prevPage}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md mr-2 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          disabled={currentPage === pages.length}
          onClick={nextPage}
          className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default PaginationScreen
