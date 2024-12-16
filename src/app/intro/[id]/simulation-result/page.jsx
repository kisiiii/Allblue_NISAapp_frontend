"use client";

import * as React from "react";
import { useRouter, useParams } from "next/navigation";
import { Tittle } from "../../../../components/Tittle";
import { Merit } from "../../../../components/Merit";

export function SimResult() {
  const merits = [
    {
      number: "１",
      title:
        "同時期にNISAを始めたユーザーの中で、\n運用益のランキングが見れる！",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/905cbdeb30a7099585145f52e03dd90e15d7b0a1f76205517744ebe01a8ca59a?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd",
      description:
        "始めた時期が同じだから参考になる！\n継続のモチベーションに！",
      content: (
        <>
          <div className="flex gap-8 self-start mt-7">
            <div className="self-start ml-2.5 text-xs font-medium text-black">
              ※イメージ
            </div>
            <div className="self-start text-2xl mt-4 font-bold text-center text-blue-800 basis-auto">
              225位／1423人中
            </div>
          </div>
          <img
            loading="lazy"
            src="/personal_lank2.png"
            alt=""
            className="self-center object-contain mt-4 w-full aspect-[1.07] max-w-[314px]"
          />
        </>
      ),
    },
    {
      number: "２",
      title:
        "自分の生活スタイルと似たユーザーが\n購入している人気商品ランキングが見れる！",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8938995d32ead4259575942cbd2b4e8efdeec05cf1771644afc1b650f636d06c?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd",
      description:
        "自分と似たユーザーの人気ランキングが見れて安心して商品を選びやすい！",
      content: (
        <>
          <div className="self-start mt-6 ml-2.5 text-xs font-medium text-black">
            ※イメージ
          </div>
          <img
            loading="lazy"
            src="/product_ranking.png"
            alt=""
            className="self-center object-contain mt-4 w-full aspect-[1.07] max-w-[314px]"
          />
        </>
      ),
    },
  ];

  const convertNewlinesToBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const handleButtonClick = (path) => {
    router.push(`${path}`);
  };

  return (
    <div className="flex overflow-hidden flex-col mx-auto max-w-screen-lg  bg-gray-200">
      <Tittle />

      <main className="flex flex-col items-center px-3.5 mt-8 w-full">
        <div className="px-5 py-3 text-base text-center font-bold text-blue-800 bg-blue-100 rounded-xl w-full">
          あなたの月々の余剰資金は・・・
        </div>
        <div className="px-5 py-6 mt-3 mb-10 text-4xl font-bold leading-none text-center text-indigo-900 bg-[#F9F8EB] rounded-xl w-full">
          30,000円
        </div>

        <div className="flex flex-col px-5 pt-4 pb-7 mt-1.5 bg-indigo-200 rounded-lg w-full">
          <div className="text-base text-center font-bold text-zinc-800">
            10年前に毎月30,000円を
            <br />
            積み立てていた場合の利益
          </div>
          <div className="flex flex-col self-center px-16 pt-1.5 pb-3.5 mt-2 w-full font-bold leading-none text-center text-white bg-[#4B75CC] rounded-xl max-w-[323px]">
            <div className="text-center mt-1.5 text-4xl">189万円*</div>
            <div className="text-center mt-1.5 text-xl">増えていました！</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b46e8c1e93bcab617cf8b86f5d198ec8834e8a95ef76d512cb4a149b3252e168?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
            alt=""
            className="object-contain mt-6 w-full aspect-[1.74]"
          />
          <div className="flex flex-col mt-1">
            <div className="pr-2.5 self-end text-xs font-bold text-zinc-800">
              *想定利回り10％
            </div>
            <div className="self-center mt-4 text-xl font-black leading-none text-indigo-900">
              今すぐNISAを始めましょう！！
            </div>
          </div>
        </div>

        <div className="self-center mt-9 mb-3 text-2xl font-bold text-black">
          NISAPOではじめるメリット
        </div>

        {merits.map((merit, index) => (
          <Merit
            key={index}
            number={merit.number}
            title={convertNewlinesToBreaks(merit.title)}
            image={merit.image}
            description={convertNewlinesToBreaks(merit.description)}
          >
            {merit.content}
          </Merit>
        ))}

        <div className="mt-5 text-base font-bold text-zinc-800">
          同じ投資額（余剰資金）の
        </div>

        <button
          onClick={() => handleButtonClick(`/intro/${id}/pre-ranking`)}
          className="px-4 py-6 w-[90%] text-xl self-center font-bold text-white bg-indigo-800 hover:bg-indigo-900 rounded-xl"
        >
          人気ランキングを見てみる
        </button>

        <button
          onClick={() =>
            window.open(
              "https://www.mizuhobank.co.jp/nisa/addaccount/index.html",
              "_blank"
            )
          }
          className="px-6 py-6 w-[90%] my-10 text-xl self-center font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl"
        >
          NISAをはじめる
        </button>
      </main>
    </div>
  );
}

export default SimResult;
