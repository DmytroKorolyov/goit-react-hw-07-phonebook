import { createSlice } from '@reduxjs/toolkit';
import { addContactThunk, deleteContactThunk, fetchContactsThunk } from './operation';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null
  },

};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload;
        state.contacts.isLoading = false;
      })
      .addCase(fetchContactsThunk.rejected, (state, { payload }) => {
        state.contacts.error = payload;
        state.contacts.isLoading = false;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.push(payload);
      })
     
           
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        const index = state.contacts.items.findIndex(
          contact => contact.id === payload
        );
        state.contacts.items.splice(index, 1);
      });
  },




  selectors: {
    selectContacts: state => state.contacts.items,
    selectIsLoading: state => state.contacts.isLoading,
    selectError: state => state.contacts.error,

  },
});

export const contactsReducer = contactSlice.reducer;
export const { addContact, deleteContact, isLoading, isError, fetchIsDone } = contactSlice.actions;
export const { selectContacts, selectIsLoading, selectError } = contactSlice.selectors;











// мой код

// import { createSlice, nanoid } from '@reduxjs/toolkit';
// import { addContactThunk, deleteContactThunk, fetchDataThunk } from './operation';

// const initialState = {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },

// };

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState,
  

//   extraReducers: builder => {
//     builder
//       .addCase(fetchDataThunk.pending, state => {
//         state.contacts.isLoading = true;
//         state.contacts.error = null;
//       })
//       .addCase(fetchDataThunk.fulfilled, (state, { payload }) => {
//       state.contacts.items = payload
//       state.contacts.isLoading = false;
//     })
//       .addCase(fetchDataThunk.rejected, (state, { payload }) => {
//       state.contacts.error = payload
//         state.contacts.isLoading = false;

//       })
//       .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
//       state.contacts.items = state.contacts.items.filter(item => item.id != payload)
//       })
//       .addCase(addContactThunk.fulfilled, (state, { payload }) => {
//       state.contacts.items.push(payload)
//     })
//   },



//   selectors: {
//     selectContacts: state => state.contacts,
//     selectIsLoading: state => state.contacts.isLoading,
//     selectError: state => state.contacts.error,

//   },
// });

// export const contactsReducer = contactSlice.reducer;
// export const { addContact, deleteContact, isLoading, isError, fetchIsDone } = contactSlice.actions;
// export const { selectContacts, selectIsLoading, selectError } = contactSlice.selectors;
























// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid'





// const slice = createSlice({
//     name: 'contacts',
//     initialState: [
//         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     reducers: {
//         deleteContact: (state, { payload }) => {
//             state = state.filter(item => item.id !== payload);
//         },
//         addContact: {
//             prepare(contact) {
//                 return {
//                     payload: {
//                         ...contact,
//                         id: nanoid(),
//                     },
//                 };
//             },
//             reducer(state, { payload }) {
//                 state.push(payload);
//             },
//         },
//     },
//     extraReducers: {},
// });


// export const contactsReducer = slice.reducer;
// export const { deleteContact, addContact } = slice.actions
// export const {selectContacts} = slice.selectors