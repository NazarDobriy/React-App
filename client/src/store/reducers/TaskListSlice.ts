import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITaskList } from "../../models/TaskList";
import { ITaskCard } from "../../models/TaskCard";

interface TaskListState {
  taskLists: ITaskList[];
  isLoading: boolean;
  error: string | null;
}

const initialState: TaskListState = {
  taskLists: [],
  isLoading: false,
  error: null
};

export const taskListSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    fetchTaskLists(state) {
      state.isLoading = true;
      state.error = null;
    },
    fetchTaskListsSuccess(state, action: PayloadAction<ITaskList[]>) {
      state.isLoading = false;
      state.error = null;
      state.taskLists = action.payload;
    },
    fetchTaskListsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    createTaskList(state) {
      state.isLoading = true;
      state.error = null;
    },
    createTaskListSuccess(state, action: PayloadAction<ITaskList>) {
      state.isLoading = false;
      state.taskLists.push(action.payload);
    },
    createTaskListFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateTaskList(state) {
      state.isLoading = true;
      state.error = null;
    },
    updateTaskListSuccess(state, action: PayloadAction<ITaskList>) {
      const updatedTaskList = action.payload;
      state.isLoading = false;
      state.taskLists = state.taskLists.map((taskList) =>
        taskList.id === updatedTaskList.id ? updatedTaskList : taskList
      );
    },
    updateTaskListFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteTaskList(state) {
      state.isLoading = true;
      state.error = null;
    },
    deleteTaskListSuccess(state, action: PayloadAction<ITaskList>) {
      state.isLoading = false;
      state.taskLists = state.taskLists.filter(
        (taskList) => taskList.id !== action.payload.id
      );
    },
    deleteTaskListFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    createTaskCard(state) {
      state.isLoading = true;
      state.error = null;
    },
    createTaskCardSuccess(state, action: PayloadAction<ITaskCard>) {
      state.isLoading = false;
      const taskList = state.taskLists.find(
        (item) => item.id === action.payload.taskListId
      );
      if (taskList) {
        taskList.taskCards.push(action.payload);
      }
    },
    createTaskCardFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteTaskCard(state) {
      state.isLoading = true;
      state.error = null;
    },
    deleteTaskCardSuccess(state, action: PayloadAction<ITaskCard>) {
      state.isLoading = false;
      const taskList = state.taskLists.find(
        (item) => item.id === action.payload.taskListId
      );

      if (taskList) {
        taskList.taskCards = taskList.taskCards.filter(
          (item) => item.id !== action.payload.id
        );
      }
    },
    deleteTaskCardFailure(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
});

export default taskListSlice.reducer;
