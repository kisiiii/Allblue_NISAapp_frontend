import React from "react";

export function PersonalRanking({ myRanking, parameter }) {
  return (
    <div className="flex flex-col pt-6 pr-5 pb-20 pl-5 mt-4 text-black whitespace-normal bg-white rounded-md w-full max-w-lg mx-auto">
      <p className="text-base break-words">
        あなたと同じ時期に開始したユーザーの中であなたの運用益（運用益/元本）
        ランキング
      </p>
      <div className="self-center mt-8 text-2xl font-bold leading-snug text-center break-words">
        {myRanking.toLocaleString()}位 / {parameter.toLocaleString()}人
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc7d3c1f3fa94a26425f20cb63f7628b602a1a766ae240abbaa008fbfe5d4cad?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
        alt="Ranking visualization"
        className="object-contain mt-12 mx-auto w-full max-w-[271px] aspect-[1.2]"
      />
    </div>
  );
}

export default PersonalRanking;
