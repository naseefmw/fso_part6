import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import { useEffect, useState } from 'react'

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => state.anecdotes)
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  const [filteredAnecdotes, setFilter] = useState(anecdotes)

  useEffect(() => {
    if (anecdotes.length && filter) {
      const filtered = anecdotes.filter((a) =>
        a.content.toLowerCase().includes(filter.toLowerCase())
      )
      setFilter(filtered)
    }
  }, [filter, anecdotes])

  const vote = (id) => {
    console.log('vote', id)
    dispatch(addVote(id))
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
