import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAnalytics = createAsyncThunk(
  "analytics/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const [usersRes, postsRes, todosRes] = await Promise.all([
        fetch("https://jsonplaceholder.typicode.com/users"),
        fetch("https://jsonplaceholder.typicode.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/todos"),
      ]);

      const users = await usersRes.json();
      const posts = await postsRes.json();
      const todos = await todosRes.json();

      const userPostCounts = users.map((u) => ({
        username: u.username,
        posts: posts.filter((p) => p.userId === u.id).length,
      }));

      const userTodoCounts = users.map((u) => ({
        username: u.username,
        completed: todos.filter((t) => t.userId === u.id && t.completed).length,
      }));

      const mostPosts = userPostCounts.reduce((a, b) => (a.posts > b.posts ? a : b));
      const fewestPosts = userPostCounts.reduce((a, b) => (a.posts < b.posts ? a : b));

      const mostTodos = userTodoCounts.reduce((a, b) => (a.completed > b.completed ? a : b));
      const fewestTodos = userTodoCounts.reduce((a, b) => (a.completed < b.completed ? a : b));

      return {
        totalUsers: users.length,
        mostPosts,
        fewestPosts,
        mostTodos,
        fewestTodos,
      };
    } catch {
      return rejectWithValue("Failed to load analytics data.");
    }
  }
);

const analyticsSlice = createSlice({
  name: "analytics",
  initialState: { data: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnalytics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnalytics.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAnalytics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to load analytics data.";
      });
  },
});

export default analyticsSlice.reducer;
