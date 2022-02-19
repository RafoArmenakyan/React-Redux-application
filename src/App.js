import AppRouting from './routes/route';
import { BrowserRouter as Router } from "react-router-dom";

import './App.scss';
import { useEffect } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <AppRouting />
      </div>
    </Router>
  );
}

export default App;
