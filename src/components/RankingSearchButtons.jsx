import React from "react";

export function RankingSearchButtons({ onClick }) {
  // ボタンデータをコンポーネント内部で定義
  const tabs = [
    {
      id: "つみたて投資枠",
      label: "つみたて投資枠",
      description: "ランキングをみる",
    },
    {
      id: "成長投資枠",
      label: "成長投資枠",
      description: "ランキングをみる",
    },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-4 mt-6 text-sm leading-5 text-center text-white">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="flex flex-col flex-1 min-w-[120px] max-w-[200px]"
        >
          <button
            className="px-3 py-2 sm:px-4 sm:py-3.5 bg-indigo-900 rounded-md cursor-pointer text-xs sm:text-sm"
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
