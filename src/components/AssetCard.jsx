import * as React from "react";

export function AssetCard() {
  return (
    <div className="flex flex-col items-center pt-3 pb-11 mt-3 font-bold text-center whitespace-nowrap bg-white rounded-md">
      <div className="text-xl text-black w-[251px]">
        運用収益額
        <br />
        1,500,000円
      </div>
      <div className="shrink-0 self-stretch mt-1 h-px border border-solid border-zinc-400" />
      <div className="mt-10 text-base text-indigo-900">
        +500,000円（+50.0％）
      </div>
      <div className="shrink-0 mt-2 max-w-full h-px border border-solid border-zinc-400 w-[312px]" />
    </div>
  );
}

export default AssetCard;
