import React from "react";

export default function Sidebar() {
  const menuItems = ["Dashboard", "Analytics", "Notes", "Settings"];

  return (
    <aside className="bg-brand-900 -white w-64 min-h-screen p-5 shadow-lg">
      <h2 className="text-lg font-semibold mb-6">Menu</h2>
      <ul className="space-y-3">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="p-3 rounded-lg cursor-pointer hover:bg-brand-500 transition-all"
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
