import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { pokemonsReducer } from './reducers/pokemons'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import {  logger } from './middlewares'
import './index.css'

const composeAlt =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const composedEnhacers = composeAlt(applyMiddleware(thunk,logger)
)

const store = createStore(
  pokemonsReducer,
  composedEnhacers
)
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
