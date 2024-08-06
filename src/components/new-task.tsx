import React, { useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const NewTask: React.FC<{ onAddTask: (text: string) => void }> = ({ onAddTask }) => {
  const taskInputRef = useRef<HTMLInputElement>(null);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    const taskText = taskInputRef.current?.value ?? "";
    if (taskText.trim() === "") {
      alert("Please enter a task first");
      return;
    }

    onAddTask(taskText);
    if (taskInputRef.current) taskInputRef.current.value = "";
  };

  return (
    <form onSubmit={handleAddTask} className="flex gap-2">
      <Input
        type="text"
        ref={taskInputRef}
        placeholder="Enter new task"
        className="w-full py-2 px-4 rounded-md bg-stone-100 text-stone-800"
      />
      <Button type="submit" variant="outline">Add</Button>
    </form>
  );
};

export default NewTask;
