import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteContact, fetchIsDone, isLoading } from "./contactsSlice";
import axios from 'axios';

axios.defaults.baseURL = 'https://65e5d6dcd7f0758a76e78ec0.mockapi.io/'


export const fetchDataThunk = createAsyncThunk ('fetchData', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/contacts')
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})


















export const fetchData = () => async dispatch => {
try {
    dispatch(isLoading)
    const { data } = await axios.get('/contacts')
    dispatch(fetchIsDone(data))
} catch (error) {
    
}
}



export const deleteContactThunk = id => async dispatch => {
    try {
        const { data } = await axios.delete(`/contacts${id}`)
        dispatch(deleteContact(id))
    } catch (error) {
        dispatch(error(error.message))
    }
}


export const addContactThunk = body => async dispatch => { 

}