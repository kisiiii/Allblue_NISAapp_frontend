import * as React from "react";

export function HeaderMenu() {
  return (
    <div className="flex gap-5 justify-between py-3 pr-20 pl-4 text-xs font-bold leading-snug text-center text-white whitespace-nowrap bg-indigo-900">
      <div className="flex flex-col">
        <div className="flex flex-col p-2 bg-indigo-900 h-[58px] w-[58px]">
          <div className="shrink-0 w-9 border-white border-solid border-[5px] h-[5px]" />
          <div className="shrink-0 mt-2 w-9 border-white border-solid border-[5px] h-[5px]" />
          <div className="shrink-0 mt-1.5 w-9 border-white border-solid border-[5px] h-[5px]" />
          <div className="mt-2">メニュー</div>
        </div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c8959ebeef5ce10df57c44eeeabb40228ac34f5f4cfe8c23acc2de827c44861?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
        alt="Dashboard logo"
        className="object-contain shrink-0 my-auto max-w-full aspect-[4.69] w-[183px]"
      />
    </div>
  );
}

export default HeaderMenu;
