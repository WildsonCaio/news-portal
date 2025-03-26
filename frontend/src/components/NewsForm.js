import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const NewsForm = () => {
  const [titulo, setTitle] = useState('');
  const [texto, setContent] = useState('');
  const [autorId, setAuthor] = useState('');
  const navigate = useNavigate();
  const { id } = useParams(); // Para editar a notícia, obtendo o id da URL

  useEffect(() => {
    if (id) {
      // Caso seja edição, buscar dados da notícia pelo id
      fetch(`http://localhost:3333/noticias/?id=${id}`) // Aqui, se a API retorna um array, altere para um único objeto
        .then((response) => response.json())
        .then((data) => {
          if (data && data.length > 0) {
            // Se a API retornar um array de notícias
            const noticia = data[0];
            setTitle(noticia.titulo || '');
            setContent(noticia.texto || '');
            setAuthor(noticia.autorId || '');
          } else if (data) {
            // Se a API retornar um único objeto de notícia
            setTitle(data.titulo || '');
            setContent(data.texto || '');
            setAuthor(data.autorId || '');
          }
        })
        .catch((error) => console.error('Erro ao buscar a notícia:', error)); // Para capturar erros de rede
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newsData = { titulo, texto, autorId };

    if (id) {
      // Caso seja edição, enviar uma PUT
      fetch(`http://localhost:3333/noticias/${id}`, {
        method: 'PUT',
        body: JSON.stringify(newsData),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => navigate('/news')); // Redireciona para a lista de notícias
    } else {
      // Caso seja criação, enviar uma POST
      fetch('http://localhost:3333/noticias', {
        method: 'POST',
        body: JSON.stringify(newsData),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(() => navigate('/news')); // Redireciona para a lista de notícias
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
