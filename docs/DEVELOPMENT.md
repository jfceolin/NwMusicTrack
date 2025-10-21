# 🛠️ Guia de Desenvolvimento

## 🚀 Início Rápido

```bash
# Instalar dependências
npm install

# Compilar TypeScript
npm run build

# Iniciar servidor
npm start
```

Acesse: `http://localhost:8080`

## 📋 Scripts

```bash
npm run build    # Compila TypeScript → JavaScript
npm start        # Inicia servidor
npm run dev      # Compila + inicia servidor
npm run watch    # Modo watch (auto-compila)
npm run clean    # Remove dist/
```

## 📁 Estrutura

```
nw-music/
├── src/
│   ├── main.ts          # Código principal
│   ├── server.ts        # Servidor HTTP
│   └── types.ts         # Tipos TypeScript
├── dist/
│   └── main.js          # ⚠️ CÓDIGO EXECUTADO PELO NAVEGADOR
├── data/
│   ├── songs.json       # Base de músicas
│   └── translations/    # Traduções (pt, en, es)
└── images/              # Imagens e ícones
```

## 🎨 Cores

**Edite apenas:** `dist/main.js` (função `applyColorsToDOM`)

Veja: [COLORS-SIMPLE.md](COLORS-SIMPLE.md)

## 🌍 Traduções

Arquivos: `data/translations/[pt|en|es].json`

Estrutura:
```json
{
  "ui": { "title": "...", "subtitle": "..." },
  "songs": { "song-1": "Nome da música" },
  "instruments": { "Guitar": "Violão" },
  "parts": { "Part 1": "Parte 1" }
}
```

## 🎵 Adicionar Músicas

Edite: `data/songs.json`

```json
{
  "id": "song-new",
  "image": "score.png",
  "instruments": [
    {
      "name": "Guitar",
      "image": "guitar.png",
      "parts": ["Part 1", "Part 2"]
    }
  ]
}
```

## ⚠️ IMPORTANTE

- **dist/main.js** é o arquivo que o navegador executa
- Mudanças em `src/main.ts` precisam de `npm run build`
- Se TypeScript não compilar, edite `dist/main.js` diretamente

## 🐛 Debug

1. Abra DevTools (F12)
2. Console mostra erros e logs
3. Sources → dist/main.js (código executado)

## 📝 Notas

- TypeScript: strict mode habilitado
- Servidor: porta 8080
- localStorage: dados salvos localmente
- CSS: variáveis em `src/styles/style.css`
