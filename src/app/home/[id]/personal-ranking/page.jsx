"use client";

import * as React from "react";
import { HeaderMenu } from "../../../../components/HeaderMenu";
import { PersonalRanking } from "../../../../components/PersonalRanking";
import { LinkButton } from "../../../../components/LinkButton";
import { TabSelector } from "../../../../components/TabSelector";
import { TabContent } from "../../../../components/TabContent";

function PopularProducts() {
  //最初のタブは「つみたて投資枠」に設定
  const [activeTab, setActiveTab] = React.useState("つみたて投資枠");

  //個人ランキングデータ
  const myRanking = 123456;
  const parameter = 9999999;

  //運用益上位10%ランキングデータ
  const rankingData = [
    {
      rank: 1,
      fundName: "eMAXIS Slim 米国株式（S&P500）",
      price: "33,175",
      priceChange: "+131",
    },
    {
      rank: 2,
      fundName: "eMAXIS Slim 米国株式（S&P500）",
      price: "33,175",
      priceChange: "+131",
    },
    {
      rank: 3,
      fundName: "eMAXIS Slim 米国株式（S&P500）",
      price: "33,175",
      priceChange: "+131",
    },
    {
      rank: 4,
      fundName: "eMAXIS Slim 米国株式（S&P500）",
      price: "33,175",
      priceChange: "+131",
    },
    {
      rank: 5,
      fundName: "eMAXIS Slim 米国株式（S&P500）",
      price: "33,175",
      priceChange: "+131",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col pb-5 mx-auto w-full bg-gray-200 max-w-screen-lg">
      <HeaderMenu />
      <main className="flex flex-col px-6 mt-6 w-full">
        <div className="self-start text-2xl font-bold text-black">
          個人ランキング
        </div>
        {/* ↓個人ランキング表示 */}
        <PersonalRanking myRanking={myRanking} parameter={parameter} />

        <h2 className="self-start mt-12 text-2xl font-bold text-black">
          運用益上位のユーザーが購入している人気商品ランキング
        </h2>

        <div className="flex flex-col pb-6 mt-5 w-full leading-none bg-white rounded-md">
          {/* ↓タブデザイン */}
          <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />
          {/* ↓タブの切り替え設定＋ランキングデザイン */}
          <TabContent activeTab={activeTab} rankingData={rankingData} />
        </div>

        {/* ↓相談窓口リンクボタン */}
        <LinkButton />
      </main>
    </div>
  );
}

export default PopularProducts;
