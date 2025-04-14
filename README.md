# 📌 Projeto Web com MongoDB

## 📖 Descrição
Este é um projeto web desenvolvido com Node.js e MongoDB, que permite aos usuários criarem contas, armazenarem dados nutricionais e acessarem essas informações posteriormente. Ele utiliza uma arquitetura back-end baseada na tecnologia **NodeJS** e um banco de dados **MongoDB** para armazenar os dados.

## 🚀 Tecnologias Utilizadas
- **Node.js** - Ambiente de execução JavaScript
- **MongoDB** - Banco de dados NoSQL
- **Mongoose** - ODM para interagir com o MongoDB
- **JavaScript** - Linguagem principal do projeto
- **HTML + CSS** - Interface do usuário

## 📂 Estrutura do Projeto
```
/
├── backend/                # Código do servidor
│   ├── src/
│   │   ├── config/       # Arquivos de configuraão do banco de dados e outros
│   │   ├── models/         # Schemas do MongoDB
│   │   ├── controllers/    # Lógica das requisições
│   │   ├── routes/       # Definição das rotas com o Express
│   ├── package.json        # Dependências do Node.js
│   ├── app.js        # arquivo raiz e inicializador do back-end
├── frontend/               # Interface do usuário
│   ├── arquivos html, css e javascript
│
└── README.md               # Documentação do projeto
```

## ⚙️ Instalação e Execução
### **1️⃣ Clonar o repositório**
```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
```

### **2️⃣ Configurar e rodar o back-end**
```bash
cd backend
npm install
npm start
```

### **3️⃣ Configurar e rodar o front-end**
Abra o arquivo `initial.html` no navegador ou utilize um servidor local como o Live Server (VSCode Extension).

## 📌 Funcionalidades
✅ Criar conta de usuário<br>
✅ Armazenar e buscar dados nutricionais<br>
✅ Criar e visualizar planos alimentares<br>
✅ Criar e buscar receitas alimentares<br>
✅ Conectar com banco de dados MongoDB<br>
✅ Interface web interativa<br>

## 🛠️ Melhorias Futuras
- Implementar autenticação JWT recomendável evitar a modificação excessiva do histórico de commits, uma vez que isso pode tornar o histórico confuso. O histórico deve ser uma representação precisa do progresso do projeto ao longo do tempo.
- Criar dashboard interativo
- Melhorar responsividade da interface


