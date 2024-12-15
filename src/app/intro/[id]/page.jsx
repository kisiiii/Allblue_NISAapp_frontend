"use client";

import * as React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Tittle } from "../../../components/Tittle";

export function IntroPage() {
  const params = useParams(); // useParams フックを使用してパラメータを取得
  const { id } = params; // 動的な id を取得

  return (
    <div className="flex overflow-hidden flex-col mx-auto max-w-screen-lg">
      <Tittle />
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="px-2 py-6 w-full font-bold text-xl text-blue-800  max-w-[327px] text-center">
          あなたはご自身の
          <br />
          余剰資金（NISA投資にする資金）
          <br />
          を知っていますか？
        </div>
        <div className="flex flex-col justify-center mt-10 w-full font-bold text-base leading-none text-center max-w-[327px] text-zinc-800">
          {/* わからないリンク */}
          <Link
            href={`/intro/${id}/simulation`}
            className="flex-1 px-2 py-4 mt-3 w-full bg-indigo-200 hover:bg-indigo-300 rounded min-h-[48px] text-zinc-800 text-center"
          >
            わからない
          </Link>

          {/* 知っているリンク */}
          <Link
            href={`/home/${id}`}
            className="flex-1 px-2 py-4 mt-12 w-full bg-red-200 hover:bg-red-300 rounded min-h-[48px] text-zinc-800 text-center"
          >
            知っている
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
