import { 
  Action,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { userReducer } from "../features/user";
import { OperationalHours_reducer } from '../features/organization_details/opertional_hours'


export const store = configureStore({
  reducer: {
    userData: userReducer,
    OperationalHours: OperationalHours_reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
  >;

//   the above code is just Redux toolkit configurations.