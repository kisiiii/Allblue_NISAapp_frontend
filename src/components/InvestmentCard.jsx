import * as React from "react";

export function InvestmentCard({ type, amount, total, chartSrc }) {
  return (
    <div className="flex flex-col items-center max-w-full w-[170px]">
      <div className="ml-3 text-sm">{type}</div>
      <div className="mt-2 text-base">{amount}円</div>
      <div className="mt-2 text-sm text-zinc-800">{total}円</div>
      <img
        loading="lazy"
        src={chartSrc}
        alt={`${type} chart`}
        className="object-contain self-stretch mt-5 w-full aspect-[1.07]"
      />
    </div>
  );
}

export default InvestmentCard;
