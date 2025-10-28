import React from "react";
import Card from "../components/Card";
import SimpleAnalyticsBox from "../components/SimpleAnalyticsBox";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar.jsx";

export default function Dashboard() {
  const navigate = useNavigate();

  
  return (
    <>
      <Navbar />
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-300 p-10 pt-12 text-white mt-16">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-20">
        <Card
          title="User & Posts Manager"
          onClick={() => navigate("/users")}
          className=" transform transition-transform hover:scale-105 text-xl p-8"
        >
          <p className="leading-relaxed">
            View and manage users, posts, and to-dos. Click to open users list.
          </p>
        </Card>

        <Card
          title="Note Manager"
          onClick={() => navigate("/notes")}
          className="transform transition-transform hover:scale-105 text-xl p-8"
        >
          <p className="leading-relaxed">
            Create and organize notes with priorities. Click to open Note Manager.
          </p>
        </Card>

        <Card
          title="Weather Widget"
          onClick={() => navigate("/weather")}
          className="transform transition-transform hover:scale-105 text-xl p-8"
        >
          <p className="leading-relaxed">
            Search weather for any city. Click to open the Weather Widget.
          </p>
        </Card>
      </div>

      <div className="flex justify-center">
        <SimpleAnalyticsBox />
      </div>
    </div>
    </>
  );
}
