import React from 'react';
import ReactDOM from 'react-dom/client'
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import App from './App.tsx'
import './index.css'
import { todosReducer } from './redux/todoReducer.ts';

const store = createStore(todosReducer, composeWithDevTools());

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
