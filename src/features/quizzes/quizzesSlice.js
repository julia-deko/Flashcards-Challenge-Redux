import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { addQuizIdForTopic } from "../topics/topicSlice";

const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
    }
}});

export const addQuizForTopicId = (quiz) => {
    const { topicId, id } = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizIdForTopic({ topicId: topicId, quizId: id}));
    };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzes.actions;
export const quizzesReducer = quizzes.reducer();