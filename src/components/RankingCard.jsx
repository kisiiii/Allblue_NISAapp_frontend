import * as React from "react";

export function RankingCard({ rank, fundName, price, priceChange }) {
  return (
    <div className="flex w-full gap-1.5 items-stretch">
      {/* ランク部分 */}
      <div className="flex items-center justify-center px-3 py-5 bg-indigo-900 text-xs font-medium text-white text-center rounded">
        {rank}
      </div>
      {/* 詳細部分 */}
      <div className="flex-1 flex flex-col gap-1">
        <div className="flex gap-1 items-center">
          {/* ファンド名 */}
          <div className="flex-1 px-4 py-5 font-medium text-center text-xs bg-white rounded border-2 border-solid border-zinc-300 min-h-[50px] text-zinc-800">
            {fundName}
          </div>
          {/* 金額入力 */}
          {/* <input
            type="number"
            min="0"
            step="100"
            className="px-4 py-5 text-base whitespace-nowrap bg-white rounded border-2 border-solid border-zinc-300 min-h-[50px] text-zinc-800 w-[160px]"
            placeholder="金額を入力"
          /> */}
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
          {/* <button
            className="px-12 py-2 bg-red-600 text-white text-base font-bold rounded-3xl w-[160px]"
            aria-label="積立ボタン"
          >
            積立
          </button> */}
        </div>
        <div className="flex gap-1.5 items-center">
          {/* 金額入力 */}
          <input
            type="number"
            min="0"
            step="100"
            className="flex-1 px-4 py-3 text-xs whitespace-nowrap bg-white rounded border-2 border-solid border-zinc-300 text-zinc-800 min-h-[50px]"
            placeholder="金額を入力"
          />
          {/* 積立ボタン */}
          <button
            className="px-6 py-3 bg-red-600 text-white text-xs font-bold rounded-3xl min-w-[80px] md:w-[140px]"
            aria-label="積立ボタン"
          >
            積立
          </button>
        </div>
      </div>
    </div>
  );
}

export default RankingCard;