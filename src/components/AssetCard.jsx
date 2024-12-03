import * as React from "react";

export function AssetCard({ balance, income }) {
  // 割合計算（小数点第1位まで）
  const percentage = ((income / balance) * 100).toFixed(1);
  // 符号を追加
  const formattedPercentage = income >= 0 ? `+${percentage}` : `${percentage}`;

  return (
    <div className="flex flex-col items-center pt-3 pb-11 mt-3 font-bold text-center whitespace-nowrap bg-white rounded-md">
      <div className="text-xl text-black w-[251px]">
        資産残高
        <br />
        {balance.toLocaleString()}円
      </div>
      <div className="shrink-0 self-stretch mt-1 h-px border border-solid border-zinc-400" />
      <div className="mt-10 text-base">運用収益額</div>
      <div className="mt-10 text-base text-indigo-900">
        {income.toLocaleString()}円（{formattedPercentage}％）
      </div>
      <div className="shrink-0 mt-2 max-w-full h-px border border-solid border-zinc-400 w-[312px]" />
    </div>
  );
}

export default AssetCard;
