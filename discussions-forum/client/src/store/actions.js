import { createAction } from "@reduxjs/toolkit";
import types from "./types";

export const initializeDiscussionsList = createAction(
  types.INITIALIZE_DISCUSSIONS_LIST
);

export const updateDiscussionsList = createAction(
  types.UPDATE_DISCUSSIONS_LIST
);

export const updateComment = createAction(types.UPDATE_COMMENT);

export const storeCurrentDiscussion = createAction(
  types.STORE_CURRENT_DISCUSSION
);

export const storeAuthInfo = createAction(types.STORE_AUTH_INFO);
