import { createSlice } from "@reduxjs/toolkit";


const quizzes = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
    }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzes.actions;
export const quizzesReducer = quizzes.reducer();