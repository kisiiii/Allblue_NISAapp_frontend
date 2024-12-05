import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

export function AssetTransition({ labels, dataset1, dataset2 }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Dataset 1",
            data: dataset1,
            borderColor: "#36A2EB",
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            fill: true,
            tension: 0.3,
          },
          {
            label: "Dataset 2",
            data: dataset2,
            borderColor: "#FF6384",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            fill: true,
            tension: 0.3,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            title: {
              display: true,
              text: "年月",
            },
          },
          y: {
            title: {
              display: true,
              text: "金額 (円)",
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, [labels, dataset1, dataset2]);

  return (
    <div className="flex flex-col w-full px-1 pt-1.5 pb-28 mt-4 bg-white rounded-md h-[400px]">
      <canvas ref={chartRef} className="w-full h-full" />
    </div>
  );
}

export default AssetTransition;
