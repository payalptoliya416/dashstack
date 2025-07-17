
import { createSlice,type PayloadAction } from "@reduxjs/toolkit";

export type Task = {
  id: number;
  title: string;
  completed: boolean;
  important: boolean;
};

const initialState: Task[] = [
  { id: 1, title: "Meeting with CEO", completed: false, important: false },
  { id: 2, title: "Pick up kids from school", completed: false, important: true },
  { id: 3, title: "Shopping with Brother", completed: false, important: false },
  { id: 4, title: "Review with HR", completed: true, important: false },
  { id: 5, title: "Going to Dia’s School", completed: false, important: false },
  { id: 6, title: "Check design files", completed: false, important: true },
  { id: 7, title: "Update File", completed: false, important: false },
];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: Date.now(),
        title: action.payload,
        completed: false,
        important: false,
      };
      state.unshift(newTask);
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    toggleImportant: (state, action: PayloadAction<number>) => {
      const task = state.find((t) => t.id === action.payload);
      if (task) task.important = !task.important;
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      return state.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleComplete, toggleImportant, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
