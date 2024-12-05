import React from "react";

export function PersonalRanking({ myRanking, parameter }) {
  return (
    <div className="flex flex-col pt-6 pr-11 pb-20 pl-5 mt-4 text-black whitespace-nowrap bg-white rounded-md">
      <p className="text-base">
        あなたと同じ時期に開始したユーザーの中で
        <br />
        あなたの運用益（運用益/元本）ランキング
      </p>
      <div className="self-center mt-20 text-2xl font-bold leading-snug text-center">
        {myRanking.toLocaleString()}位 / {parameter.toLocaleString()}人
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc7d3c1f3fa94a26425f20cb63f7628b602a1a766ae240abbaa008fbfe5d4cad?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
        alt="Ranking visualization"
        className="object-contain mt-28 ml-4 w-full aspect-[1.2] max-w-[271px]"
      />
    </div>
  );
}

export default PersonalRanking;
