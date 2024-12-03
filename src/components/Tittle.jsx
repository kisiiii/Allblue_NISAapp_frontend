import * as React from "react";

export function Tittle() {
  return (
    <div className="relative bg-indigo-900 text-white">
      <div className="flex items-center justify-between px-4 py-3">
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
    </div>
  );
}

export default Tittle;
