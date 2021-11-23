import { createSlice } from '@reduxjs/toolkit'

export const Errors = {
  notFound: {
    title: 'Not Found',
    message: "Resource not found",
    color: "bg-danger"
  },
  unauthorized: {
    title: 'Unauthorized',
    message: 'You dont have the required permission for this action',
    color: 'bg-warning',
  },
  internal: {title: 'Internal Server Error', message: 'Oops, looks like something went wrong!', color: "bg-danger"},
  badRequest: {
    title: 'Data Error',
    message: 'There was a problem with the data of the request',
    color: 'bg-danger'
  }
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    toasts: [],
    notification: {
      color: 'primary',
      message: '',
      visible: 0
    },
    notificationCount: {eolAssets: 0, ctrContracts: 0},
    isLoading: false
  },
  reducers: {
    addToast: (state, ...rest) => {
      let payload = rest[0].payload;
      let prevState = state.toasts;
      state.toasts = [
        ...prevState,
        {
          title: payload.title,
          message: payload.message,
          color: payload.color,
        }
      ]
    },
    addDefaultToast: (state, ...rest) => {
      let error = rest[0].payload
      state.toasts.push({
        title: error.title,
        message: error.message,
        color: error.color,
      })
    },
    showNotification: (state, ...rest) => {
      state.notification = rest[0].payload
    },
    hideNotification: (state, ...rest) => {
      let payload = rest[0].payload;
      let prevState = state.notification;
      state.notification =
        {
          ...prevState,
          visible: payload ?? 0
        }
    },
    setIsLoading: (state, ...rest) => {
      state.isLoading = rest[0].payload
    },
    setNotificationsCount: (state, ...rest) => {
      state.notificationCount = rest[0].payload
    },
  }
});

export const selectToasts = state => state.notification.toasts;
export const selectNotification = state => state.notification.notification;
export const selectIsLoading = state => state.notification.isLoading;
export const selectNotificationCount = state => state.notification.notificationCount;

export const {addToast, addDefaultToast, showNotification, hideNotification, setIsLoading, setNotificationsCount} = notificationSlice.actions;

export default notificationSlice.reducer
