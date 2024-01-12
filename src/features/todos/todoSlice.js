import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        allTodos: [],
        Edit: {
            todo: {},
            isEdit: false
        },
        isDark: true
    },
    reducers: {
        add: (state, action) => {
            return {
                ...state,
                allTodos: [action.payload, ...state.allTodos]
            }
        },
        remove: (state, action) => {
            return {
                ...state,
                allTodos: state.allTodos.filter((item) => item.id !== action.payload)

            }
        },
        edit: (state, action) => {

            return {
                ...state,
                Edit: {
                    todo: action.payload,
                    isEdit: true
                }
            }
        },
        update: (state, action) => {
            return {
                ...state,
                allTodos: state.allTodos.map((item) => item.id == action.payload.id ? action.payload : item),
                Edit: { todo: {}, isEdit: false }
            }
        },

        theme: (state, action) => {
            return {
                ...state,
                isDark: state.isDark ? false : true
            }

        }


    }

})
export default todoSlice.reducer
export const { add, remove, edit, update, theme } = todoSlice.actions