# Projeto de Criptomoedas Full Stack

Este é um projeto Full Stack de criptomoedas. Ele inclui a configuração de um backend utilizando Node.js, autenticação com JSON Web Token (JWT), tratamento de imagens e validação de email e senha.

## Estrutura do Projeto

- **config/**: Arquivos de configuração do projeto.
- **migrations/**: Migrações do banco de dados para produtos.
- **models/**: Modelos de dados.
- **node_modules/**: Módulos Node.js utilizados no projeto.
- **src/**: Código fonte principal do projeto.
- **uploads/**: Diretório para armazenamento de imagens enviadas.

## Commits Importantes

- **First Commit**: Commit inicial com a estrutura básica do projeto.
- **Migration Products**: Adição das migrações de produtos.
- **JSONWEBTOKEN**: Implementação da autenticação usando JWT.
- **Imagens tratamento**: Implementação do tratamento de imagens.
- **Validado Email e Senha**: Validação de email e senha no processo de autenticação.

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/tandsilva/JWT2.git
   ```

2. Navegue até o diretório do projeto:
   ```sh
   cd JWT2
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```

## Executando o Projeto

1. Inicie o servidor:
   ```sh
   npm start
   ```

2. Acesse o projeto em seu navegador em `http://localhost:3000`.

## Funcionalidades

- Autenticação de usuários utilizando JSON Web Tokens (JWT).
- Validação de email e senha durante o registro e login.
- Tratamento e armazenamento de imagens enviadas.
- Gerenciamento de produtos com migrações do banco de dados.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para a nova feature (`git checkout -b feature/nova-feature`).
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Envie para a branch (`git push origin feature/nova-feature`).
5. Abra um Pull Request.
