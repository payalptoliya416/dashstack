// redux/kanbanSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { kanbanData } from "../../pages/kanban/KanbanData";

export interface Task {
  id: any;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  attachments: number;
  comments: number;
  assignees: string[];
}

export interface Column {
  id: any;
  title: string;
  taskCount: number;
  borderColor: string;
  tasks: Task[];
}

interface KanbanState {
  columns: Column[];
  selectedTaskId: string | null;
  selectedColumnId: any;
}

const initialState: KanbanState = {
  columns: kanbanData,
  selectedTaskId: null,
  selectedColumnId: null,
};

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    setColumns: (state, action: PayloadAction<Column[]>) => {
      state.columns = action.payload;
    },
    addTask: (
      state,
      action: PayloadAction<{ columnId: number; task: Task }>
    ) => {
      const column = state.columns.find(
        (c) => c.id === action.payload.columnId
      );
      if (column) {
        column.tasks.push(action.payload.task);
        column.taskCount = column.tasks.length;
      }
    },
    setSelectedTask: (state, action: PayloadAction<any>) => {
      state.selectedTaskId = action.payload;
    },
    deleteTask: (
      state,
      action: PayloadAction<{ columnId: number; taskId: number }>
    ) => {
      const column = state.columns.find(
        (c) => c.id === action.payload.columnId
      );
      if (column) {
        column.tasks = column.tasks.filter(
          (t) => t.id !== action.payload.taskId
        );
        column.taskCount = column.tasks.length;
      }
    },
    updateColumn: (state, action: PayloadAction<Column>) => {
      const index = state.columns.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) state.columns[index] = action.payload;
    },
    setSelectedColumn: (state, action: PayloadAction<any>) => {
      state.selectedColumnId = action.payload;
    },
    deleteColumn: (state, action: PayloadAction<any>) => {
      state.columns = state.columns.filter(
        (column) => column.id !== action.payload
      );
    },
    emptyColumn: (state, action: PayloadAction<any>) => {
      const column = state.columns.find((c) => c.id === action.payload);
      if (column) {
        column.tasks = [];
        column.taskCount = 0;
      }
    },
    addColumn: (
      state,
      action: PayloadAction<{ title: string; borderColor: string }>
    ) => {
      const newColumn: Column = {
        id: Math.floor(Math.random() * 10000), // random unique id
        title: action.payload.title,
        borderColor: action.payload.borderColor,
        taskCount: 0,
        tasks: [],
      };
      state.columns.push(newColumn);
    },
  },
});

export const {
  setColumns,
  addTask,
  deleteTask,
  updateColumn,
  setSelectedTask,
  setSelectedColumn,
  emptyColumn,
  deleteColumn,
  addColumn,
} = kanbanSlice.actions;
export default kanbanSlice.reducer;
