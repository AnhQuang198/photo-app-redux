import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <nav>
          <ul>
            <li>
              <Link to={`photo`}>Your Name</Link>
            </li>
            <li>
              <Link to={`cart`}>Your Name</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default App;
