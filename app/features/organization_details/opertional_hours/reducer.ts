import { createReducer } from "@reduxjs/toolkit";
import { getOperHours, currentPageAction
} from "./actions";


// organizationDetails OperationalHours state Alias
export type initOperationalHours_details_reducer = {
    OperHours?: {
        [key:string]: any;
    };
    previous: string | null;
    next: string | null;
    currentPage: number;
    pending: boolean;
    error: boolean;
};
// OperationalHours intial state
const initOperationalHours_details_reducer: initOperationalHours_details_reducer = {
    OperHours: undefined,
    previous: null,
    next: null,
    currentPage: 1,
    pending: true,
    error: false,
};
// OperationalHours reducer to handel action when dispatched
export const OperationalHours_reducer = createReducer(initOperationalHours_details_reducer, builder => {
    builder
        // User login action thunk and its stats.
        .addCase(getOperHours.pending, state => {
            state.pending = true;
            state.error = false;
        })
        .addCase(getOperHours.fulfilled, (state, { payload }) => {
            state.pending = false;
            state.OperHours = payload;
            state.previous = payload.previous;
            state.next = payload.next;
        })
        .addCase(getOperHours.rejected, state => {
            state.pending = false;
            state.error = true;
        })
        .addCase(currentPageAction, (state, { payload }) => {
            state.currentPage = payload
        })
});

export default OperationalHours_reducer;