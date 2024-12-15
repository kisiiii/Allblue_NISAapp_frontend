"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import SelectArea from "../../../../components/select_area";
import MultipleSelectArea from "../../../../components/multiple_select_area";
import { Tittle } from "../../../../components/Tittle";

export default function Home() {
  const params = useParams();
  const { id } = params;

  const [year, setYear] = useState(""); // 年の選択状態
  const [month, setMonth] = useState(""); // 月の選択状態
  const [day, setDay] = useState(""); // 日の選択状態

  // ボタンの項目リスト
  const family_member = [
    "ご本人",
    "ご夫婦",
    "ご夫婦+お子様1人",
    "ご夫婦+お子様2人以上",
    "親子",
    "ご本人+ご両親",
  ];
  const life_plan = [
    "旅行",
    "趣味",
    "車",
    "生涯学習",
    "こどもの教育費",
    "こども 孫への援助",
    "仕事 ボランティア",
    "住宅購入 リフォーム",
  ];
  const savings = [
    "300万円",
    "500万円",
    "800万円",
    "1,000万円",
    "2,000万円",
    "3,000万円",
    "5,000万円",
    "5,000万円以上",
  ];
  const annual_income = [
    "0万円",
    "100万円",
    "300万円",
    "500万円",
    "800万円",
    "1,000万円",
    "2,000万円",
    "3,000万円以上",
  ];
  const annual_income_spouse = [
    "0万円",
    "100万円",
    "300万円",
    "500万円",
    "800万円",
    "1,000万円",
    "2,000万円",
    "3,000万円以上",
  ];
  const monthly_consumption = [
    "10万円",
    "20万円",
    "30万円",
    "40万円",
    "50万円",
    "60万円",
    "70万円",
    "80万円以上",
  ];

  return (
    <div className="flex overflow-hidden flex-col mx-auto max-w-screen-lg">
      <div className="mb-5">
        <Tittle />
      </div>

      <div className="container mx-auto w-4/5 mb-5">
        <div className="label-container">生年月日</div>
        <div className="grid grid-cols-3 gap-x-1 mx-1 justify-stretch mt-2">
          <select
            className="w-full select select-bordered"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="" disabled>
              年
            </option>
            {Array.from({ length: 2024 - 1940 + 1 }, (_, i) => 1940 + i).map(
              (y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              )
            )}
          </select>
          <select
            className="w-full select select-bordered"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="" disabled>
              月
            </option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
          <select
            className="w-full select select-bordered"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          >
            <option value="" disabled>
              日
            </option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="container mx-auto w-4/5 mb-5">
        <div className="label-container">ご家族</div>
        <div className="flex flex-col mx-1">
          <SelectArea labelList={family_member} n_cols={1} />
        </div>
      </div>
      <div className="container mx-auto w-4/5 mb-5">
        <div className="label-container">ライフプラン</div>
        <p className="font-bold mt-2">複数選択可</p>
        <div className="flex flex-col mx-1">
          <MultipleSelectArea labelList={life_plan} n_cols={2} />
        </div>
      </div>
      <div className="container mx-auto w-4/5 mb-5">
        <div className="label-container">現在の資産（貯蓄）</div>
        <p className="font-bold mt-2">一番近いものを選択してください</p>
        <div className="mx-1">
          <SelectArea labelList={savings} n_cols={2} />
        </div>
      </div>
      <div className="container mx-auto w-4/5 mb-5">
        <div className="label-container">ご本人様年収</div>
        <p className="font-bold mt-2">一番近いものを選択してください</p>
        <div className="flex flex-col mx-1">
          <SelectArea labelList={annual_income} n_cols={2} />
        </div>
      </div>
      <div className="container mx-auto w-4/5 mb-5">
        <div className="label-container">配偶者様年収</div>
        <p className="font-bold mt-2">一番近いものを選択してください</p>
        <div className="flex flex-col mx-1">
          <SelectArea labelList={annual_income_spouse} n_cols={2} />
        </div>
      </div>
      <div className="container mx-auto w-4/5 mb-5">
        <div className="label-container">月々の生活費</div>
        <p className="font-bold mt-2">一番近いものを選択してください</p>
        <div className="flex flex-col mx-1">
          <SelectArea labelList={monthly_consumption} n_cols={2} />
        </div>
      </div>
      <Link
        href={`/intro/${id}/simulation-result`}
        className="btn bg-blue-800 text-white mx-auto w-4/5 mb-5"
      >
        結果を見る
      </Link>
    </div>
  );
}
