import * as React from "react";

export function AttributeButton({ label, isSelected, onClick }) {
  return (
    <button
      className={`flex items-center justify-center 
                  px-6 h-12 w-full max-w-[150px] 
                  rounded-full border 
                  ${
                    isSelected
                      ? "bg-indigo-200 border-blue-800 text-blue-800"
                      : "bg-gray-200 border-gray-400 text-gray-600 hover:bg-gray-300"
                  } 
                  text-sm`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default AttributeButton;
