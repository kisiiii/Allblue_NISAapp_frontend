"use client";

import * as React from "react";
import { HeaderMenu } from "../../../../components/HeaderMenu";
import { RankingCard } from "../../../../components/RankingCard";
import AttributeButton from "../../../../components/AttributeButton";

function PopularProducts() {
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
              <div className="px-4 py-3.5 bg-indigo-900 rounded-md">
                つみたて投資枠
                <br />
                ランキングをみる
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="px-4 py-3.5 bg-indigo-900 rounded-md">
                成長投資枠
                <br />
                ランキングをみる
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-6 mt-5 w-full leading-none bg-white rounded-md">
          <div className="flex items-start w-full text-base leading-snug text-center whitespace-nowrap border-b-2 border-cyan-500">
            <div className="overflow-hidden flex-1 shrink gap-2.5 self-stretch px-6 py-5 font-bold text-white bg-sky-500 rounded-lg min-h-[64px]">
              つみたて投資枠
            </div>
            <div className="flex relative flex-1 shrink gap-2.5 justify-center items-start px-6 py-5 font-medium bg-white rounded-none border-t-2 border-r border-l basis-0 border-zinc-300 min-h-[64px] text-zinc-800">
              <div className="z-0 flex-1 shrink my-auto basis-0">
                成長投資枠
              </div>
              <div className="flex absolute inset-x-0 bottom-0 z-0 shrink-0 self-start h-0.5 bg-cyan-500 w-[180px]" />
            </div>
          </div>
          <div className="flex gap-3 self-center mt-5 w-full text-xs font-bold text-center text-black whitespace-nowrap max-w-[325px]">
            <AttributeButton label="年代" isSelected={true} />
            <AttributeButton label="年収" isSelected={false} />
            <AttributeButton label="投資額" isSelected={true} />
            <AttributeButton label="家族構成" isSelected={false} />
          </div>
          <div className="flex gap-1 mt-4">
            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
              <div className="self-end px-5 py-1.5 text-xs font-medium text-center text-white whitespace-nowrap bg-indigo-900">
                積み立て額
              </div>
              <div className="flex flex-col gap-5 mt-5">
                {rankingData.map((item, index) => (
                  <RankingCard key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;
