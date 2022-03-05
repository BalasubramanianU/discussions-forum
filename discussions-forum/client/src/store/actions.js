import { createAction } from "@reduxjs/toolkit";
import types from "./types";

export const initializeBoard = createAction(types.INITIALIZE_BOARD);

export const movePiece = createAction(types.MOVE_PIECE);

export const storeCurrentPosition = createAction(types.STORE_CURRENT_POSITION);

export const storeValidPositions = createAction(types.STORE_VALID_POSITIONS);

export const clearValidPositions = createAction(types.CLEAR_VALID_POSITIONS);

export const getKingPosition = createAction(types.GET_KING_POSITION);

export const kingInCheck = createAction(types.KING_IN_CHECK);
