// 選択ボタンのコンポーネント
'use client';

import React from 'react';

const SelectButton = ({label, index, selectedIndex, onSelect}) => {
    return (
        <div className="my-1 text-xs">
            <button
                    // 親コンポーネントから渡されるselectedIndex中にボタンのindexが含まれていれば選択状態のCSSを適用
                    className={`w-full h-full app-selectable-button ${selectedIndex.includes(index) ? 'selected' : ''}`}
                    // クリックしたら親コンポーネントで指定して渡されている関数onSelectを実行
                    onClick={() => onSelect(index)}
                >
                    {label}
                </button>
        </div>
    );
}

export default SelectButton;