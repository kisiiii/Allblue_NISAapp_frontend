import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

export function AssetTransition({ labels, dataset1, dataset2 }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // データセットの最大値を取得
    const rawMaxValue = Math.max(...dataset1, ...dataset2);

    // Y軸の最大値を計算する関数
    const calculateYAxisMax = (value) => {
      if (value < 1000000) {
        // 10万未満の場合、次の10万の倍数を最大値に
        return Math.ceil(value / 100000) * 100000;
      } else {
        // 100万以上の場合、次の100万の倍数を最大値に
        return Math.ceil(value / 1000000) * 1000000;
      }
    };

    // Y軸の最大値を計算
    const yAxisMaxValue = calculateYAxisMax(rawMaxValue);

    // ステップ間隔を最大値の1/4に設定
    const stepSize = yAxisMaxValue / 4;

    // 月だけを抽出するための処理
    const shortLabels = labels.slice(-12).map((label) => {
      const [year, month] = label.split("/"); // 年と月を分割
      return `${month}月`; // 月のみを返す
    });

    // 2か月ごとにラベルを表示するためのカスタムロジック
    const customLabels = shortLabels.map((label, index) => {
      // ラベルを逆順に考慮して、最後から2か月ごとに表示
      const reversedIndex = shortLabels.length - 1 - index; // 配列を逆順に参照
      return reversedIndex % 2 === 0 ? label : ""; // 2か月ごとに表示
    });

    const chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: customLabels, // カスタムラベルを適用
        datasets: [
          {
            label: "評価額",
            data: dataset1.map((value) => value / 10000), // 万単位に変換
            borderColor: "#36A2EB",
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            fill: true,
            tension: 0.3,
            pointRadius: 0, // マーカー非表示
          },
          {
            label: "取得価額",
            data: dataset2.map((value) => value / 10000), // 万単位に変換
            borderColor: "#FF6384",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            fill: true,
            tension: 0.3,
            pointRadius: 0, // マーカー非表示
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 0, // 上の余白
            bottom: 0, // 下の余白
          },
        },
        scales: {
          x: {
            ticks: {
              display: true,
              maxRotation: 0, // ラベルを水平に表示
              minRotation: 0,
            },
            title: {
              display: false, // 横軸のタイトル非表示
            },
            grid: {
              drawTicks: false, // 軸のはみ出し部分を非表示
              drawBorder: false, // 軸ラインを非表示にする
            },
          },
          y: {
            ticks: {
              callback: (value) => `${value}万`, // 万単位で表示
              stepSize: stepSize / 10000, // ステップ間隔（万単位に変換）
            },
            title: {
              display: false, // 縦軸のタイトル非表示
            },
            grid: {
              drawTicks: false, // 軸のはみ出し部分を非表示
              drawBorder: false, // 軸ラインを非表示にする
            },
            beginAtZero: true,
            max: yAxisMaxValue / 10000, // 万単位に変換
          },
        },
        plugins: {
          legend: {
            position: "bottom", // 必要に応じて "top" に変更
            labels: {
              boxWidth: 30, // 凡例ボックスのサイズ
              padding: 10, // 凡例間の余白
            },
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [labels, dataset1, dataset2]);

  return (
    <div className="flex flex-col w-full px-2 pt-1.5 pb-1.5 mt-4 bg-white rounded-md h-[300px]">
      <canvas ref={chartRef} className="w-full h-full p-0 border-0" />
    </div>
  );
}

export default AssetTransition;
