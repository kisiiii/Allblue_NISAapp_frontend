// 選択エリアのコンポーネント(複数選択可)
'use client';

import React, { useState } from 'react';
import SelectButton from "./select_button.jsx"; //　ボタンコンポーネントのインポート

const MultipleSelectArea = ({labelList, n_cols}) => {
    // 選択されているボタンのインデックスの状態保存のためのhook
    const [selectedIndexes, setSelectedIndexes] = useState([]);
    
    const handleSelect = (inputValue) => {
        setSelectedIndexes((prevSelectedIndexes) => {
            // 配列中にインデックスが含まれているかをチェック
            if (prevSelectedIndexes.includes(inputValue)) {
                // 含まれている場合はインデックスを削除
                return prevSelectedIndexes.filter((item) => item !== inputValue);
            } else {
                // 含まれていない場合は追加
                return [...prevSelectedIndexes, inputValue];
            }
        });
    };
    
    // 表示画面のグリッドの指定
    const gridStyle = {
        gridTemplateColumns: `repeat(${n_cols}, minmax(0, 1fr))`
    };

    return (
        <div className="grid gap-x-1" style={gridStyle}>
            {labelList.map((label, index) => {
                return(
                    // ボタンコンポーネントの呼び出し
                    <SelectButton key={index} label={label} index={index} selectedIndex={selectedIndexes} onSelect={handleSelect}/>
                )
            }
        )}
        </div>
    );
}

export default MultipleSelectArea;