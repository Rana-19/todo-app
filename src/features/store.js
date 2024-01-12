import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todos/todoSlice";
import quoteReducer from "./quotes/quoteSlice"



const store = configureStore({
    reducer: {
        todos: todoReducer,
        quotes: quoteReducer,





    },
})

export default store