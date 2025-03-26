import axios from 'axios';

// URL do seu backend
const API_URL = 'http://localhost:3333';

// Instância do Axios
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Funções para interagir com a API
export const getNoticias = (filters = {}) => {
  return api.get('/noticias', { params: filters });
};

export const addNoticia = (noticia) => {
  return api.post('/noticias', noticia);
};

export const updateNoticia = (id, noticia) => {
  return api.put(`/noticias/${id}`, noticia);
};

export const deleteNoticia = (id) => {
  return api.delete(`/noticias/${id}`);
};
