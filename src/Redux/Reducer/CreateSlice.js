import apiClient from "../Api/Apiclient";
import { userCreateRoute,userUpdateRoute } from "../Api/ApiRoutes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    userStatus:false,
    userupdateStatus:false
}
export const Usercreate = createAsyncThunk('User/usercreate', async(body,{ rejectWithValue, fulfillWithValue }) => {
    try{
        const response = await apiClient({method: 'POST', endPoint: userCreateRoute(), body: body })
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
export const  Userupdate= createAsyncThunk("User/userupdate",async(body,{rejectWithValue,fulfillWithValue})=>{
    
    try{
        const response=await apiClient({method:"PUT",endPoint:userUpdateRoute(body?.post?.id),body:body})
        return fulfillWithValue(response.data)
    }
    catch(error){
        if(error?.response?.data){
            return rejectWithValue(error.response.data)
        }
        else{
            return rejectWithValue(error)
        }
    }
})
const CreateSlice = createSlice({
    name: 'User',
    initialState,
    extraReducers: {
        
        [Usercreate.pending]: (state, action) => {
            state.userStatus = 'loading'
        },
        [Usercreate.fulfilled]: (state, action) => {
            state.userStatus = "succeeded"
            state.userData = action.payload
        },
        [Usercreate.rejected]: (state, action) => {
            state.userStatus = "failed"
            state.errors = action.payload
        },
        [Userupdate.pending]: (state, action) => {
            state.userupdateStatus = 'loading'
        },
        [Userupdate.fulfilled]: (state, action) => {
            state.userupdateStatus = "succeeded"
            state.updateData = action.payload
        },
        [Userupdate.rejected]: (state, action) => {
            state.userupdateStatus = "failed"
            state.errors = action.payload
        },
    }
})

export default CreateSlice.reducer;
