import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const NewsForm = () => {
  const [titulo, setTitle] = useState('');
  const [texto, setContent] = useState('');
  const [autorId, setAuthor] = useState('');
  const navigate = useNavigate();
  const { id } = useParams(); 

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3333/noticias/?id=${id}`) 
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0) {
            const noticia = data[0];
            setTitle(noticia.titulo || '');
            setContent(noticia.texto || '');
            setAuthor(noticia.autorId || '');
          } else if (data) {
            setTitle(data.titulo || '');
            setContent(data.texto || '');
            setAuthor(data.autorId || '');
          }
        })
        .catch((error) => console.error('Erro ao buscar a notícia:', error)); 
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newsData = { titulo, texto, autorId };

    if (id) {
      fetch(`http://localhost:3333/noticias/${id}`, {
        method: 'PUT',
        body: JSON.stringify(newsData),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => navigate('/news')); 
    } else {
      fetch('http://localhost:3333/noticias', {
        method: 'POST',
        body: JSON.stringify(newsData),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => navigate('/news'));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Título</label>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Conteúdo</label>
        <textarea
          value={texto}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Autor</label>
        <input
          type="text"
          value={autorId}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <button type="submit">{id ? 'Atualizar Notícia' : 'Cadastrar Notícia'}</button>
    </form>
  );
};

export default NewsForm;
