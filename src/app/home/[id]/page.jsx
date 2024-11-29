import * as React from "react";
import { MenuButton } from "../../../components/MenuButton";
import { AssetCard } from "../../../components/AssetCard";
import { InvestmentCard } from "../../../components/InvestmentCard";
import { FundCard } from "../../../components/FundCard";
import { ActionButton } from "../../../components/ActionButton";

function DashboardLayout() {
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

  const fundData = [
    { name: "eMAXIS Slim 米国株式（S&P500）", amount: "10,000" },
    { name: "eMAXIS Slim 米国株式（S&P500）", amount: "10,000" },
    { name: "eMAXIS Slim 米国株式（S&P500）", amount: "10,000" },
  ];

  const actionButtons = [
    { text: "口座確認", type: "single" },
    { text: "商品検索", type: "single" },
    { text: "個人\nランキング", type: "double" },
    { text: "人気\nランキング", type: "double" },
  ];

  return (
    <div className="flex overflow-hidden flex-col pb-5 mx-auto w-full bg-gray-200 max-w-[480px]">
      <div className="flex gap-5 justify-between py-3 pr-20 pl-4 text-xs font-bold leading-snug text-center text-white whitespace-nowrap bg-indigo-900">
        <MenuButton />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c8959ebeef5ce10df57c44eeeabb40228ac34f5f4cfe8c23acc2de827c44861?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
          alt="Dashboard logo"
          className="object-contain shrink-0 my-auto max-w-full aspect-[4.69] w-[183px]"
        />
      </div>
      <div className="flex flex-col items-start px-3.5 mt-7 w-full">
        <div className="text-2xl font-bold text-black">運用資産状況</div>
        <AssetCard />
        <div className="mt-7 text-2xl font-bold text-black">本年の投資額</div>
        <div className="flex gap-3 py-5 pr-3 mt-3 font-bold text-center text-black whitespace-nowrap bg-white rounded-md">
          {investmentData.map((data, index) => (
            <InvestmentCard key={index} {...data} />
          ))}
        </div>
        <div className="mt-6 text-2xl font-bold text-black">資産推移</div>
        <div className="flex flex-col px-1 pt-1.5 pb-28 mt-4 bg-white rounded-md">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5870b7a8d8b1778767b0d607ec9fda6bdc7d1178ea8371c40311b8b40e887151?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
            alt="Asset trend chart"
            className="object-contain mb-0 w-full aspect-[2.84]"
          />
        </div>
        <div className="mt-6 text-2xl font-bold text-black">保有ファンド</div>
        <FundCard funds={fundData} />
        <div className="flex gap-3 mt-6 text-sm font-extrabold leading-loose text-center text-white whitespace-nowrap">
          {actionButtons.map((button, index) => (
            <ActionButton key={index} {...button} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
