import * as React from "react";

export function AssetCard({ balance, income }) {
  // balanceとincomeがnullの場合に0を使用
  const safeBalance = balance !== null ? balance : 0;
  const safeIncome = income !== null ? income : 0;
  // 割合計算（小数点第1位まで）
  const percentage =
    safeBalance !== 0 ? ((safeIncome / safeBalance) * 100).toFixed(1) : "0.0";
  // 符号を追加
  const formattedPercentage =
    safeIncome >= 0 ? `+${percentage}` : `${percentage}`;

  return (
    <div className="flex flex-col items-center px-3.5 pt-3 pb-6 mt-3 w-full font-bold text-center whitespace-nowrap bg-white rounded-md">
      <div className="text-xl text-black mx-auto">資産残高</div>
      <div className="text-5xl text-indigo-900 my-5 mx-auto">
        {safeBalance.toLocaleString()}円
      </div>
      <div className="shrink-0 self-stretch mt-1 h-px border border-solid border-zinc-400" />
      <div className="text-xl mt-5 text-black">運用収益額</div>
      <div className="text-2xl mt-5 text-indigo-900">
        {safeIncome.toLocaleString()}円（{formattedPercentage}％）
      </div>
      <div className="shrink-0 self-stretch mt-2 h-px border border-solid border-zinc-400" />
    </div>
  );
}

export default AssetCard;
