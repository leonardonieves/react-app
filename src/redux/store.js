import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/UserSlice'
import toolBarReducer from './reducers/ToolBarSlice'
import notificationReducer from './reducers/NotificationSlice'
import settingsReducer from './reducers/SettingsSlice'
import clientFiltersReducer from './reducers/ClientFliterSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    toolBar: toolBarReducer,
    notification: notificationReducer,
    settings: settingsReducer,
    clientFilters: clientFiltersReducer
  }
})
