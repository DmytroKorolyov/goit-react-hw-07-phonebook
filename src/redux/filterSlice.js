import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContacts: (state, { payload }) => {
      state.filter = payload;
    },
  },
  selectors: {
    selectFilter: state => state.filter,
  },
});

export const filterReducer = slice.reducer;
export const { filterContacts } = slice.actions;
export const { selectFilter } = slice.selectors;














// import { createSlice } from '@reduxjs/toolkit';


// const slice = createSlice({
//     name: 'filter',
//     initialState: {
//       filter: '',  
//     },
  
//     reducers: {
//        filterContacts: (state, { payload }) => {
//       state.filter = payload;
//     },
//    },
//     selectors: {
//         selectFilter: state => state.filter
//     },
// })


// export const filterReducer = slice.reducer
// export const {filterContacts} = slice.actions
// export const { selectFilter } = slice.selectors