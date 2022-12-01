import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk}
    from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}


const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes":0
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: initialState,
    extraReducers:{
        [findTuitsThunk.pending]: (state) => {
            state.loading = true
            state.tuits = []
        },
        [findTuitsThunk.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.tuits = payload
        },
        [findTuitsThunk.rejected]: (state ) => {
            state.loading = false
        },
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                payload = {...payload, ...templateTuit}
                state.loading = false
                state.tuits.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
            console.log(state)
            console.log(payload)
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            },
    },
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload._id);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        }
    }

});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;