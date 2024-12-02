"use client";

import * as React from "react";
import { HeaderMenu } from "../../../../components/HeaderMenu";
import { RankingCard } from "../../../../components/RankingCard";

function PopularProducts() {
  const [activeTab, setActiveTab] = React.useState("つみたて投資枠");

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
    <div className="flex overflow-hidden flex-col pb-10 mx-auto w-full bg-gray-200 max-w-[480px]">
      <HeaderMenu />
      <main className="flex flex-col px-3.5 mt-6 w-full">
        <h1 className="self-start text-2xl font-bold text-black">
          個人ランキング
        </h1>
        <div className="flex flex-col pt-6 pr-11 pb-20 pl-5 mt-6 text-black whitespace-nowrap bg-white rounded-md">
          <p className="text-base">
            あなたと同じ時期に開始したユーザーの中で
            <br />
            あなたの運用益（運用益/元本）ランキング
          </p>
          <div className="self-center mt-20 text-2xl font-bold leading-snug text-center">
            123456位／9999999人
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc7d3c1f3fa94a26425f20cb63f7628b602a1a766ae240abbaa008fbfe5d4cad?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
            alt="Ranking visualization"
            className="object-contain mt-28 ml-4 w-full aspect-[1.2] max-w-[271px]"
          />
        </div>
        <h2 className="self-start mt-12 text-xl font-bold text-black">
          運用益上位10％ユーザーの人気商品
        </h2>
        <div className="flex flex-col pb-6 mt-5 w-full leading-none bg-white rounded-md">
          <div className="flex">
            <div
              className={`flex-1 text-center py-3 font-bold cursor-pointer ${
                activeTab === "つみたて投資枠"
                  ? "bg-indigo-900 text-white rounded-t-lg"
                  : "bg-white text-gray-800 border border-gray-300"
              }`}
              onClick={() => setActiveTab("つみたて投資枠")}
            >
              つみたて投資枠
            </div>
            <div
              className={`flex-1 text-center py-3 font-bold cursor-pointer ${
                activeTab === "成長投資枠"
                  ? "bg-indigo-900 text-white rounded-t-lg"
                  : "bg-white text-gray-800 border border-gray-300"
              }`}
              onClick={() => setActiveTab("成長投資枠")}
            >
              成長投資枠
            </div>
          </div>
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
        </div>
        <button className="self-center px-16 py-5 mt-10 w-full text-xl font-bold text-center text-white whitespace-nowrap bg-indigo-900 rounded-lg max-w-[318px]">
          投資のご相談はこちら
        </button>
      </main>
    </div>
  );
}

export default PopularProducts;
