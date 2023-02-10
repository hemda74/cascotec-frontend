import { RootState } from "../../../app/store";
import { createSelector } from "@reduxjs/toolkit";

// binding selectOrganization_details_reducer with it's state in store.
export const selectOrganization_details_reducer = (state: RootState) => state.OperationalHours;
// Creating selectOrganization_details_reducer so we will be able to select organizationDetails state from store.
export const organization_details_Selector = createSelector(
    selectOrganization_details_reducer,
    state => state
)