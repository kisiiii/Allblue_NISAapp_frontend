import React, { useState } from "react";
import Link from "next/link";

export function HeaderMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-indigo-900 text-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* メニューボタン */}
        <button
          className="btn btn-square btn-ghost text-white"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
            />
          </svg>
        </button>

        {/* ロゴ */}
        <div className="flex flex-1 justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c8959ebeef5ce10df57c44eeeabb40228ac34f5f4cfe8c23acc2de827c44861?placeholderIfAbsent=true&apiKey=830249011bfc4b9a9e2dddb095d90bfd"
            alt="Dashboard logo"
            className="object-contain max-w-full aspect-[4.69] w-[183px]"
          />
        </div>
      </div>

      {/* サイドバー */}
      {isSidebarOpen && (
        <div className="absolute top-0 left-0 h-screen w-64 bg-indigo-800 text-white z-50 shadow-lg">
          <div className="flex flex-col p-5">
            {/* 閉じるボタン */}
            <button
              className="btn btn-square btn-ghost self-end text-white"
              onClick={toggleSidebar}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="mt-5 space-y-4">
              <Link
                href="/home/1111"
                className="block px-3 py-2 text-sm font-medium bg-indigo-700 rounded hover:bg-indigo-600"
              >
                ホーム
              </Link>
              <a
                href="https://www.mizuhobank.co.jp/internet_service/jikangai.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm font-medium bg-indigo-700 rounded hover:bg-indigo-600"
              >
                口座確認
              </a>
              <a
                href="https://fund.www.mizuhobank.co.jp/webasp/mizuho-bk/fund/pc/search/fundlist.aspx?it=10"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-sm font-medium bg-indigo-700 rounded hover:bg-indigo-600"
              >
                商品検索
              </a>
              <Link
                href="/home/1111/personal-ranking"
                className="block px-3 py-2 text-sm font-medium bg-indigo-700 rounded hover:bg-indigo-600"
              >
                個人ランキング
              </Link>
              <Link
                href="/home/1111/product-ranking"
                className="block px-3 py-2 text-sm font-medium bg-indigo-700 rounded hover:bg-indigo-600"
              >
                人気ランキング
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeaderMenu;
