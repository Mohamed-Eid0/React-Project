import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import store from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";
import NoteManager from "./pages/NoteManager";
import UsersManager from "./pages/UsersManager";
import WeatherWidget from "./pages/WeatherWidget";
import "./index.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<UsersManager />} />
            <Route path="/notes" element={<NoteManager />} />
            <Route path="/weather" element={<WeatherWidget />} />
            <Route path="/users/:id" element={<UserDetails />} />
          </Routes>
  </AuthProvider>
  </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
