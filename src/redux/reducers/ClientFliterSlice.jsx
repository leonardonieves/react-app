import { createSlice } from '@reduxjs/toolkit'


const clientFilterSlice = createSlice({
  name: 'clientFilters',
  initialState: {
    clientFilters: [],
    isFilterHidden: false
  },
  reducers: {
    setFilters: (state, ...rest) => {
      state.clientFilters = rest[0].payload
    },
    setIsFilterHidden: (state, ...rest) => {
      state.clientFilters = rest[0].payload
    },
  }
})

export const selectClientFilters = state => state?.clientFilters?.clientFilters ?? []
export const selectIsFilterHidden = state => state?.clientFilters?.isFilterHidden

export const {setFilters, setIsFilterHiddenNet} = clientFilterSlice.actions

export default clientFilterSlice.reducer
