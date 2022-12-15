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
            const datas = [...state.dataResponse];
            datas.map(item => {
                if (item.id === action.payload.id) {
                    let index = item.id - 1;
                    datas.splice(index, 1);
                }
            });
            state.dataResponse = datas;
        }
    }
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;