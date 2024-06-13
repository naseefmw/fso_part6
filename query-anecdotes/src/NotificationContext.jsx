/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext } from 'react'

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return `anecdote '${action.payload}' is added`
    case 'VOTE':
      return `anecdote '${action.payload}' voted`
    case 'RESET':
      return ''
    case 'ERROR':
      return action.payload
    default:
      return state
  }
}

const NotificationContext = createContext()

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    ''
  )

  return (
    <NotificationContext.Provider value={[notification, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export const useNotificationValue = () => {
  const notificationDispatch = useContext(NotificationContext)
  return notificationDispatch[0]
}
export const useNotificationDispatch = () => {
  const notificationDispatch = useContext(NotificationContext)
  return notificationDispatch[1]
}

export default NotificationContext
