'use client';

import React, { useState } from 'react';

export default function Home() {
    const [selected, setSelected] = useState(null); // ボタンの選択状態を管理
    const [year, setYear] = useState(""); // 年の選択状態
    const [month, setMonth] = useState(""); // 月の選択状態
    const [day, setDay] = useState(""); // 日の選択状態

    const handleSelect = (id) => {
        setSelected(id); // 選択されたボタンのIDを設定
    };

    return (
        <div className="flex flex-col justify-center items-center mt-12 gap-4">
            <div className="mb-8">
                <img src="../NISAPO_logo.png" alt="logo" className="w-48" />
            </div>

            <div className="label-container">生年月日</div>

            <div className="flex flex-row">
                <select
                    className="select select-bordered w-24 max-w-xs mr-1"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                >
                    <option value="" disabled>
                        年
                    </option>
                    <option value="1988">1988</option>
                    <option value="1989">1989</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                </select>

                <select
                    className="select select-bordered w-24 max-w-xs mr-1"
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
                    className="select select-bordered w-24 max-w-xs"
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

            <div className="label-container">ご家族</div>
            <div className="flex flex-col gap-2">
                <button
                    className={`app-selectable-button ${selected === 1 ? 'selected' : ''}`}
                    onClick={() => handleSelect(1)}
                >
                    ご本人
                </button>
                <button
                    className={`app-selectable-button ${selected === 2 ? 'selected' : ''}`}
                    onClick={() => handleSelect(2)}
                >
                    ご夫婦
                </button>
                <button
                    className={`app-selectable-button ${selected === 3 ? 'selected' : ''}`}
                    onClick={() => handleSelect(3)}
                >
                    ご夫婦+お子様1人
                </button>
                <button
                    className={`app-selectable-button ${selected === 4 ? 'selected' : ''}`}
                    onClick={() => handleSelect(4)}
                >
                    ご夫婦+お子様2人以上
                </button>
                <button
                    className={`app-selectable-button ${selected === 5 ? 'selected' : ''}`}
                    onClick={() => handleSelect(5)}
                >
                    親子
                </button>
                <button
                    className={`app-selectable-button ${selected === 6 ? 'selected' : ''}`}
                    onClick={() => handleSelect(6)}
                >
                    ご本人＋ご両親
                </button>
            </div>
        </div>
    );
}
