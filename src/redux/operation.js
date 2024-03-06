import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

axios.defaults.baseURL = 'https://65e5d6dcd7f0758a76e78ec0.mockapi.io/'


export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', newContact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);














// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { deleteContact, fetchIsDone, isLoading } from "./contactsSlice";
// import axios from 'axios';

// axios.defaults.baseURL = 'https://65e5d6dcd7f0758a76e78ec0.mockapi.io/'


// export const fetchDataThunk = createAsyncThunk ('fetchData', async (_, thunkAPI) => {
//     try {
//         const { data } = await axios.get('/contacts')
//         return data
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message)
//     }
// })


// export const deleteContactThunk = createAsyncThunk('deleteContact', async (id, thunkAPI) => {
//     try {
//         const { data } = await axios.delete(`/contacts/${id}`)
//         return data.id
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message)
//     }
// })

// export const addContactThunk = createAsyncThunk('addContact', async (body, thunkAPI) => {
//     try {
//         const { data } = await axios.post(`/contacts`, body)
//         return data
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message)
//     }
// })













// export const fetchData = () => async dispatch => {
// try {
//     dispatch(isLoading)
//     const { data } = await axios.get('/contacts')
//     dispatch(fetchIsDone(data))
// } catch (error) {
    
// }
// }



// export const deleteContactThunk = id => async dispatch => {
//     try {
//         const { data } = await axios.delete(`/contacts${id}`)
//         dispatch(deleteContact(id))
//     } catch (error) {
//         dispatch(error(error.message))
//     }
// }


// export const addContactThunk = body => async dispatch => { 

// }