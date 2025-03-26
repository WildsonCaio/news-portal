import React, { useState } from 'react';

const NewsSearch = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    fetch(`http://localhost:3333/noticias?noticias=${search}`)
      .then((response) => response.json())
      .then((data) => setResults(data));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-wrapper">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Digite o título ou conteúdo"
        onKeyPress={handleKeyPress}
      />
      <button type="button" onClick={handleSearch}>Pesquisar</button>
      <ul className="news-list">
        {results.map((item) => (
          <li className="news-item" key={item._id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <p className="author"><strong>Autor:</strong> {item.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsSearch;
