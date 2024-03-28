import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITaskList } from "../../models/TaskList";

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
    }
  }
});

export default taskListSlice.reducer;
