import apiClient from "../Api/Apiclient";
import { signinRoute } from "../Api/ApiRoutes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    signinStatus:false,
}
export const singIn = createAsyncThunk('login/singin', async(body,{ rejectWithValue, fulfillWithValue }) => {
    try{
        const response = await apiClient({method: 'POST', endPoint: signinRoute(), body: body })
        // return response
       return fulfillWithValue(response.data)
    }  
    catch(error){
        if(error?.response?.data){
            return rejectWithValue(error.response.data)
        }
        else {
            return rejectWithValue(error)
        }
    } 
})
const singInSlice = createSlice({
    name: 'login',
    initialState,
    extraReducers: {
        
        [singIn.pending]: (state, action) => {
            state.signinStatus = 'loading'
        },
        [singIn.fulfilled]: (state, action) => {
            state.signinStatus = "succeeded"
            state.loginData = action.payload
            localStorage.setItem("Token",action.payload.token)
        },
        [singIn.rejected]: (state, action) => {
            state.signinStatus = "failed"
            state.errors = action.payload
        },
    }
})

export default singInSlice.reducer;
