# News Portal

Este é um portal de notícias fictício, criado para exemplificar a integração entre um frontend React e um backend Node.js.

## Estrutura do Projeto
news-portal/ ├── backend/ │ ├── .gitignore │ ├── Dockerfile │ ├── package.json │ ├── server.js │ ├── storage.json │ ├── controllers/ │ │ ├── autoresController.js │ │ └── noticiasController.js │ ├── models/ │ │ ├── autorModel.js │ │ └── noticiaModel.js │ └── routes/ │ ├── autores.js │ └── noticias.js ├── frontend/ │ ├── .gitignore │ ├── Dockerfile │ ├── package.json │ ├── README.md │ ├── public/ │ │ ├── favicon.ico │ │ ├── index.html │ │ ├── logo192.png │ │ ├── logo512.png │ │ ├── manifest.json │ │ └── robots.txt │ └── src/ │ ├── App.css │ ├── App.js │ ├── index.js │ ├── components/ │ │ ├── Home.js │ │ ├── NewsForm.js │ │ ├── NewsList.js │ │ └── ... │ └── services/ │ └── api.js ├── docker-compose.yml └── README.md