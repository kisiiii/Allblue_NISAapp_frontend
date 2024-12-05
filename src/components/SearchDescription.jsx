import React from "react";

export function SearchDescription() {
  return (
    <div className="flex flex-col w-full">
      <div className="text-base leading-snug px-4 break-words">
        人気ランキングの属性を選択してください
      </div>
      <div className="shrink-0 mt-3 h-px border border-solid border-zinc-400 w-full" />
      <div className="mt-2.5 px-4 text-xs leading-4">
        <ul className="list-disc list-outside">
          <li>属性があなたと近いユーザーの人気ランキングが表示されます。</li>
          <li>複数組み合わせ可能です。</li>
        </ul>
      </div>
    </div>
  );
}

export default SearchDescription;
