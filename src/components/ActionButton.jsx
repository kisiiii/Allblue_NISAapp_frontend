import * as React from "react";

export function ActionButton({ text, type }) {
  return (
    <div className="flex flex-col">
      <div
        className={`px-3 w-20 h-20 bg-indigo-900 rounded-lg ${
          type === "double" ? "text-xs leading-5" : ""
        }`}
        role="button"
        tabIndex={0}
      >
        {text.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < text.split("\n").length - 1 && <br />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
