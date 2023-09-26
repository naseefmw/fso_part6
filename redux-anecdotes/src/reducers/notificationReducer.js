import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    removeNotification() {
      return ''
    },
  },
})

export const { setNotification, removeNotification } = notificationSlice.actions

export const Notify = (message, time) => {
  return async (dispatch) => {
    dispatch(setNotification(message))
    setTimeout(() => {
      dispatch(removeNotification())
    }, time * 1000)
  }
}

export default notificationSlice.reducer
