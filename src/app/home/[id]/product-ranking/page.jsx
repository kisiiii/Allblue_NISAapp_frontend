"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { HeaderMenu } from "../../../../components/HeaderMenu";
import { SearchDescription } from "../../../../components/SearchDescription";
import { RankingSearchButtons } from "../../../../components/RankingSearchButtons";
import { TabSelector } from "../../../../components/TabSelector";
import { AttributeSelector } from "../../../../components/AttributeSelector";
import { TabContent } from "../../../../components/TabContent";
import { fetchProductRanking } from "../../../../api";

function PopularProducts() {
  const pathname = usePathname();
  const id = pathname.split("/")[2]; // URLからユーザーIDを取得
  const [activeTab, setActiveTab] = React.useState("つみたて投資枠");

  //ページ移動時は属性選択ボタンは選択された状態
  const [selectedAttributes, setSelectedAttributes] = React.useState({
    年代: true,
    年収: true,
    家族構成: true,
    投資額: true,
  });

  const [rankingData, setRankingData] = React.useState([]);

  const toggleAttribute = (attribute) => {
    setSelectedAttributes((prevState) => ({
      ...prevState,
      [attribute]: !prevState[attribute],
    }));
  };

  // ランキングを見るボタンを押すと実行されること
  const handleActionClick = async () => {
    const investmentFlag = activeTab === "つみたて投資枠" ? 1 : 2;
    try {
      const data = await fetchProductRanking(id, investmentFlag, selectedAttributes);
      console.log("Fetched Data:", data); // データをログに出力
      // ランクに基づいてデータをソート
      const sortedData = data.sort((a, b) => a.rank - b.rank);
      setRankingData(data);
    } catch (error) {
      console.error("Error fetching product ranking:", error);
    }
  };
  React.useEffect(() => {
    if (id) {
      console.log("User ID:", id); // ユーザーIDをログに出力して確認
      handleActionClick();
    }
  }, [id]);

  // const rankingData = [
  //   {
  //     rank: 1,
  //     fundName: "eMAXIS Slim 米国株式（S&P500）",
  //     price: "33,175",
  //     priceChange: "+131",
  //   },
  //   {
  //     rank: 2,
  //     fundName: "eMAXIS Slim 米国株式（S&P500）",
  //     price: "33,175",
  //     priceChange: "+131",
  //   },
  //   {
  //     rank: 3,
  //     fundName: "eMAXIS Slim 米国株式（S&P500）",
  //     price: "33,175",
  //     priceChange: "+131",
  //   },
  //   {
  //     rank: 4,
  //     fundName: "eMAXIS Slim 米国株式（S&P500）",
  //     price: "33,175",
  //     priceChange: "+131",
  //   },
  //   {
  //     rank: 5,
  //     fundName: "eMAXIS Slim 米国株式（S&P500）",
  //     price: "33,175",
  //     priceChange: "+131",
  //   },
  // ];

  //ランキングを見るボタンを押すと実行されること
  // const handleActionClick = (id) => {
  //   console.log(`${id} clicked`);
  // };

  return (
    <div className="flex overflow-hidden flex-col pb-5 mx-auto w-full bg-gray-200 max-w-screen-lg">
      <HeaderMenu />
      <div className="flex flex-col px-6 mt-6 w-full">
        <div className="self-start text-2xl font-bold leading-snug text-center text-black">
          人気商品ランキング
        </div>
        <div className="flex flex-col px-6 pt-7 pb-4 mt-5 w-full font-medium text-black bg-white rounded-md">
          {/* ↓ランキング検索説明文 */}
          <SearchDescription />
          {/* ↓属性選択ボタン */}
          <AttributeSelector
            selectedAttributes={selectedAttributes}
            toggleAttribute={toggleAttribute}
          />{" "}
          {/* ↓ランキング検索ボタン */}
          <RankingSearchButtons onClick={handleActionClick} />{" "}
        </div>

        <div className="flex flex-col pb-6 mt-5 w-full leading-none bg-white rounded-md">
          {/* ↓タブデザイン */}
          <TabSelector activeTab={activeTab} setActiveTab={setActiveTab} />{" "}
          {/* ↓タブの切り替え設定＋ランキングデザイン */}
          <TabContent activeTab={activeTab} rankingData={rankingData} />
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;
