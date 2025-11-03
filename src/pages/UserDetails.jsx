import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserPosts, useUserTodos, useUsers } from "../hooks/useUsersData";
import Navbar from "../components/navbar.jsx";


export default function UserDetails() {
  const { id } = useParams();
  const userId = parseInt(id);

  const { data: users } = useUsers();
  const user = users?.find((u) => u.id === userId);

  const { data: posts } = useUserPosts(userId);
  const { data: todos } = useUserTodos(userId);

  // Local copy of todos to allow toggling state
  const [localTodos, setLocalTodos] = useState([]);

  useEffect(() => {
    if (todos) setLocalTodos(todos);
  }, [todos]);

  const toggleTodo = (id) => {
    setLocalTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  if (!user)
    return <p className="text-center text-white">Loading user info...</p>;

  return (
    <div className=" min-h-screen  text-white p-8 mt-16">
      <Navbar />
      <div className="max-w-4xl mx-auto space-y-6">


        {/* Posts Section */}
        <div>
          <h2 className="text-4xl font-semibold mt-6 mb-3 text-white bg-blue-600 rounded-2xl p-5 hover:bg-blue-500">
            Posts
          </h2>
          <ul className="space-y-2">
            {posts?.map((p) => (
              <li
                key={p.id}
                className="bg-blue-300 text-blue-800 rounded-xl p-4 shadow-md"
              >
                <h3 className="font-bold">{p.title}</h3>
                <p>{p.body}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Todos Section */}
        <div>
          <h2 className="text-4xl font-semibold mt-6 mb-3 text-white bg-blue-600 rounded-2xl p-5 hover:bg-blue-500">
            To-Dos
          </h2>
          <ul className="space-y-2">
            {localTodos.map((t) => (
              <li
                key={t.id}
                onClick={() => toggleTodo(t.id)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-200 ${
                  t.completed
                    ? "bg-green-500 text-white line-through"
                    : "bg-blue-400 text-blue-800 hover:bg-blue-200"
                }`}
              >
                {t.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
