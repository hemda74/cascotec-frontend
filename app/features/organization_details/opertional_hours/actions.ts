import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import TenantAdminService from "../../../servcies/TenantAdminService";

type inputsObj = {
    [key: string]: any
}

// async action for OperationalHours_reducer
// AsynkThunk can only accept one paramter thats why we send user data as an object
export const getOperHours = createAsyncThunk('orgDetails/operHours', async (url: string) => {
    const response = await TenantAdminService.getOpertionalhour(url);

    return response.data;
});

// an action to update user state if the user is admin.
export const currentPageAction = createAction('orgDetails/currentPage', (currentPage: number) => {
    return {
        payload: currentPage,
    }
});