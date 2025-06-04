import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  TouchSensor,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { itineraryData } from "../data/mockData";
import SortableCard from "./SortableCard";

export default function Itinerary() {
  const [items, setItems] = useState(itineraryData);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 5,
      },
    })
  );

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = items.findIndex((item) => item.id === active.id);
      const newIndex = items.findIndex((item) => item.id === over.id);
      setItems(arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <div className="px-4 py-4 md:px-6 md:py-6 mx-auto min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-pink-600">Y2Z TRAVEL</h1>

        <button className="md:hidden text-gray-700 text-2xl">&#9776;</button>
      </div>

      <div className="ml-5">
        <h1 className="text-[22px] text-black font-bold mb-2">Itinerary</h1>
        <p className="text-[12px] text-gray-500 font-bold mb-2">Day</p>
      </div>

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((item) => (
            <SortableCard key={item.id} item={item} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
}
