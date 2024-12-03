"use client";

import * as React from "react";
import Link from "next/link";
import { Tittle } from "../../components/Tittle";

export function IntroPage() {
  return (
    <div className="flex overflow-hidden flex-col mx-auto max-w-[480px]">
      <Tittle />
      <div className="px-2 py-6 w-full font-bold text-xl text-blue-800 bg-blue-100 rounded-xl max-w-[327px] text-center">
        作成中
      </div>
    </div>
  );
}

export default IntroPage;
