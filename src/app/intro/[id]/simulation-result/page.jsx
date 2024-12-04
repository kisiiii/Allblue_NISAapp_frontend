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
        "始めた時期が同じだから\n参考になる！\n継続のモチベーションに！",
      content: (
        <>
          <div className="flex gap-8 self-start mt-7">
            <div className="self-start text-xs font-medium text-black">
              イメージ
            </div>
            <div className="text-2xl font-bold text-center text-blue-800 basis-auto">
              225位／1423人中
            </div>
          </div>
          <div className="flex shrink-0 self-end mt-3.5 max-w-full bg-zinc-300 h-[198px] w-[287px]" />
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
        "自分と似たユーザーの\n人気ランキングが見れて\n安心して商品を選びやすい！",
      content: (
        <>
          <div className="self-start mt-12 ml-2.5 text-xs font-medium text-black">
            イメージ
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd783bd62ecad6155a253eb4d1015a51a76a0a543f5474328272e0aeaf7829c8?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
            alt=""
            className="object-contain mt-4 w-full aspect-[1.07] max-w-[314px]"
          />
        </>
      ),
    },
  ];

  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const handleButtonClick = (path) => {
    router.push(`${path}`);
  };

  return (
    <div className="flex overflow-hidden flex-col mx-auto max-w-[480px]">
      <Tittle />

      <main className="flex flex-col items-center px-3.5 mt-11 w-full">
        <div className="px-5 py-3 text-base text-center font-bold text-blue-800 bg-blue-100 rounded-xl w-full">
          あなたの月々の余剰資金は・・・
        </div>
        <div className="px-5 py-6 mt-3 mb-10 text-4xl font-bold leading-none text-center text-white bg-indigo-900 rounded-xl w-full">
          30,000円
        </div>

        <div className="flex flex-col pt-4 pb-7 mt-1.5 bg-indigo-100 rounded-lg">
          <div className="text-base text-center font-bold text-zinc-800">
            10年前に毎月30,000円を
            <br />
            積み立てていた場合の利益
          </div>
          <div className="flex flex-col self-center px-16 pt-1.5 pb-3.5 mt-5 w-full font-bold leading-none text-center text-white bg-indigo-900 rounded-xl max-w-[323px]">
            <div className="self-center text-4xl">189万円*</div>
            <div className="self-start mt-1.5 text-2xl">増えていました！</div>
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
              今すぐNISAを始めましょう
            </div>
          </div>
        </div>

        <div className="self-center mt-9 text-2xl font-bold text-black">
          NISAPOではじめるメリット
        </div>

        {merits.map((merit, index) => (
          <Merit
            key={index}
            number={merit.number}
            title={merit.title}
            image={merit.image}
            description={merit.description}
          >
            {merit.content}
          </Merit>
        ))}

        <div className="mt-5 text-base font-bold text-zinc-800">
          同じ投資額（余剰資金）の
        </div>

        <button
          onClick={() => handleButtonClick(`/intro/${id}/pre-ranking`)}
          className="px-6 py-6 w-[90%] text-2xl self-center font-bold text-white bg-indigo-900 rounded-xl"
        >
          人気ランキングを見てみる
        </button>

        <button
          onClick={() => handleButtonClick(`/home/${id}`)}
          className="px-6 py-6 w-[90%] my-10 text-2xl self-center font-bold text-white bg-red-600 rounded-xl"
        >
          NISAをはじめる
        </button>
      </main>
    </div>
  );
}

export default SimResult;
