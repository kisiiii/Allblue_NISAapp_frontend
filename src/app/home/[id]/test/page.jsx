"use client";

import * as React from "react";
import { HeaderMenu } from "../../../../components/HeaderMenu";
import { RankingCard } from "../../../../components/RankingCard";
import AttributeButton from "../../../../components/AttributeButton";

function PopularProducts() {
  const [activeTab, setActiveTab] = React.useState("積み立て投資枠");

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
    <div className="flex overflow-hidden flex-col pb-3.5 mx-auto w-full bg-gray-200 max-w-[480px]">
      <HeaderMenu />
      <div className="flex flex-col px-3.5 mt-6 w-full">
        <div className="self-start text-2xl font-bold leading-snug text-center text-black">
          人気商品ランキング
        </div>
        <div className="flex flex-col px-6 pt-7 pb-4 mt-5 w-full font-medium text-black whitespace-nowrap bg-white rounded-md">
          <div className="ml-2.5 text-base leading-snug text-center">
            人気ランキングの属性を選択してください
          </div>
          <div className="shrink-0 mt-3 max-w-full h-px border border-solid border-zinc-400 w-[306px]" />
          <div className="mt-2.5 mr-6 ml-5 text-xs leading-4">
            ・属性があなたと近いユーザーの人気ランキングが表示されます。
            <br />
            ・複数組み合わせ可能です。
          </div>
          <div className="flex gap-10 self-center mt-5 w-full text-base font-bold leading-none text-center max-w-[282px]">
            <AttributeButton label="年代" isSelected={true} />
            <AttributeButton label="年収" isSelected={false} />
          </div>
          <div className="flex gap-10 self-center mt-6 w-full text-base font-bold leading-none text-center max-w-[282px]">
            <AttributeButton label="家族構成" isSelected={false} />
            <AttributeButton label="投資額" isSelected={true} />
          </div>
          <div className="flex gap-8 mt-6 text-sm leading-5 text-center text-white">
            <div className="flex flex-col flex-1">
              <div className="px-4 py-3.5 bg-indigo-900 rounded-md cursor-pointer">
                つみたて投資枠
                <br />
                ランキングをみる
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="px-4 py-3.5 bg-indigo-900 rounded-md cursor-pointer">
                成長投資枠
                <br />
                ランキングをみる
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-6 mt-5 w-full leading-none bg-white rounded-md">
          <div className="flex">
            <div
              className={`flex-1 text-center py-3 font-bold cursor-pointer ${
                activeTab === "積み立て投資枠"
                  ? "bg-indigo-900 text-white rounded-t-lg"
                  : "bg-white text-gray-800 border border-gray-300"
              }`}
              onClick={() => setActiveTab("積み立て投資枠")}
            >
              積み立て投資枠
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
            {activeTab === "積み立て投資枠" && (
              <div className="flex flex-col">
                <div className="text-lg font-bold text-indigo-900">
                  積み立て投資枠ランキング
                </div>
                <div className="self-end px-5 py-1.5 text-xs font-medium text-center text-white whitespace-nowrap bg-indigo-900">
                  積み立て額
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
                  積み立て額
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
      </div>
    </div>
  );
}

export default PopularProducts;
