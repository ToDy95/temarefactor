import React from 'react';
import './App.css';
import TaskViewer from './components/TaskViewer';
import CreateTask from './components/CreateTask';
import { globalContext } from './components/Context/Context';
import { useContext } from 'react';

function App() {
  const [tasks] = useContext(globalContext)
  return (
    <div className="App">
      <TaskViewer data={tasks}/>
      {/* <CreateTask  /> */}
    </div>
  );
}

export default App;
