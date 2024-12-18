import React from "react";

export function PersonalRanking({ myRanking, parameter }) {
  // ランキングを5分割し、現在の順位がどの範囲にあるか計算
  const totalUsers = parameter;
  // 分割幅が1人未満の場合、最低でも1人に対して1ランクを割り当てるよう調整
  const rankingTier = Math.min(5, Math.ceil(myRanking / Math.max(totalUsers / 5, 1)));

  // 表示する画像を決定
  const getRankImage = () => {
    switch (rankingTier) {
      case 1:
        return "/personal_lank1.png"; // 上位20%
      case 2:
        return "/personal_lank2.png"; // 上位20-40%
      case 3:
        return "/personal_lank3.png"; // 上位40-60%
      case 4:
        return "/personal_lank4.png"; // 上位60-80%
      case 5:
        return "/personal_lank5.png"; // 上位80-100%
      default:
        return "/personal_default.png";
    }
  };

  return (
    <div className="flex flex-col pt-6 pr-5 pb-20 pl-5 mt-4 text-black whitespace-normal bg-white rounded-md w-full max-w-lg mx-auto">
      <p className="text-base break-words">
        あなたと同じ時期に開始したユーザーの中であなたの運用益（運用益/元本）
        ランキング
      </p>
      <div className="self-center mt-8 text-2xl font-bold leading-snug text-center break-words">
        {myRanking.toLocaleString()}位 / {parameter.toLocaleString()}人
      </div>
      {/* ランキング画像の表示 */}
      <img
        loading="lazy"
        src={getRankImage()}
        alt={`Ranking visualization: Tier ${rankingTier}`}
        className="object-contain mt-12 mx-auto w-full max-w-[271px] aspect-[1.2]"
      />
    </div>
  );
}

export default PersonalRanking;

