"use client";

import * as React from "react";
import Link from "next/link";
import { Tittle } from "../../components/Tittle";

export function IntroPage() {
  return (
    <div className="flex overflow-hidden flex-col mx-auto max-w-[480px]">
      <Tittle />
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="px-2 py-6 w-full font-bold text-xl text-blue-800 bg-blue-100 rounded-xl max-w-[327px] text-center">
          あなたはご自身の
          <br />
          余剰資金（NISA投資にする資金）
          <br />
          を知っていますか？
        </div>
        <div className="flex flex-col justify-center mt-10 w-full font-bold text-base leading-none text-center max-w-[327px] text-zinc-800">
          <Link
            href="/simulation"
            className="flex-1 px-4 py-4 mt-3 w-full bg-white rounded border-2 border-solid border-zinc-300 min-h-[48px] text-zinc-800 text-center"
          >
            知っている
          </Link>
          <Link
            href="/unknown"
            className="flex-1 px-4 py-4 mt-6 w-full bg-white rounded border-2 border-solid border-zinc-300 min-h-[48px] text-zinc-800 text-center"
          >
            わからない
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
