import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import NewsForm from './components/NewsForm'; 
import NewsList from './components/NewsList'; 
import Home from './components/Home'; 
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className='navbar'>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-news">Cadastrar Notícia</Link>
            </li>
            <li>
              <Link to="/news">Ver Notícias</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-news" element={<NewsForm />} />
          <Route path="/edit-news/:id" element={<NewsForm />} />
          <Route path="/news" element={<NewsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
