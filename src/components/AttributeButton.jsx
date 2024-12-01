import * as React from "react";

function AttributeButton({ label, isSelected }) {
  return (
    <div className="flex flex-col flex-1">
      <div
        className={`px-12 py-3.5 rounded-[30px] ${
          isSelected
            ? "bg-indigo-200 border-blue-800"
            : "bg-white border-zinc-400"
        } border border-solid`}
      >
        {label}
      </div>
    </div>
  );
}

export default AttributeButton;
