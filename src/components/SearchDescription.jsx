import React from "react";

export function SearchDescription() {
  return (
    <div className="flex flex-col">
      <div className="ml-2.5 text-base leading-snug text-center">
        人気ランキングの属性を選択してください
      </div>
      <div className="shrink-0 mt-3 max-w-full h-px border border-solid border-zinc-400 w-[306px]" />
      <div className="mt-2.5 mr-6 ml-5 text-xs leading-4">
        ・属性があなたと近いユーザーの人気ランキングが表示されます。
        <br />
        ・複数組み合わせ可能です。
      </div>
    </div>
  );
}

export default SearchDescription;
