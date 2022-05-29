import { useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'

const RepositoriesList: React.FC = () => {
  const [input, setInput] = useState('')
  const { searchRepos } = useActions()
  const { data, error, loading } = useTypedSelector((state) => state.repos)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    searchRepos(input)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={input} onChange={handleChange} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  )
}

export default RepositoriesList
