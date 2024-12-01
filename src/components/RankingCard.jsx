import * as React from "react";

export function RankingCard({ rank, fundName, price, priceChange }) {
  return (
    <div className="flex w-full gap-2 items-stretch">
      {/* ランク部分 */}
      <div className="flex items-center justify-center px-3 py-5 bg-indigo-900 text-xs font-medium text-white text-center rounded min-w-[50px]">
        {rank}
      </div>
      {/* 詳細部分 */}
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex gap-1 items-center">
          {/* ファンド名 */}
          <div className="flex-1 px-4 py-5 text-xs font-medium text-center bg-white rounded border-2 border-solid border-zinc-300 min-h-[50px] text-zinc-800">
            {fundName}
          </div>
          {/* テキスト */}
          <div className="flex-1 px-4 py-5 text-base whitespace-nowrap bg-white rounded border-2 border-solid border-zinc-300 min-h-[50px] text-zinc-800 text-opacity-50">
            テキスト
          </div>
        </div>
        <div className="flex gap-1.5 items-center">
          {/* 基準価額 */}
          <div className="px-4 py-2.5 text-xs font-medium text-white bg-indigo-900 rounded">
            基準価額
          </div>
          <div className="flex-1 px-4 py-2.5 bg-white rounded border-2 border-solid border-zinc-300 text-zinc-800">
            {price}円（{priceChange}円）
          </div>
          {/* 積立ボタン */}
          <div className="px-9 py-2 bg-red-600 text-white text-base font-bold rounded-3xl">
            積立
          </div>
        </div>
      </div>
    </div>
  );
}

export default RankingCard;
