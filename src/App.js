import React from 'react';
import Header from './components/header';
import TaskBar from './components/taskbar';
import Tasklist from './components/tasklist';

function App() {
  return (
    <div>
      <Header />
      <TaskBar />
      <Tasklist />
    </div>
  );
}

export default App;
