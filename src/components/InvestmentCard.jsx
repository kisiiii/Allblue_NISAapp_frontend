import React from "react";
import { NisaChart } from "./NisaChart";

export function InvestmentCard({ type, amount, total }) {
  const numericAmount = parseInt(amount.replace(/,/g, ""), 10);
  const numericTotal = parseInt(total.replace(/,/g, ""), 10);

  // 色を直接設定
  const colors =
    type === "つみたて投資枠"
      ? ["#FF6384", "#FFCE56"] // つみたて投資枠の色
      : ["#36A2EB", "#FF9F40"]; // 成長投資枠の色

  return (
    <div className="flex flex-col items-center w-full max-w-[200px] bg-white rounded-md p-4 shadow-md">
      <div className="text-sm font-bold">{type}</div>
      <div className="flex items-center justify-center w-full h-[120px]">
        {/* グラフを親要素の中央に揃える */}
        <NisaChart
          amount={numericAmount}
          total={numericTotal}
          colors={colors}
        />
      </div>
      <div className="mt-2 text-base font-bold text-indigo-900">{amount}円</div>
      <div className="mt-1 text-sm text-zinc-800">目標: {total}円</div>
    </div>
  );
}

export default InvestmentCard;
