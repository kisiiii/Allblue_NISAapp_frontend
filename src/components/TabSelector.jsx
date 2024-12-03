import React from "react";

export function TabSelector({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "つみたて投資枠", label: "つみたて投資枠" },
    { id: "成長投資枠", label: "成長投資枠" },
  ];

  return (
    <div className="flex">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`flex-1 text-center py-3 font-bold cursor-pointer ${
            activeTab === tab.id
              ? "bg-indigo-900 text-white rounded-t-lg"
              : "bg-white text-gray-800 border border-gray-300"
          }`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}

export default TabSelector;
