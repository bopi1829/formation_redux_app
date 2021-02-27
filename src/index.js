import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux';
import tasksApp from './reducers';

import { Provider } from 'react-redux';

//import { addTask, delTask, setVisibilityFilter, VisibilityFilters,  } from './actions/tasks';

const store = createStore (tasksApp)

console.log ("Initial state Redux :", store.getState())

store.subscribe (() => console.log("State store :", store.getState()))
/*
store.dispatch (addTask('Ma premiere tache'));
store.dispatch (addTask('Ma deuxieme tache'));
store.dispatch (addTask('Aller faire des courses'));
store.dispatch (addTask('Aller me baigner'));

store.dispatch (delTask(0));
store.dispatch (delTask(1));

store.dispatch (setVisibilityFilter(VisibilityFilters.SHOW_ALL));
store.dispatch (setVisibilityFilter(VisibilityFilters.SHOW_DELETED));

unsubscribe ();
*/

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
