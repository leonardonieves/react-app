import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      authenticated: false
    }
  },
  reducers: {
    setAuthenticated: (state, ...rest) => {
      state.user.authenticated = rest[0].payload
      let user = state.user
      if (rest[0].payload)
        sessionStorage.setItem('user',
          JSON.stringify({
            userId: user.userId,
            token: state.user.token,
            authenticated: rest[0].payload
          }))
      localStorage.removeItem('user')

    },
    setUser: (state, ...rest) => {
      state.user = rest[0].payload
      sessionStorage.setItem('user', JSON.stringify({
        userId: state.user.userId,
        token: state.user.token,
        authenticated: true
      }))
    },
  }
})

export const selectAuthenticated = state => state.user.user.authenticated
export const selectAuthenticatedUserId = state => state.user.user.userId
export const selectAuthenticatedUser = state => state.user.user
export const selectUserPermissions = state => state.user.user.role

export const {setAuthenticated, setUser} = userSlice.actions

export default userSlice.reducer
