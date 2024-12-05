import * as React from "react";

export function FooterButton({ text, type }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`flex items-center justify-center w-24 h-24 bg-indigo-900 text-white rounded-lg ${
          type === "double" ? "text-sm leading-5" : "text-lg leading-normal"
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

export default FooterButton;
