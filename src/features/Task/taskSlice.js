import { createSlice } from "@reduxjs/toolkit"

const taskSlice = createSlice({
    name: "todos",
    initialState: [
        { id: 1, title: "Task 1", completed: false },
        { id: 2, title: "Task 2", completed: false },
        { id: 3, title: "Task 3", completed: true }
    ],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            state.push(newTodo);
        },

    }
});

export const { addTodo } = taskSlice.actions;
export default taskSlice.reducer;