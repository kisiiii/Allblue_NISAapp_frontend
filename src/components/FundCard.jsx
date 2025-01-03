import * as React from "react";

export function FundCard({ funds }) {
  return (
    <div className="flex flex-col py-5 pr-5 pl-5 mt-3 w-full text-sm font-bold leading-none text-left text-black bg-white rounded-md">
      {(funds || []).map((fund, index) => (
        <div key={index} className={`flex flex-col ${index > 0 ? "mt-5" : ""}`}>
          <div className="flex flex-wrap items-center gap-2 border-b pb-4 border-solid border-zinc-400">
            <div className="whitespace-normal break-words">{fund.name}</div>
            <div className="whitespace-nowrap">
              評価額：{fund.amount.toLocaleString()}円
            </div>
            <div
              className={`whitespace-nowrap ${
                fund.profitLoss >= 0 ? "text-red-500" : "text-red-500"
              }`}
            >
              （{fund.profitLoss >= 0 ? "+" : ""}
              {fund.profitLoss.toLocaleString()}円）
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FundCard;
