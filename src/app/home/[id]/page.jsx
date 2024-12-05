"use client";

import * as React from "react";
import { HeaderMenu } from "../../../components/HeaderMenu";
import { AssetCard } from "../../../components/AssetCard";
import { InvestmentCard } from "../../../components/InvestmentCard";
import { AssetTransition } from "../../../components/AssetTransition";
import { FundCard } from "../../../components/FundCard";
import { FooterButton } from "../../../components/FooterButton";

function DashboardLayout() {
  //運用資産状況データ
  const balance = 1500000;
  const income = 500000;

  //本年のNisa投資額データ
  const investmentData = [
    {
      type: "つみたて投資枠",
      amount: "100,000",
      total: "1,200,000",
    },
    {
      type: "成長投資枠",
      amount: "100,000",
      total: "2,400,000",
    },
  ];

  // 資産推移データ
  const assetTransitionData = {
    labels: [
      "2024/1",
      "2024/2",
      "2024/3",
      "2024/4",
      "2024/5",
      "2024/6",
      "2024/7",
      "2024/8",
      "2024/9",
      "2024/10",
    ],
    dataset1: [
      100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000,
      1000000,
    ],
    dataset2: [
      50000, 120000, 180000, 290000, 350000, 400000, 490000, 540000, 670000,
      700000,
    ],
  };

  //保有ファンドデータ
  const fundData = [
    { name: "eMAXIS Slim 米国株式（S&P500）", amount: "10,000" },
    { name: "eMAXIS Slim 米国株式（S&P500）", amount: "10,000" },
    { name: "eMAXIS Slim 米国株式（S&P500）", amount: "10,000" },
  ];

  //フッターメニュー表示用（バックエンドデータではない）
  const footerButtons = [
    { text: "口座確認", type: "single" },
    { text: "商品検索", type: "single" },
    { text: "個人\nランキング", type: "double" },
    { text: "人気\nランキング", type: "double" },
  ];

  return (
    <div className="flex overflow-hidden flex-col pb-5 mx-auto w-full bg-gray-200 max-w-screen-lg">
      <HeaderMenu />
      <div className="flex flex-col items-start px-6 mt-7 w-full">
        <div className="text-2xl font-bold text-black">運用資産状況</div>
        {/* ↓資産残高表示 */}
        <AssetCard balance={balance} income={income} />

        <div className="mt-7 text-2xl font-bold text-black">本年の投資額</div>
        <div className="flex flex-wrap gap-3 py-5 mt-3 w-full font-bold text-center text-black whitespace-nowrap bg-white rounded-md">
          {/* Nisa残高表示 */}
          {investmentData.map((data, index) => (
            <div
              key={index}
              className="flex-1 min-w-[150px] md:min-w-[200px] flex justify-center"
            >
              <InvestmentCard {...data} />
            </div>
          ))}
        </div>

        <div className="mt-7 text-2xl font-bold text-black">資産推移</div>
        {/* ↓資産推移グラフ */}
        <AssetTransition {...assetTransitionData} />

        <div className="mt-7 text-2xl font-bold text-black">保有ファンド</div>
        {/* ↓保有商品表示 */}
        <FundCard funds={fundData} />

        <div className="flex flex-wrap justify-evenly w-full items-center gap-2 mt-6 text-sm font-extrabold text-center text-white">
          {/* フッターメニュー */}
          {footerButtons.map((button, index) => (
            <FooterButton key={index} {...button} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
