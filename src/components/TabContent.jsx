import React from "react";
import { RankingCard } from "./RankingCard"; //ランキングデザイン

export function TabContent({ activeTab, rankingData }) {
  return (
    <div className="p-4">
      {activeTab === "つみたて投資枠" && (
        <div className="flex flex-col">
          <div className="text-lg font-bold text-indigo-900">
            つみたて投資枠ランキング
          </div>
          <div className="self-end px-5 py-1.5 text-xs font-medium text-center text-white whitespace-nowrap bg-indigo-900">
            積立額
          </div>
          <div className="flex flex-col gap-5 mt-5">
            {rankingData.map((item, index) => (
              <RankingCard key={index} {...item} />
            ))}
          </div>
        </div>
      )}
      {activeTab === "成長投資枠" && (
        <div className="flex flex-col">
          <div className="text-lg font-bold text-indigo-900">
            成長投資枠ランキング
          </div>
          <div className="self-end px-5 py-1.5 text-xs font-medium text-center text-white whitespace-nowrap bg-indigo-900">
            積立額
          </div>
          <div className="flex flex-col gap-5 mt-5">
            {rankingData.map((item, index) => (
              <RankingCard key={index} {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default TabContent;
