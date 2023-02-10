import { RootState } from "../../app/store";
import { createSelector } from "@reduxjs/toolkit";

// binding SelectUserData with it's state in store.
export const selectUserData = (state: RootState) => state.userData;
// Creating userDataSelector so we will be able to select userData state from store.
export const userDataSelector = createSelector(
    selectUserData,
    state => state
)