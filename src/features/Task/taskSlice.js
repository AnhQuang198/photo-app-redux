import { createSlice } from "@reduxjs/toolkit"


const taskSlice = createSlice({
    name: "todos",
    initialState: {
        dataResponse: []
    },
    reducers: {
        addTask: (state, action) => {
            const newTodo = {
                id: Date.now(),
                title: action.payload.title,
                completed: false
            };
            state.dataResponse.push(newTodo);
        },
        deleteTask: (state, action) => {

        }

    }
});

export const { addTask } = taskSlice.actions;
export default taskSlice.reducer;