import { createStore } from "vuex";
import sourceData from "../data.json";

export default createStore({
  state: {
    ...sourceData,
    authId: "L664y3qZSubDbT1R6npC0EEybJ73",
  },
  getters: {
    authUser: (state) => {
      const user = state.users.find((user) => user.id === state.authId);
      if (!user) return null;
      return {
        ...user,
        get posts() {
          return state.posts.filter((post) => post.userId === user.id);
        },
        get postsCount() {
          return this.posts.length;
        },
        get threads() {
          return state.threads.filter((post) => post.userId === user.id);
        },
        get threadsCount() {
          return this.threads.length;
        },
      };
    },
  },
  actions: {
    createPost({ commit, state }, post) {
      post.id = "ggqq" + Math.random();
      post.userId = state.authId;
      post.publishedAt = Math.floor(Date.now() / 1000);
      commit("setPost", { post }); // set the post
      commit("appendPostToThread", {
        postId: post.id,
        threadId: post.threadId,
      }); // append post to thread
    },
    createThread({ commit, state, dispatch }, { text, title, forumId }) {
      const id = "ggqq" + Math.random();
      const userId = state.authId;
      const publishedAt = Math.floor(Date.now() / 1000);
      const thread = { title, publishedAt, userId, id };
      commit("setThread", { thread });
      commit("appendThreadToUser", { userId, threadId: id });
      commit("appendThreadToForum", { threadId: id });
      dispatch("createPost", { text, threadId: id });
    },
    updateUser({ commit }, user) {
      commit("setUser", { user, userId: user.id });
    },
  },
  mutations: {
    setPost(state, { post }) {
      state.posts.push(post);
    },
    setThread(state, { thread }) {
      state.threads.push(thread);
    },
    setUser(state, { user, userId }) {
      const userIndex = state.users.findIndex((user) => user.id === userId);
      state.users[userIndex] = user;
    },
    appendPostToThread(state, { postId, threadId }) {
      const thread = state.threads.find((thread) => thread.id === threadId);
      thread.posts = thread.posts || [];
      thread.posts.push(postId);
    },
    appendThreadToUser(state, { userId, threadId }) {
      const user = state.users.find((user) => user.id === userId);
      user.threads = user.threads || [];
      user.threads.push(threadId);
    },
  },
});
