import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name:"profile",
    initialState:{
        value:null,
    },
    reducers:{
        saveProfile: (state, action) => {
            state.value = action.payload
          },
          deleteProfile: (state) => {
            state.value = undefined
          }
    },
    
});

export const { saveProfile, deleteProfile } = profileSlice.actions

export const selectProfile = (state) => state.profile.value;

export default profileSlice.reducer