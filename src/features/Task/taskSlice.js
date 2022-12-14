import { createSlice } from "@reduxjs/toolkit"


const taskSlice = createSlice({
    name: "todos",
    initialState: {
        dataResponse: [],
        id: 0
    },
    reducers: {
        addTask: (state, action) => {
            state.id += 1;
            const newTodo = {
                id: state.id,
                title: action.payload.title,
                completed: false
            };
            state.dataResponse.push(newTodo);
        },
        deleteTask: (state, action) => {
            let datas = state.dataResponse;
            console.log(datas);
            datas.map(item => {
                if (item.id === action.payload.id) {
                    state.dataResponse.splice(item, 1);
                }
            })
        }
    }
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;