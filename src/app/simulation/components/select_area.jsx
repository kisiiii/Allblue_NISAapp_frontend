// 選択エリアのコンポーネント
'use client';

import React, { useState } from 'react';
import SelectButton from "./select_button.jsx"; //　ボタンコンポーネントのインポート

const SelectArea = ({labelList, n_cols}) => {
    const [selectedIndex, setSelectedIndex] = useState([]);
    
    // 選択したボタンのインデックスを保存するhook
    const handleSelect = (inputValue) => {
        setSelectedIndex([inputValue]);
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
                    <SelectButton key={index} label={label} index={index} selectedIndex={selectedIndex} onSelect={handleSelect}/>
                )
            }
        )}
        </div>
    );
}

export default SelectArea;