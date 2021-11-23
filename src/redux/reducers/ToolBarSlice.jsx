import { createSlice } from '@reduxjs/toolkit'

export const toolBarSlice = createSlice({
  name: 'toolbar',
  initialState: {
    sidebarShow: 'responsive'
  },
  reducers: {
    toggle: (state, ...rest) => {
      state.sidebarShow = rest[0].payload
    }
  }
})

export const selectIsToggle = state => state.toolBar.sidebarShow

export const { toggle } = toolBarSlice.actions

export default toolBarSlice.reducer
