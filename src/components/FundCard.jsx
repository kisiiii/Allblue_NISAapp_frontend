import * as React from "react";

export function FundCard({ funds }) {
  return (
    <div className="flex flex-col py-7 pr-2 pl-5 mt-3 w-full text-sm font-medium leading-none text-left text-black bg-white rounded-md">
      {funds.map((fund, index) => (
        <div key={index} className={index > 0 ? "mt-14" : ""}>
          ●　{fund.name}　　{fund.amount}円
        </div>
      ))}
    </div>
  );
}

export default FundCard;
