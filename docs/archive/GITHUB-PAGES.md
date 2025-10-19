# 🚀 Deploy no GitHub Pages

## 📋 Passo a Passo

### 1. Criar Repositório no GitHub

1. **Acesse** [GitHub](https://github.com)
2. **Clique** em "New repository"
3. **Nome**: `nw-music` (ou qualquer nome)
4. **Marque** "Public" (necessário para GitHub Pages gratuito)
5. **Clique** "Create repository"

### 2. Fazer Upload dos Arquivos

#### Opção A: Via GitHub Web Interface
1. **Acesse** o repositório criado
2. **Clique** "uploading an existing file"
3. **Arraste** todos os arquivos da pasta do projeto
4. **Commit** com mensagem: "Initial commit"

#### Opção B: Via Git (Recomendado)
```bash
# Inicializar git
git init

# Adicionar arquivos
git add .

# Commit inicial
git commit -m "Initial commit: New World Music Tracker"

# Adicionar remote
git remote add origin https://github.com/SEU-USUARIO/nw-music.git

# Push para GitHub
git push -u origin main
```

### 3. Ativar GitHub Pages

1. **Acesse** o repositório no GitHub
2. **Clique** na aba "Settings"
3. **Role** até "Pages" (lado esquerdo)
4. **Source**: "Deploy from a branch"
5. **Branch**: "main"
6. **Folder**: "/ (root)"
7. **Clique** "Save"

### 4. Acessar o Site

- **URL**: `https://SEU-USUARIO.github.io/nw-music/`
- **Tempo**: 5-10 minutos para ficar disponível

## 🔧 Arquivos Importantes

### ✅ Arquivos Necessários na Raiz:
- `index.html` - Página principal
- `main.js` - JavaScript
- `style.css` - Estilos
- `data/songs.json` - Dados das músicas
- `images/` - Pasta com imagens
- `.nojekyll` - Desabilita Jekyll
- `_config.yml` - Configuração

### ❌ Arquivos que NÃO devem ir para GitHub Pages:
- `server.js` - Servidor local
- `package.json` - Dependências Node.js
- `src/` - Pasta de desenvolvimento
- `assets/` - Pasta de desenvolvimento
- `docs/` - Documentação local

## 🐛 Solução de Problemas

### Site não carrega
- Verifique se todos os arquivos estão na raiz
- Confirme se o GitHub Pages está ativado
- Aguarde alguns minutos para propagação

### Imagens não aparecem
- Verifique se a pasta `images/` está na raiz
- Confirme se os caminhos em `main.js` estão corretos

### JSON não carrega
- Verifique se `data/songs.json` está na raiz
- Confirme se o arquivo está bem formatado

### Erro 404
- Verifique se `index.html` está na raiz do repositório
- Confirme se o nome do repositório está correto na URL

## 📱 Teste Local

Para testar antes do deploy:

```bash
# Usar servidor local
python -m http.server 8000
# Acesse: http://localhost:8000
```

## 🔄 Atualizações

Para atualizar o site:
1. **Edite** os arquivos localmente
2. **Commit** as mudanças
3. **Push** para GitHub
4. **Aguarde** alguns minutos para atualização automática
