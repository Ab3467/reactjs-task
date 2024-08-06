import React from 'react';
import { Task as TaskType } from '../components/types';
import { Button } from './ui/button'; 

type TaskProps = {
  task: TaskType;
  onDeleteTask: (id: number) => void;
}

const Tasks: React.FC<TaskProps> = ({ task, onDeleteTask }) => {
  return (
    <li className="flex items-center justify-between p-4 bg-gray-100 rounded-md shadow-md">
      <span className="text-gray-800">{task.text}</span>
      <Button 
        onClick={() => onDeleteTask(task.id)} 
        variant="outline" 
        size="default"
        className="text-red-500 hover:bg-red-100"
      >
        Clear
      </Button>
    </li>
  );
};

export default Tasks;