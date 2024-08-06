import React from "react";
import { Input as ShadcnInput } from "@/components/ui/input";

type InputProps = {
  type: "text" | "textarea" | "date";
  label: string;
  id: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
};

const Input: React.FC<InputProps> = ({ type, label, id, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-1 text-stone-500 font-bold">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          rows={4} // Specify the number of rows
          className="w-full px-4 py-2 rounded-md bg-stone-100 text-stone-800 resize-none"
        />
      ) : (
        <ShadcnInput
          type={type}
          id={id}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 rounded-md bg-stone-100 text-stone-800"
        />
      )}
    </div>
  );
};

export default Input;
