import { createReducer, current } from "@reduxjs/toolkit";
import types from "./types";

const discussionForumReducer = createReducer(
  {
    discussionsList: [],
    auth: { userName: "", password: "" },
  },
  (builder) => {
    builder
      .addCase(types.INITIALIZE_DISCUSSIONS_LIST, (state, action) => {
        const filteredArray = [];
        action.payload.filter((e) =>
          e.discussions.filter((e) => filteredArray.push(e))
        );
        state.discussionsList = filteredArray;
      })
      .addCase(types.UPDATE_DISCUSSIONS_LIST, (state, action) => {
        state.discussionsList.push({ ...action.payload, comments: [] });
      })
      .addCase(types.UPDATE_COMMENT, (state, action) => {
        const { topic, comment } = action.payload;
        state.discussionsList.forEach((e) => {
          if (e.topic === topic) e.comments.push(comment);
        });
      })
      .addCase(types.STORE_AUTH_INFO, (state, action) => {
        const { userName, password } = action.payload;
        state.auth = { userName, password };
      });
  }
);

export default discussionForumReducer;
