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
    <div className="flex gap-8 mt-6 text-sm leading-5 text-center text-white">
      {tabs.map((tab) => (
        <div key={tab.id} className="flex flex-col flex-1">
          <button
            className="px-4 py-3.5 bg-indigo-900 rounded-md cursor-pointer"
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
