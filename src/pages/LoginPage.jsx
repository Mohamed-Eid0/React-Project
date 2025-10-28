import React, { useState } from "react";
import InputField from "../components/inputfield";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-300 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-blue-500">
          Login to Dashboard
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputField
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button label="Login" variant="primary" />
        </form>
      </div>
    </div>
  );
}
