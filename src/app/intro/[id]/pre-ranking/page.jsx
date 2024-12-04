"use client";

import * as React from "react";
import { useRouter, useParams } from "next/navigation";
import { Tittle } from "../../../../components/Tittle";
import { SearchDescription } from "../../../../components/SearchDescription";
import { RankingSearchButtons } from "../../../../components/RankingSearchButtons";
import { TabSelector } from "../../../../components/TabSelector";
import { AttributeSelector } from "../../../../components/AttributeSelector";
import { TabContent } from "../../../../components/TabContent";

function PrePopularProducts() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const handleButtonClick = (path) => {
    router.push(`${path}`);
  };

  const [activeTab, setActiveTab] = React.useState("つみたて投資枠");

  //ページ移動時は属性選択ボタンは選択された状態
  const [selectedAttributes, setSelectedAttributes] = React.useState({
    年代: true,
    年収: true,
    家族構成: true,
    投資額: true,
  });

  const toggleAttribute = (attribute) => {
    setSelectedAttributes((prevState) => ({
      ...prevState,
      [attribute]: !prevState[attribute],
    }));
  };

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

  //ランキングを見るボタンを押すと実行されること
  const handleActionClick = (id) => {
    console.log(`${id} clicked`);
  };

  return (
    <div className="flex overflow-hidden flex-col pb-3.5 mx-auto w-full bg-gray-200 max-w-[480px]">
      <Tittle />
      <div className="flex flex-col px-3.5 mt-6 w-full">
        <div className="self-start text-2xl font-bold leading-snug text-center text-black">
          人気商品ランキング
        </div>
        <div className="flex flex-col px-6 pt-7 pb-4 mt-5 w-full font-medium text-black whitespace-nowrap bg-white rounded-md">
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
          {/* ↓属性選択ボタン */}
          <AttributeSelector
            selectedAttributes={selectedAttributes}
            toggleAttribute={toggleAttribute}
          />{" "}
          {/* ↓タブの切り替え設定＋ランキングデザイン */}
          <TabContent activeTab={activeTab} rankingData={rankingData} />
        </div>

        <button
          onClick={() => handleButtonClick(`/home/${id}`)}
          className="px-6 py-6 w-[90%] my-10 text-2xl self-center font-bold text-white bg-red-600 rounded-xl"
        >
          NISAをはじめる
        </button>
      </div>
    </div>
  );
}

export default PrePopularProducts;
