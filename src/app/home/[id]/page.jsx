"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { HeaderMenu } from "../../../components/HeaderMenu";
import { AssetCard } from "../../../components/AssetCard";
import { InvestmentCard } from "../../../components/InvestmentCard";
import { AssetTransition } from "../../../components/AssetTransition";
import { FundCard } from "../../../components/FundCard";
import { FooterButton } from "../../../components/FooterButton";
import {
  fetchBalance,
  fetchIncome,
  fetchInvestmentData,
  fetchAssetTransitionData,
  fetchFundData,
} from "../../../api";

const BASE_URL =
  "https://tech0-gen-7-step4-student-finalapp-14-c7end0axgtceeabg.japanwest-01.azurewebsites.net";

function DashboardLayout() {
  //資産運用状況
  const pathname = usePathname();
  const userId = pathname.split("/").pop();

  const [balance, setBalance] = React.useState(null);
  const [income, setIncome] = React.useState(null);
  const [investmentData, setInvestmentData] = React.useState(null);
  const [assetTransitionData, setAssetTransitionData] = React.useState(null);
  const [fundData, setFundData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    if (userId) {
      const getData = async () => {
        try {
          const balanceData = await fetchBalance(userId);
          setBalance(balanceData !== null ? balanceData : 0);
        } catch (error) {
          setBalance(0);
          console.error("Error fetching balance:", error);
        }

        try {
          const incomeData = await fetchIncome(userId);
          setIncome(incomeData !== null ? incomeData : 0);
        } catch (error) {
          setIncome(0);
          console.error("Error fetching income:", error);
        }

        try {
          const year = new Date().getFullYear();
          const investment = await fetchInvestmentData(year);
          setInvestmentData(investment !== null ? investment : []);
        } catch (error) {
          setInvestmentData([]);
          console.error("Error fetching investment data:", error);
        }

        try {
          const assetTransition = await fetchAssetTransitionData();
          setAssetTransitionData(
            assetTransition !== null
              ? assetTransition
              : { labels: [], dataset1: [], dataset2: [] }
          );
        } catch (error) {
          setAssetTransitionData({ labels: [], dataset1: [], dataset2: [] });
          console.error("Error fetching asset transition data:", error);
        }

        try {
          const fund = await fetchFundData();
          setFundData(fund !== null ? fund : []);
        } catch (error) {
          setFundData([]);
          console.error("Error fetching fund data:", error);
        }
      };

      getData();
    }
  }, [userId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (
    balance === null &&
    income === null &&
    investmentData === null &&
    assetTransitionData === null &&
    fundData === null
  ) {
    return <div>Loading...</div>;
  }

  //運用資産状況データ
  //const balance = 1600000;
  //const income = 500000;

  //本年のNisa投資額データ
  // const investmentData = [
  //   {
  //     type: "つみたて投資枠",
  //     amount: "100,000",
  //     total: "1,200,000",
  //   },
  //   {
  //     type: "成長投資枠",
  //     amount: "100,000",
  //     total: "2,400,000",
  //   },
  // ];

  // // 資産推移データ
  // const assetTransitionData = {
  //   labels: [
  //     "2023/12",
  //     "2024/1",
  //     "2024/2",
  //     "2024/3",
  //     "2024/4",
  //     "2024/5",
  //     "2024/6",
  //     "2024/7",
  //     "2024/8",
  //     "2024/9",
  //     "2024/10",
  //     "2024/11",
  //     "2024/12",
  //   ],
  //   dataset1: [
  //     100000, 203000, 320000, 410000, 540000, 650000, 720000, 870000, 990000,
  //     1200000, 1440000, 1630000, 1790000,
  //   ],
  //   dataset2: [
  //     50000, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000,
  //     900000, 1000000, 1100000, 1100000,
  //   ],
  // };

  // //保有ファンドデータ
  // const fundData = [
  //   {
  //     name: "eMAXIS Slim 米国株式（S&P500）",
  //     amount: "10,000",
  //     profitLoss: "1,000",
  //   },
  //   {
  //     name: "eMAXIS Slim 米国株式（S&P500）",
  //     amount: "10,000",
  //     profitLoss: "1,000",
  //   },
  //   {
  //     name: "eMAXIS Slim 米国株式（S&P500）",
  //     amount: "10,000",
  //     profitLoss: "1,000",
  //   },
  // ];

  //フッターメニュー表示用（バックエンドデータではない）
  const footerButtons = [
    {
      text: "NISA\nカフェ",
      type: "single",
      url: "https://www.mizuhobank.co.jp/nisa/nisa_cafe/index.html",
    },
    {
      text: "商品検索",
      type: "single",
      url: "https://fund.www.mizuhobank.co.jp/webasp/mizuho-bk/fund/pc/search/fundlist.aspx?it=10",
    },
    {
      text: "個人\nランキング",
      type: "double",
      url: "/home/1111/personal-ranking",
    },
    {
      text: "人気\nランキング",
      type: "double",
      url: "/home/1111/product-ranking",
    },
  ];

  return (
    <div className="flex overflow-hidden flex-col pb-5 mx-auto w-full bg-gray-200 max-w-screen-lg">
      <HeaderMenu />
      <div className="flex flex-col items-start px-6 mt-7 w-full">
        <div className="text-2xl font-bold text-black">運用資産状況</div>
        {/* ↓資産残高表示 */}
        <AssetCard balance={balance} income={income} />

        <div className="mt-7 text-2xl font-bold text-black">資産推移</div>
        {/* ↓資産推移グラフ */}
        <AssetTransition {...assetTransitionData} />

        <div className="mt-7 text-2xl font-bold text-black">本年の投資額</div>
        <div className="flex flex-wrap gap-3 py-2 mt-3 w-full font-bold text-center text-black whitespace-nowrap bg-white rounded-md">
          {/* Nisa残高表示 */}
          {(investmentData || []).map((data, index) => (
            <div
              key={index}
              className="flex-1 min-w-[150px] md:min-w-[200px] flex justify-center"
            >
              <InvestmentCard {...data} />
            </div>
          ))}
        </div>

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
