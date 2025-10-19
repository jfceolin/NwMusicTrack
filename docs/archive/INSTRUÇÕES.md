# 🚀 Instruções de Execução

## Opção 1: Servidor Node.js (Recomendado)

1. **Instalar Node.js** (se não tiver):
   - Baixe em: https://nodejs.org/
   - Instale a versão LTS

2. **Executar o servidor**:
   ```bash
   node server.js
   ```

3. **Abrir no navegador**:
   - Acesse: http://localhost:3000

## Opção 2: Servidor Python

1. **Executar servidor Python**:
   ```bash
   python -m http.server 8080
   ```

2. **Abrir no navegador**:
   - Acesse: http://localhost:8080

## Opção 3: Servidor PHP (XAMPP/WAMP)

1. **Copie a pasta** para o diretório do servidor web
2. **Acesse** via navegador: http://localhost/nw-music/

## 🔧 Solução de Problemas

### Erro de CORS
- Use um servidor web (não abra o arquivo diretamente)
- O servidor Node.js já está configurado para CORS

### Imagens não carregam
- Verifique se as imagens estão em `assets/images/`
- Verifique os caminhos no código JavaScript

### JSON não carrega
- Verifique se o arquivo `src/data/songs.json` existe
- Use o console do navegador (F12) para ver erros

## 📁 Estrutura Final

```
nw music/
├── index.html          # Redireciona para src/
├── server.js           # Servidor Node.js
├── package.json        # Configurações Node.js
├── README.md           # Documentação
├── INSTRUÇÕES.md       # Este arquivo
├── src/                # Código fonte
│   ├── index.html      # Página principal
│   ├── main.js         # JavaScript
│   ├── style.css       # Estilos
│   └── data/
│       └── songs.json  # Dados das músicas
├── assets/             # Recursos
│   └── images/         # Imagens dos instrumentos
└── docs/               # Documentação
    ├── New World - Músicas.xlsx
    └── NewWorldMusicTracker.md
```
