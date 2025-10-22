# 🚀 Deploy para Vercel

## Configuração Atual

O projeto está configurado para deploy automático no Vercel com as seguintes configurações:

### Arquivos de Configuração

- **`vercel.json`**: Configuração do Vercel com build command e headers
- **`package.json`**: Scripts de build para produção
- **`build-vercel.js`**: Script que copia arquivos necessários para a raiz

### Build Process

1. **TypeScript Compilation**: `tsc` compila os arquivos TypeScript
2. **File Copying**: `build-vercel.js` copia `dist/main.js` para `main.js` na raiz
3. **Static Serving**: Vercel serve os arquivos estáticos

### Estrutura de Arquivos para Produção

```
📁 Projeto
├── 📄 index.html          # Página principal
├── 📄 main.js             # JavaScript compilado (copiado de dist/)
├── 📄 colors.js           # Sistema de cores
├── 📄 style.css           # Estilos
├── 📁 data/
│   ├── 📄 songs.json      # Dados das músicas
│   └── 📁 translations/    # Traduções
└── 📁 images/             # Imagens
```

## Deploy Manual

### 1. Build Local
```bash
npm run build:vercel
```

### 2. Deploy no Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Deploy Automático

O projeto está configurado para deploy automático quando:
- Push para branch `main`
- Pull request mergeado

## Verificação Pós-Deploy

Após o deploy, verificar:
1. ✅ `https://new-world-music-track.vercel.app/` carrega
2. ✅ Músicas aparecem na interface
3. ✅ Cores estão aplicadas (fundo escuro)
4. ✅ Tradução em português funciona
5. ✅ Console não mostra erros 404

## Troubleshooting

### Erro 404 em main.js
- Verificar se `main.js` existe na raiz
- Verificar se `build:vercel` foi executado
- Verificar se `vercel.json` está correto

### Músicas não aparecem
- Verificar se `data/songs.json` está acessível
- Verificar se `data/translations/pt.json` está acessível
- Verificar console do navegador para erros

### Cores não aplicadas
- Verificar se `colors.js` existe na raiz
- Verificar se `window.applyColors` está definido
- Verificar se CSS variables estão sendo aplicadas
