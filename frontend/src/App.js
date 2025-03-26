import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importação dos componentes
import NewsForm from './components/NewsForm'; // Formulário de cadastro/edição de notícias
import NewsList from './components/NewsList'; // Exibição de notícias cadastradas
import Home from './components/Home'; // Página inicial
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar comum em todas as telas */}
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

        {/* Definindo as rotas para diferentes páginas */}
        <Routes>
          {/* Página inicial */}
          <Route path="/" element={<Home />} />

          {/* Página para cadastro de notícias */}
          <Route path="/add-news" element={<NewsForm />} />

          {/* Página para editar uma notícia, passando o id como parâmetro */}
          <Route path="/edit-news/:id" element={<NewsForm />} />

          {/* Página para listar todas as notícias */}
          <Route path="/news" element={<NewsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
