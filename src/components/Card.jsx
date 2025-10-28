import React from "react";

const Card = ({ title, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="
        hover-card
        bg-gradient-to-br from-blue-500 to-blue-300
        text-white  
        rounded-3xl
        shadow-lg
        p-6
        transition-transform
        duration-400
        transform
        hover:scale-105
        cursor-pointer
      "
    >
      <h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>
      <div className="text-white">{children}</div>
    </div>
  );
};

export default Card;
