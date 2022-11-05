import { createSlice } from "@reduxjs/toolkit";
import profile from "../data/profile-data.json";

const profileSlice = createSlice({
    name: "profile",
    initialState: profile,
    reducers: {
        updateProfile(state, action) {
            state[0].firstName = action.payload.profileInfo["name"].split(" ")[0]
            state[0].lastName = action.payload.profileInfo["name"].split(" ")[1]
            state[0].bio = action.payload.profileInfo["bio"]
            state[0].location = action.payload.profileInfo["location"]
            state[0].website = action.payload.profileInfo["website"]
            state[0].dateOfBirth = action.payload.profileInfo["birthdate"]
        }
    }
});

export const { updateProfile } = profileSlice.actions
export default profileSlice.reducer;