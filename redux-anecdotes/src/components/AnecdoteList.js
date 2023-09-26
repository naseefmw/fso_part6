import { useSelector, useDispatch } from 'react-redux'
import { changeVote } from '../reducers/anecdoteReducer'
import { Notify } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  const filteredAnecdotes = useSelector((state) => {
    if (state.filter) {
      return state.anecdotes.filter((a) =>
        a.content.toLowerCase().includes(state.filter.toLowerCase())
      )
    } else {
      return state.anecdotes
    }
  })

  const vote = (id) => {
    const anecdoteVoted = filteredAnecdotes.find((a) => a.id === id)
    const newAnecdote = {
      content: anecdoteVoted.content,
      votes: anecdoteVoted.votes + 1,
    }
    dispatch(changeVote(id, newAnecdote))
    dispatch(Notify(`you voted '${anecdoteVoted.content}'`, 5))
  }

  return (
    <>
      {filteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default AnecdoteList
