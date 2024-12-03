"use client";

import * as React from "react";
import { HeaderMenu } from "../../../components/HeaderMenu";
import { AssetCard } from "../../../components/AssetCard";
import { AssetTransition } from "../../../components/AssetTransition";
import { InvestmentCard } from "../../../components/InvestmentCard";
import { FundCard } from "../../../components/FundCard";
import { FooterButton } from "../../../components/FooterButton";

function DashboardLayout() {
  //運用資産状況データ
  const balance = 1500000;
  const income = 500000;

  //本年の投資額データ
  const investmentData = [
    {
      type: "つみたて投資枠",
      amount: "00,000",
      total: "1,200,000",
      chartSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/08bfc4c71b1993d502fef72348276e1fefdec880cd83185b1e3b0c97054dec5d?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd",
    },
    {
      type: "成長投資枠",
      amount: "00,000",
      total: "2,400,000",
      chartSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fca0e14922527609bd2c71c0e6ba7fc6b72eb40f709ed2a0580b8aecfb8ca223?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd",
    },
  ];

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
    <div className="flex overflow-hidden flex-col pb-5 mx-auto w-full bg-gray-200 max-w-[480px]">
      <HeaderMenu />
      <div className="flex flex-col items-start px-3.5 mt-7 w-full">
        <div className="text-2xl font-bold text-black">運用資産状況</div>
        {/* ↓資産残高表示 */}
        <AssetCard balance={balance} income={income} />

        <div className="mt-7 text-2xl font-bold text-black">本年の投資額</div>
        <div className="flex gap-3 py-5 pr-3 mt-3 font-bold text-center text-black whitespace-nowrap bg-white rounded-md">
          {/* Nisa残高表示 */}
          {investmentData.map((data, index) => (
            <InvestmentCard key={index} {...data} />
          ))}
        </div>

        <div className="mt-6 text-2xl font-bold text-black">資産推移</div>
        {/* ↓資産推移グラフ */}
        <AssetTransition />

        <div className="mt-6 text-2xl font-bold text-black">保有ファンド</div>
        {/* ↓保有商品表示 */}
        <FundCard funds={fundData} />

        <div className="flex gap-3 mt-6 text-sm font-extrabold leading-loose text-center text-white whitespace-nowrap">
          {/* ↓フッターメニュー */}
          {footerButtons.map((button, index) => (
            <FooterButton key={index} {...button} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
