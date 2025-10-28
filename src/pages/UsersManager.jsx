import React from "react";
import { useUsers } from "../hooks/useUsersData";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar.jsx";


export default function UsersManager() {
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <p className="text-center text-white">Loading users...</p>;
  if (error) return <p className="text-center text-red-400">Failed to load users.</p>;

  return (
    <div className=" min-h-screen bg-gradient-to-br from-blue-200 to-blue-500 text-white p-10 pt-12 mt-16">
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Users Manager</h1>

        <ul className="space-y-3">
          {users.map((user) => (
            <li key={user.id}>
              <Link
                to={`/users/${user.id}`}
                className="block bg-blue-300 text-blue-800 rounded-xl p-4 hover:bg-blue-500 hover:text-white transition"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">{user.name}</h2>
                    <p className="text-sm text-gray-600">@{user.username} • {user.email}</p>
                  </div>
                  <div className="text-sm opacity-70">View →</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
