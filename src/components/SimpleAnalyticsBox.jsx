import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnalytics } from "../store/analyticsSlice";

export default function SimpleAnalyticsBox() {
  const dispatch = useDispatch();
  const { data: analytics, loading, error } = useSelector((s) => s.analytics || {});

  useEffect(() => {
    if (!analytics && !loading) dispatch(fetchAnalytics());
  }, [analytics, loading, dispatch]);

  if (loading)
    return (
      <div className="bg-white p-6 rounded-2xl shadow-md text-center text-brand-900">
        Fetching analytics...
      </div>
    );

  if (error)
    return (
      <div className="bg-red-100 p-6 rounded-2xl shadow-md text-center text-red-600">
        {error}
      </div>
    );

  if (!analytics) return null;

  return (
    <div className="bg-white max-w-[700px] w-full p-8 rounded-2xl shadow-lg text-brand-900 transition-all group hover:bg-blue-500 cursor-pointer scale-100 hover:scale-105">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600 transition-colors duration-400 group-hover:text-white">
        Analytics
      </h2>

      <div className="space-y-3 text-blue-600 text-lg leading-relaxed hover:text-white transition-colors duration-400">
        <p>Total Users: {analytics.totalUsers}</p>
        <p>
          Most Posts: {analytics.mostPosts?.username} ({analytics.mostPosts?.posts})
        </p>
        <p>
          Fewest Posts: {analytics.fewestPosts?.username} ({analytics.fewestPosts?.posts})
        </p>
        <p>
          Most Completed Todos: {analytics.mostTodos?.username} ({analytics.mostTodos?.completed})
        </p>
        <p>
          Fewest Completed Todos: {analytics.fewestTodos?.username} ({analytics.fewestTodos?.completed})
        </p>
      </div>
    </div>
  );
}
