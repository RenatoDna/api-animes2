# API Animes

[![Docker Hub](https://badgen.net/badge/dockerhub/api-animes/blue?icon=docker)](https://hub.docker.com/repository/docker/renatodna/api_animes_2025_dna)

## 📌 Descrição
API simples para listar, adicionar e remover animes.  
Projeto criado com foco em aprendizado, utilizando **Node.js**, **Express**, **Jest** e **GitHub Flow**.

---

## 🚀 Endpoints

### 📍 **GET /api/animes**
Retorna a lista de todos os animes cadastrados.

---

### 📍 **POST /api/animes**
Adiciona um novo anime.

#### Exemplo de corpo JSON:
```json
{
  "nome": "Bleach",
  "genero": "Ação"
}
