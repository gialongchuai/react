import React from 'react';
import logo from './logo.svg';
import style from './style.module.scss';
import TodoList from './components/TodoList/TodoList'
import Watch from './components/Watch/Watch';
import Count from './components/Count/Count';

function App() {
  return (
    <div className={style.app}>
      {/* <TodoList /> */}
      {/* <Watch /> */}
      <Count />
    </div>
  );
}

export default App;
