import axios from "axios";
import { AppDispatch } from "../store";
import { ITaskList } from "../../models/TaskList";
import { environment } from "../../environments/environment";
import { taskListSlice } from "./TaskListSlice";

const url = `${environment.apiUrl}/tasks`;

export const fetchTaskLists = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(taskListSlice.actions.fetchTaskLists());
    const response = await axios.get<ITaskList[]>(url);
    dispatch(taskListSlice.actions.fetchTaskListsSuccess(response.data));
  } catch (error) {
    dispatch(
      taskListSlice.actions.fetchTaskListsFailure(
        error instanceof Error ? error.message : "Fetching error"
      )
    );
  }
};

export const createTaskList =
  (taskList: ITaskList) => async (dispatch: AppDispatch) => {
    try {
      dispatch(taskListSlice.actions.createTaskList());
      const response = await axios.post<ITaskList>(url, {
        method: "POST",
        ...taskList
      });
      dispatch(taskListSlice.actions.createTaskListSuccess(response.data));
    } catch (error) {
      dispatch(
        taskListSlice.actions.createTaskListFailure(
          error instanceof Error ? error.message : "Fetching error"
        )
      );
    }
  };

export const updateTaskList =
  (taskList: ITaskList) => async (dispatch: AppDispatch) => {
    try {
      dispatch(taskListSlice.actions.updateTaskList());
      const response = await axios.patch<ITaskList>(`${url}/${taskList.id}`, {
        method: "PATCH",
        ...taskList
      });
      dispatch(taskListSlice.actions.updateTaskListSuccess(response.data));
    } catch (error) {
      dispatch(
        taskListSlice.actions.updateTaskListFailure(
          error instanceof Error ? error.message : "Fetching error"
        )
      );
    }
  };
