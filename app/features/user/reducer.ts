import { createReducer } from "@reduxjs/toolkit";
import { userLogin
} from "./actions";


// user state Alias
export type userState = {
    userData: {
        [key:string]: any;
    };
    pending: boolean;
    error: boolean;
};
// user intial state
const initUserState: userState = {
    userData: {
        user: {
            first_name: 'Muhamed',
            last_name: 'Rageh'
        }
    },
    pending: false,
    error: false,
};
// user reducer to handel action when dispatched
export const userReducer = createReducer(initUserState, builder => {
    builder
        // User login action thunk and its stats.
        .addCase(userLogin.pending, state => {
            state.pending = true;
            state.error = false;
        })
        .addCase(userLogin.fulfilled, (state, { payload }) => {
            state.pending = false;
            state.userData = payload;
        })
        .addCase(userLogin.rejected, state => {
            state.pending = false;
            state.error = true;
        })
});

export default userReducer;