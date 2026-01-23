# API Gestao Construtora

Backend desenvolvido para o gerenciamento de clientes e empreendimentos de uma construtora/incorporadora. O sistema permite o cadastro de empreendimentos e a associacao de clientes a esses projetos.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Turso / SQLite (Banco de dados)

## Estrutura do Projeto

O projeto segue uma arquitetura separada por responsabilidades:

- controllers/: Logica de negocio e manipulacao das requisicoes.
- routes/: Definicao dos endpoints da API.
- config/: Configuracoes de conexao com banco de dados e variaveis de ambiente.
- middlewares/: Tratamento de erros e validacoes.

## Endpoints Principais

### Empreendimentos
- GET /empreendimentos: Lista todos os empreendimentos cadastrados.
- POST /empreendimentos: Cadastra um novo empreendimento.

### Clientes
- GET /clientes: Lista todos os clientes, incluindo o nome do empreendimento associado.
- POST /clientes: Cadastra um novo cliente vinculado a um empreendimento.

## Como Executar o Projeto

1. Instale as dependencias:
   npm install

2. Configure as variaveis de ambiente:
   Crie um arquivo .env na raiz do projeto seguindo o modelo do .env.example.

3. Inicie o servidor em modo de desenvolvimento:
   npm run dev

## Licenca

Este projeto foi desenvolvido para fins de estudo e treinamento.
