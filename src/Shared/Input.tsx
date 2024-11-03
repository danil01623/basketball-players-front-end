import React from "react";

interface InputProps {
  label: string;
  name: string;
  value: string | number;
  type?: "text" | "number" | "email" | "password";
  placeholder?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  type = "text",
  placeholder = "",
  error,
  onChange,
}) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label
        style={{
          color: "black",
          display: "block",
          fontWeight: "bold",
          marginBottom: ".5rem",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          padding: "0.5rem",
          width: "100%",
          borderRadius: "4px",
          border: error ? "1px solid red" : "1px solid #ccc",
          boxSizing: "border-box",
        }}
      />
      {error && (
        <span style={{ color: "red", fontSize: "0.875rem" }}>{error}</span>
      )}
    </div>
  );
};

export default Input;
