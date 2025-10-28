import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
      return data;
    },
  });
};

export const useUserPosts = (userId) => {
  return useQuery({
    queryKey: ["posts", userId],
    queryFn: async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      return data;
    },
    enabled: !!userId, // only run when userId exists
  });
};

export const useUserTodos = (userId) => {
  return useQuery({
    queryKey: ["todos", userId],
    queryFn: async () => {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
      return data;
    },
    enabled: !!userId,
  });
};
