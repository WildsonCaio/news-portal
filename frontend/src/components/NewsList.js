import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // Buscar as notícias do backend
    fetch('http://localhost:3333/noticias')
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3333/noticias/${id}`, {
      method: 'DELETE',
    }).then(() => {
      // Remover a notícia da lista
      setNews((prevNews) => prevNews.filter((item) => item.id !== id));
    });
  };

  const handleSearch = () => {
    fetch(`http://localhost:3333/noticias?titulo=${search}`)
      .then((response) => response.json())
      .then((data) => setNews(data));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Lista de Notícias</h1>
      </header>
      <div className="search-wrapper">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Digite o título ou conteúdo"
          onKeyPress={handleKeyPress}
        />
        <button type="button" onClick={handleSearch}>Pesquisar</button>
      </div>
      <div className="news-list">
        {news.length > 0 ? (
          news.map((item) => (
            <div className="news-item" key={item.id}>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
              <p className="author"><strong>Autor:</strong> {item.autor}</p>
              <div className="actions">
                <Link to={`/edit-news/${item.id}`}>Editar</Link>
                <button onClick={() => handleDelete(item.id)}>Excluir</button>
              </div>
            </div>
          ))
        ) : (
          <p>Nenhuma notícia encontrada.</p>
        )}
      </div>
    </div>
  );
};

export default NewsList;
