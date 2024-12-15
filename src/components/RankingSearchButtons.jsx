import React from "react";

export function RankingSearchButtons({ onClick }) {
  // ボタンデータをコンポーネント内部で定義
  const tabs = [
    {
      id: "投資",
      label: "ランキングを見る",
    },
  ];

  return (
    <div className="flex justify-center mt-6 text-sm leading-5 text-center text-white">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="flex flex-col flex-1 min-w-[120px] max-w-[200px]"
        >
          <button
            className="px-5 py-3 bg-indigo-900 rounded-md cursor-pointer text-sm sm:text-base"
            onClick={() => onClick(tab.id)}
          >
            {tab.label}
            <br />
            {tab.description}
          </button>
        </div>
      ))}
    </div>
  );
}

export default RankingSearchButtons;
