import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import UserService from "../../servcies/UserService";

type inputsObj = {
    [key: string]: any
}

// async action for user login
// AsynkThunk can only accept one paramter thats why we send user data as an object
export const userLogin = createAsyncThunk('user/login', async (inputsData: object) => {
    const response = await UserService.userLogin(inputsData);

    return response.data;
});