import axios from "axios";
import { AppDispatch } from "../store";
import { ITaskList } from "../../models/TaskList";
import { environment } from "../../environments/environment";
import { taskListSlice } from "./TaskListSlice";
import { ITaskCard } from "../../models/TaskCard";

const url = environment.apiUrl;

export const fetchTaskLists = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(taskListSlice.actions.fetchTaskLists());
    const response = await axios.get<ITaskList[]>(`${url}/tasks`);
    dispatch(taskListSlice.actions.fetchTaskListsSuccess(response.data));
  } catch (error) {
    dispatch(
      taskListSlice.actions.fetchTaskListsFailure(
        error instanceof Error ? error.message : "Fetching resource error"
      )
    );
  }
};

export const createTaskList =
  (taskList: ITaskList) => async (dispatch: AppDispatch) => {
    try {
      dispatch(taskListSlice.actions.createTaskList());
      const response = await axios.post<ITaskList>(`${url}/tasks`, {
        method: "POST",
        ...taskList
      });
      dispatch(taskListSlice.actions.createTaskListSuccess(response.data));
    } catch (error) {
      dispatch(
        taskListSlice.actions.createTaskListFailure(
          error instanceof Error ? error.message : "Create resource error"
        )
      );
    }
  };

export const updateTaskList =
  (taskList: ITaskList) => async (dispatch: AppDispatch) => {
    try {
      dispatch(taskListSlice.actions.updateTaskList());
      const response = await axios.patch<ITaskList>(
        `${url}/tasks/${taskList.id}`,
        {
          method: "PATCH",
          ...taskList
        }
      );
      dispatch(taskListSlice.actions.updateTaskListSuccess(response.data));
    } catch (error) {
      dispatch(
        taskListSlice.actions.updateTaskListFailure(
          error instanceof Error ? error.message : "Update resource error"
        )
      );
    }
  };

export const deleteTaskList = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(taskListSlice.actions.deleteTaskList());
    const response = await axios.delete<ITaskList>(`${url}/tasks/${id}`);
    dispatch(taskListSlice.actions.deleteTaskListSuccess(response.data));
  } catch (error) {
    dispatch(
      taskListSlice.actions.deleteTaskListFailure(
        error instanceof Error ? error.message : "Fetching resource error"
      )
    );
  }
};

export const createTaskCard =
  (taskCard: ITaskCard) => async (dispatch: AppDispatch) => {
    try {
      dispatch(taskListSlice.actions.createTaskCard());
      const response = await axios.post<ITaskCard>(`${url}/task-card`, {
        method: "POST",
        ...taskCard
      });
      dispatch(taskListSlice.actions.createTaskCardSuccess(response.data));
    } catch (error) {
      dispatch(
        taskListSlice.actions.createTaskCardFailure(
          error instanceof Error ? error.message : "Create resource error"
        )
      );
    }
  };

export const deleteTaskCard = (id: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(taskListSlice.actions.deleteTaskCard());
    const response = await axios.delete<ITaskCard>(`${url}/task-card/${id}`);
    dispatch(taskListSlice.actions.deleteTaskCardSuccess(response.data));
  } catch (error) {
    dispatch(
      taskListSlice.actions.deleteTaskCardFailure(
        error instanceof Error ? error.message : "Fetching resource error"
      )
    );
  }
};
