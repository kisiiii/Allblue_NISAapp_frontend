import * as React from "react";

export function MenuButton() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col p-2 bg-indigo-900 h-[58px] w-[58px]">
        <div className="shrink-0 w-9 border-white border-solid border-[5px] h-[5px]" />
        <div className="shrink-0 mt-2 w-9 border-white border-solid border-[5px] h-[5px]" />
        <div className="shrink-0 mt-1.5 w-9 border-white border-solid border-[5px] h-[5px]" />
        <div className="mt-2">メニュー</div>
      </div>
    </div>
  );
}
