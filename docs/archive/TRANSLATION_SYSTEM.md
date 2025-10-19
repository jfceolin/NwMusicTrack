# Sistema de Tradução - New World Music Tracker

## Visão Geral
Este projeto agora suporta 3 idiomas: Português (padrão), Inglês e Espanhol.

## Estrutura de Arquivos

### Arquivos de Tradução
- `data/translations/pt.json` - Traduções em português
- `data/translations/en.json` - Traduções em inglês  
- `data/translations/es.json` - Traduções em espanhol

### Arquivos de Músicas
- `data/songs_pt.json` - Músicas em português
- `data/songs_en.json` - Músicas em inglês
- `data/songs_es.json` - Músicas em espanhol

### Páginas HTML
- `index.html` - Página principal (português)
- `en.html` - Página em inglês
- `es.html` - Página em espanhol

## Como Funciona

### 1. Seletor de Idioma
- Cada página tem um seletor de idioma no topo
- O idioma selecionado é salvo no localStorage
- Ao trocar de idioma, a página recarrega automaticamente

### 2. Carregamento Dinâmico
- O JavaScript carrega as traduções baseado no idioma selecionado
- As músicas são carregadas do arquivo correspondente ao idioma
- A interface é atualizada com os textos traduzidos

### 3. Persistência
- O idioma escolhido é salvo no localStorage
- O progresso do usuário é mantido independente do idioma
- Ao voltar à página, o idioma anterior é restaurado

## Adicionando Novos Idiomas

### 1. Criar Arquivo de Tradução
Crie um novo arquivo em `data/translations/[codigo].json`:

```json
{
  "language": "Nome do Idioma",
  "languageCode": "codigo",
  "ui": {
    "title": "🎶 New World Music Tracker",
    "subtitle": "Texto explicativo...",
    "partsCollected": "Partes Coletadas:",
    "completeInstruments": "Instrumentos Completos:",
    "completeSongs": "Músicas Completas:",
    "resetProgress": "Resetar Progresso",
    "exportProgress": "Exportar Progresso",
    "resetConfirm": "Confirmação de reset...",
    "resetSuccess": "Sucesso ao resetar...",
    "exportSuccess": "Sucesso ao exportar..."
  },
  "instruments": {
    "Guitar": "Tradução da Guitarra",
    "Drum": "Tradução do Tambor",
    "Flute": "Tradução da Flauta",
    "Violin": "Tradução do Violino",
    "Bass": "Tradução do Baixo",
    "Mandolin": "Tradução do Bandolim"
  },
  "parts": {
    "Part 1": "Parte 1",
    "Part 2": "Parte 2",
    "Part 3": "Parte 3"
  }
}
```

### 2. Criar Arquivo de Músicas
Crie um novo arquivo em `data/songs_[codigo].json` com as músicas traduzidas.

### 3. Criar Página HTML
Crie uma nova página `[codigo].html` baseada nas páginas existentes.

### 4. Atualizar JavaScript
Adicione o novo idioma ao seletor em todas as páginas HTML.

## Traduções Atuais

### Português (pt)
- Página: `index.html`
- Músicas: Nomes traduzidos para português
- Interface: Textos em português

### Inglês (en)  
- Página: `en.html`
- Músicas: Nomes originais em inglês
- Interface: Textos em inglês

### Espanhol (es)
- Página: `es.html` 
- Músicas: Nomes traduzidos para espanhol
- Interface: Textos em espanhol

## Manutenção

### Atualizando Traduções
1. Edite o arquivo JSON correspondente ao idioma
2. As mudanças são aplicadas automaticamente ao recarregar a página

### Adicionando Novas Músicas
1. Adicione a música em todos os arquivos de idioma
2. Mantenha o mesmo `id` em todos os idiomas
3. Traduza apenas o campo `nome` e `instrumentos.nome`

### Adicionando Novos Instrumentos
1. Adicione a tradução em `data/translations/[idioma].json`
2. Use a chave em inglês como referência
3. Atualize todos os idiomas
