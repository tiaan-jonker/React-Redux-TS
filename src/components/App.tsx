import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../redux/'
import RepositoriesList from './RepositoriesList'

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <p>Hello world</p>
        <RepositoriesList />
      </div>
    </Provider>
  )
}

export default App
