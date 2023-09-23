import { createSlice } from '@reduxjs/toolkit'

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  }
}

const initialState = []

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    addVote(state, action) {
      const id = action.payload
      const anecdoteToVote = state.find((n) => n.id === id)
      const changedAnecdote = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1,
      }
      return state
        .map((anecdote) => (anecdote.id === id ? changedAnecdote : anecdote))
        .sort((a, b) => b.votes - a.votes)
    },
    createAnecdote(state, action) {
      return [...state, asObject(action.payload)].sort(
        (a, b) => b.votes - a.votes
      )
    },
    appendAnecdote(state, action) {
      return [...state, action.payload].sort((a, b) => b.votes - a.votes)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
  },
})

export const { addVote, createAnecdote, appendAnecdote, setAnecdotes } =
  anecdoteSlice.actions
export default anecdoteSlice.reducer
