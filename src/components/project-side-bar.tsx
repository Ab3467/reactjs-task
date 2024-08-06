import React from "react";
import { Button } from "./ui/button";
import {Project} from "../components/types"
import { twMerge } from 'tailwind-merge'; // Import twMerge

type ProSideBarProps = {
  onSelectProject: (id: number) => void;
  onStartAddProject: () => void;
  projects: Project[];
  selectedProId: number | null | undefined;
}

const ProjectSideBar: React.FC<ProSideBarProps> = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          const cssClasses = twMerge(
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-stone-800 hover:text-stone-200",
            project.id === selectedProId && "bg-stone-800 text-stone-200",
            project.id !== selectedProId && "text-stone-400"
          );

          return (
            <li key={project.id}>
              <div
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSideBar;