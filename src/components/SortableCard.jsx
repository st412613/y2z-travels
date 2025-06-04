import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableCard({ item }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: item.id,
    });

  const [showAddInput, setShowAddInput] = useState(false);
  const [task, setTask] = useState("");

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || "transform 300ms ease",
  };

  const handleAddTask = () => {
    console.log(`Added task "${task}" for ${item.title}`);
    setTask("");
    setShowAddInput(false);
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className=" bg-white shadow-md rounded-xl p-2 md:p-4 mb-4 flex flex-col gap-1 md:gap-3 cursor-grab active:cursor-grabbing"
    >
      <div className="flex gap-3 items-start">
        <div className="text-black-400 pt-1 m-auto md:pt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 7h16M4 17h16"
            />
          </svg>
        </div>

        <div className="flex md:flex-row gap-2 md:gap-4 items-start w-full">
          <div className="relative w-18 h-18 md:w-24 md:h-24 shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full rounded-md"
            />
            <div className="absolute top-5 right-12.5 md:right-18.5 bg-opacity-80 rounded-full p-1 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-9 w-9"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#c64dff"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              </svg>
              <span className="absolute text-[10px] text-white font-bold">
                {item.order}
              </span>
            </div>
          </div>

          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-700 flex items-center justify-between mt-2 md:mt-0 mb-2 ml-2">
              <span className="text-base md:text-lg">{item.title}</span>
              <div className="flex items-center space-x-2">
                <img
                  src="/google-map-icon.svg"
                  alt="Location"
                  className="h-4 w-4 object-contain mr-4"
                />
                <img
                  src="/attachment.png"
                  alt="Attachment"
                  className="h-4 w-4 object-contain mr-4 hidden md:inline"
                />
                <img
                  src="/delete.png"
                  alt="delete"
                  className="h-4 w-4 object-contain mr-1 hidden md:inline"
                />

                <img
                  src="/threedot.png"
                  alt="Menu"
                  className="h-4 w-4 object-contain md:hidden"
                />
              </div>
            </div>

            <div className="flex mt-2 gap-2 text-gray-500 text-sm ml-2">
              <span>{item.rating}</span>
              <span className="flex items-center justify-center">
                <img
                  src="/star.png"
                  alt="Location"
                  className="h-4 w-4 object-contain"
                />
              </span>
              <span>({item.reviews.toLocaleString()})</span>
            </div>

            <div className="hidden md:flex items-center rounded-md bg-[#f8f9fa] px-2 py-1 mt-2">
              <div className="w-[95%]">
                <h3 className="text-[14px] text-black-500">
                  {item.description}
                </h3>
              </div>
              <div className="w-[5%] flex justify-end">
                <img
                  src="/pencil-icon.svg"
                  alt="Edit"
                  className="h-4 w-4 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:hidden items-center rounded-md bg-[#f8f9fa] px-2 py-1 mt-2 ml-7">
        <div className="w-[90%]">
          <h3 className="text-[14px] text-black-500">{item.description}</h3>
        </div>
        <div className="w-[10%] flex justify-end">
          <img
            src="/pencil-icon.svg"
            alt="Edit"
            className="h-4 w-4 object-contain"
          />
        </div>
      </div>

      {item.title === "Red Fort" && (
        <div className="flex gap-1">
          <div
            className="ml-8 pt-3 pb-3 pl-2 pr-2 rounded-md"
            style={{
              borderWidth: "1px",
              borderColor: "#d1d5db",
              borderRadius: "1rem",
              borderDashArray: "18",
            }}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <img
                  src="/msdoc.svg"
                  alt="MS Word"
                  className="h-5 w-5 object-contain"
                />
                <span className="text-sm text-gray-700 font-medium">
                  Credit...
                </span>

                <img
                  src="/threedot.png"
                  alt="More"
                  className="h-4 w-4 object-contain"
                />
              </div>
            </div>
          </div>

          <div
            className="ml-8 pt-3 pb-3 pl-10 pr-10 rounded-md m-auto"
            style={{
              borderStyle: "dashed",
              borderWidth: "1.5px",
              borderColor: "#d1d5db",
              borderRadius: "1rem",
              borderDashArray: "18",
            }}
          >
            {showAddInput ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  className="border rounded px-2 py-1 text-sm flex-1"
                  placeholder="Enter task"
                />
                <button
                  onClick={handleAddTask}
                  className="bg-blue-500 text-white text-sm px-4 py-2 rounded"
                >
                  Add
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowAddInput(true)}
                className="flex items-center justify-center w-fit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="grey"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
