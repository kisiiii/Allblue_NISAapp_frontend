import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export function NisaChart({ amount, total, colors }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const remaining = total - amount;

    const chartInstance = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Invested", "Remaining"],
        datasets: [
          {
            data: [amount, remaining],
            backgroundColor: colors, // カラー設定はInvestmentCard.jsxで設定
            hoverBackgroundColor: colors,
            borderWidth: 1,
          },
        ],
      },
      options: {
        cutout: "70%", // 中央部分のサイズ
        plugins: {
          legend: {
            display: false, // ラベルの非表示
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [amount, total, colors]);

  return <canvas ref={chartRef} />;
}
