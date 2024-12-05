import React from "react";
import AttributeButton from "./AttributeButton";

export function AttributeSelector({ selectedAttributes, toggleAttribute }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-5 px-4 w-full justify-items-center text-base font-bold leading-none text-center">
      <AttributeButton
        label="年代"
        isSelected={selectedAttributes["年代"]}
        onClick={() => toggleAttribute("年代")}
      />
      <AttributeButton
        label="年収"
        isSelected={selectedAttributes["年収"]}
        onClick={() => toggleAttribute("年収")}
      />
      <AttributeButton
        label="家族構成"
        isSelected={selectedAttributes["家族構成"]}
        onClick={() => toggleAttribute("家族構成")}
      />
      <AttributeButton
        label="投資額"
        isSelected={selectedAttributes["投資額"]}
        onClick={() => toggleAttribute("投資額")}
      />
    </div>
  );
}

export default AttributeSelector;
