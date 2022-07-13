import apiClient from "../Api/Apiclient";
import { userListRoute,userDeleteRoute ,userEditRoute} from "../Api/ApiRoutes";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    listStatus:false,
    deleteStatus:false,
    showStatus:false,
}
export const Userlist = createAsyncThunk('list/userlist', async(body,{ rejectWithValue, fulfillWithValue }) => {
    try{
        const response = await apiClient({method:"GET", endPoint: userListRoute()})
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
export const Userdelete = createAsyncThunk('list/delete', async(body,{ rejectWithValue, fulfillWithValue }) => {
    try{
        const response = await apiClient({method:"DELETE", endPoint:userDeleteRoute(body)})
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
export const Usershow=createAsyncThunk("list/show" ,async(body,{rejectWithValue,fulfillWithValue})=>{
    try{
        const response=await apiClient({method:'GET',endPoint:userEditRoute(body)})
        return fulfillWithValue(response.data)
    }
    catch(error){
        if(error?.response?.data){
            return rejectWithValue (error.response.data)
        }
        else{
            return rejectWithValue(error)
        }
    }
})
const CreateSlice = createSlice({
    name: 'list',
    initialState,
    extraReducers: {
        
        [Userlist.pending]: (state, action) => {
            state.listStatus = 'loading'
        },
        [Userlist.fulfilled]: (state, action) => {
            state.listStatus = "succeeded"
            state.userlist = action.payload
        },
        [Userlist.rejected]: (state, action) => {
            state.listStatus = "failed"
            state.errors = action.payload
        },
        [Userdelete.pending]: (state, action) => {
            state.deleteStatus = 'loading'
        },
        [Userdelete.fulfilled]: (state, action) => {
            state.deleteStatus = "succeeded"
            state.userdelete= action.payload
        },
        [Userdelete.rejected]: (state, action) => {
            state.deleteStatus = "failed"
            state.errors = action.payload
        },
        [Usershow.pending]:(state,action)=>{
            state.showStatus="loading"
        },
        [Usershow.fulfilled]:(state,action)=>{
            state.showStatus="succeeded"
            state.usershow=action.payload
        },
        [Usershow.rejected]:(state,action)=>{
            state.showStatus="failed"
            state.errors=action.payload
        }
    }
})

export default CreateSlice.reducer;
