import apiClient from "../Api/Apiclient";
import { SingupRoute } from "../Api/ApiRoutes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    signUpStatus:false,
}
export const singUp = createAsyncThunk('Register/singup', async(body,{ rejectWithValue, fulfillWithValue }) => {
    try{
        const response = await apiClient({method: 'POST', endPoint: SingupRoute(), body: body })
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
const singupSlice = createSlice({
    name: 'Register',
    initialState,
    extraReducers: {
        
        [singUp.pending]: (state, action) => {
            state.signUpStatus = 'loading'
        },
        [singUp.fulfilled]: (state, action) => {
            state.signUpStatus = "succeeded"
            state.registerData = action.payload
            localStorage.setItem("user_id",action.payload.user.id)
            localStorage.setItem("Token",action.payload.token)
        },
        [singUp.rejected]: (state, action) => {
            state.signUpStatus = "failed"
            state.errors = action.payload
        },
    }
})

export default singupSlice.reducer;


