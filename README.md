# Nerf App - Projeto com React, Vite e Firebase

Este é um projeto web moderno construído como uma base sólida para aplicações que necessitam de autenticação de usuários e um banco de dados em tempo real.

## ✨ Funcionalidades

-   **Autenticação Completa:**
    -   Cadastro com E-mail e Senha.
    -   Login com E-mail e Senha.
    -   Login social com Google.
    -   Logout seguro.
-   **Banco de Dados:**
    -   Integração com Firestore para salvar informações dos usuários.
-   **Roteamento:**
    -   Rotas públicas e privadas (protegidas por autenticação).
-   **UI Moderna:**
    -   Interface construída com a biblioteca de componentes **Shadcn/UI**.
-   **Deploy:**
    -   Configurado para deploy simplificado no **GitHub Pages**.

## 🚀 Tecnologias Utilizadas

-   **Frontend:** [React](https://react.dev/) com [Vite](https://vitejs.dev/) e [TypeScript](https://www.typescriptlang.org/)
-   **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) e [Shadcn/UI](https://ui.shadcn.com/)
-   **Backend & Banco de Dados:** [Firebase](https://firebase.google.com/) (Authentication e Firestore)
-   **Roteamento:** [React Router DOM](https://reactrouter.com/)

---

## ⚙️ Configuração Obrigatória do Firebase

Para que o projeto funcione, você precisa configurar seu próprio projeto no Firebase. Siga os passos abaixo.

### 1. Crie um Projeto Firebase

-   Acesse o [Console do Firebase](https://console.firebase.google.com/).
-   Clique em "Adicionar projeto" e siga as instruções.

### 2. Configure a Autenticação

-   No menu do seu projeto, vá para **Authentication**.
-   Na aba **Sign-in method**, ative os seguintes provedores:
    -   **E-mail/senha**
    -   **Google**

### 3. Adicione os Domínios Autorizados

-   Ainda em **Authentication**, vá para a aba **Settings**.
-   Em **Domínios autorizados**, adicione os domínios que usarão a autenticação:
    -   `localhost` (para desenvolvimento local)
    -   O domínio do seu GitHub Pages (ex: `seu-usuario.github.io`)

### 4. Configure o Firestore Database

-   No menu, vá para **Firestore Database**.
-   Clique em "Criar banco de dados" e inicie no **modo de produção**.

### 5. Atualize as Regras de Segurança (Security Rules)

-   Esta é a parte mais importante para a segurança!
-   No seu **Firestore Database**, vá para a aba **Regras**.
-   Substitua as regras existentes pelas seguintes. Elas garantem que um usuário só possa ler e escrever seus próprios dados.

```json
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    // Permite que usuários leiam e escrevam apenas em seus próprios documentos na coleção 'users'
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

-   Clique em **Publicar**.

---

## 💻 Rodando o Projeto Localmente

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
    cd SEU_REPOSITORIO
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  Abra [http://localhost:5173](http://localhost:5173) (ou o endereço que aparecer no seu terminal) no seu navegador.

## 🚀 Deploy no GitHub Pages

O projeto já está configurado para o deploy.

1.  **Faça o build e o deploy:**
    -   Execute o seguinte comando no seu terminal. Ele irá criar a versão de produção do site e enviá-la para a branch `gh-pages` do seu repositório.
    ```bash
    npm run deploy
    ```

2.  **Configure a fonte do GitHub Pages:**
    -   No seu repositório do GitHub, vá para **Settings > Pages**.
    -   Na seção **Build and deployment**, em **Source**, selecione **Deploy from a branch**.
    -   Selecione a branch `gh-pages` e a pasta `/(root)`.
    -   Salve as alterações.

Seu site estará disponível em `https://SEU_USUARIO.github.io/SEU_REPOSITORIO/` em alguns minutos.
