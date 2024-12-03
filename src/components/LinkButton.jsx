import React from "react";

export function LinkButton() {
  return (
    <button
      className="self-center px-16 py-5 mt-10 w-full text-xl font-bold text-center text-white whitespace-nowrap bg-indigo-900 rounded-lg max-w-[318px]"
      onClick={() =>
        window.open(
          "https://www.mizuhobank.co.jp/nisa/nisa_cafe/index.html", //クリックでみずほNISAカフェページに移動
          "_blank"
        )
      }
    >
      投資のご相談はこちら
    </button>
  );
}

export default LinkButton;
