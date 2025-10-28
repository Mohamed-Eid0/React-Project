import React from "react";
const InputField = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col space-y-2 w-full">
      
      <label
        className="text-brand-700 font-semibold tracking-wide"
      >
        {label}
      </label>

      
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          w-full
          px-4 py-2
          border border-brand-300
          bg-muted-100
          text-brand-900
          rounded-xl
          focus:outline-none
          focus:ring-2
          focus:ring-brand-500
          transition
          duration-200
          hover:border-brand-500
          hover:bg-brand-300
          hover:text-brand-500
        "
      />
    </div>
  );
};

export default InputField;
