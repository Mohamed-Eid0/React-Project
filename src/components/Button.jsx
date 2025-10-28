import React from "react";

export default function Button({ label, onClick, variant = "primary" }) {
  const base =
    "px-4 py-2 rounded-lg font-semibold transition-colors duration-300";
  const styles = {
    primary:
      "bg-blue-400 text-white hover:bg-blue-200 active:bg-blue-700",
    secondary:
      "bg-muted-100 text-blue-700 hover:bg-muted-300 active:bg-muted-300",
    danger:
      "bg-red-500 text-blue-100 hover:bg-red-400 active:bg-red-600",
  };

  return (
    <button className={`${base} ${styles[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
}
