import * as React from "react";
import Link from "next/link";

export function FooterButton({ text, type, url }) {
  const isExternal = url.startsWith("http"); // URLが外部リンクかどうかを判定

  if (isExternal) {
    // 外部リンクの場合、新しいタブで開く
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center w-16 h-16 bg-indigo-900 text-white rounded-lg ${
          type === "double" ? "text-xs leading-5" : "text-xs leading-normal"
        }`}
      >
        {text.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            {index < text.split("\n").length - 1 && <br />}
          </React.Fragment>
        ))}
      </a>
    );
  }

  // 内部リンクの場合、Next.js の Link を使用
  return (
    <Link
      href={url}
      className={`flex items-center justify-center w-16 h-16 bg-indigo-900 text-white rounded-lg ${
        type === "double" ? "text-xs leading-5" : "text-xs leading-normal"
      }`}
    >
      {text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < text.split("\n").length - 1 && <br />}
        </React.Fragment>
      ))}
    </Link>
  );
}

export default FooterButton;
