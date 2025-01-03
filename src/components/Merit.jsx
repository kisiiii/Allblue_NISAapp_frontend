import * as React from "react";

export function Merit({ number, title, description, image, note, children }) {
  return (
    <div className="flex flex-col px-3 py-5 w-full bg-indigo-200 rounded-lg mb-6">
      <div className="self-center text-center px-5 py-1.5 max-w-full text-xl font-bold text-blue-800 bg-red-200 rounded-3xl w-[155px]">
        メリット{number}
      </div>
      <div className="self-center mt-2.5 text-base font-bold text-center text-blue-800">
        {title}
      </div>
      {children}
      <div className="flex gap-5 justify-between items-center px-2 py-2.5 mt-7 text-base font-bold bg-red-200 rounded-lg text-zinc-800">
        <img
          loading="lazy"
          src={image}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[0.92] w-[99px]"
        />
        <div className="my-auto w-full">{description}</div>
      </div>
    </div>
  );
}

export default Merit;
