# News Portal

Este é um portal de notícias fictício, criado para exemplificar a integração entre um frontend React e um backend Node.js.

## Pré-requisitos

- Node.js (versão 18 ou superior)
- Docker e Docker Compose (para rodar o projeto com Docker)

# Estrutura do Projeto

## Backend

- **server.js**: Configuração do servidor Express.
- **controllers/**: Contém os controladores para as rotas.
- **models/**: Contém os modelos para leitura e escrita de dados.
- **routes/**: Contém as definições de rotas.
- **storage.json**: Arquivo de armazenamento de dados.

## Frontend

- **src/**: Contém o código-fonte do frontend.
- **components/**: Contém os componentes React.
- **services/**: Contém os serviços para interagir com a API.
- **public/**: Contém os arquivos públicos.

## Endpoints da API

### Notícias

- **GET /noticias**: Retorna todas as notícias com filtros opcionais.
- **POST /noticias**: Adiciona uma nova notícia.
- **PUT /noticias/:id**: Atualiza uma notícia existente.
- **DELETE /noticias/:id**: Remove uma notícia.

### Autores

- **GET /autores**: Retorna todos os autores.
- **POST /autores**: Adiciona um novo autor.


# Rodando o Projeto com docker

1. Certifique-se de que você tem o Docker e o Docker Compose instalados em sua máquina.

2. Navegue até o diretório raiz do projeto onde o arquivo docker-compose.yml está localizado:

```
cd news-portal
```
3. Execute o comando para construir e iniciar os contêineres:
```
docker-compose up --build
```
Isso irá construir as imagens Docker para o backend e o frontend, e iniciar os contêineres. O backend estará disponível na porta 3333 e o frontend na porta 3000.


# Rodando o Projeto Localmente

### Backend

1. Navegue até o diretório `backend`
   ```
   cd backend
   ```
2. Instale as dependências:
   ```
   npm install
   ```
3. Inicie o servidor:
   ```
   node server.js
   ```
O backend estará disponível em `http://localhost:3333`.
A documentação no swagger está disponível em `http://localhost:3333/api-docs/`
### Frontend

1. Navegue até o diretório `frontend`
   ```
   cd frontend
   ```
2. Instale as dependências:
   ```
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```
   npm start
   ```
O frontend estará disponível em `http://localhost:3000`.

# Backend Bonus
Para rodar o backend em python é necessários executar os seguintes passos.

1. Ao acessar a pasta backend-python

```
cd backend-python
```
2. criar a venv

```
python -m venv venv
```

3. Ativar o ambiente virtual

```
.\venv\Scripts\activate  Windows

source venv\bin\activate Linux

```

4. instalar as dependências

```
pip install -r requirements.txt
```

5. Criar as tabelas no banco de dados

```
python manage.py migrate
```


6. Criar rodar servidor da aplicação

```
python manage.py runserve
```


7. Acessar a documentação

```
http://127.0.0.1:8000/api/v1/docs/
```
