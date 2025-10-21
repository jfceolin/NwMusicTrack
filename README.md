# New World Music Tracker

Aplicação web para rastrear o progresso de coleta de músicas e instrumentos do jogo New World.

## 📋 Características

- ✅ Sistema de rastreamento de partes de instrumentos
- ✅ Suporte multi-idioma (Português, Inglês, Espanhol)
- ✅ Armazenamento local do progresso
- ✅ Exportação/Importação de dados
- ✅ Interface responsiva
- ✅ TypeScript com tipagem estrita
- ✅ Sistema de cores centralizado

## 🚀 Como Usar

### Instalação

```bash
# Instalar dependências
npm install
```

### Desenvolvimento

```bash
# Compilar TypeScript
npm run build

# Iniciar servidor de desenvolvimento
npm run dev

# Assistir mudanças (compilação automática)
npm run watch
```

### Produção

```bash
# Compilar para produção
npm run build

# Iniciar servidor
npm start
```

## 🛠️ Scripts Disponíveis

- `npm run build` - Compila o TypeScript para JavaScript
- `npm start` - Inicia o servidor de produção
- `npm run dev` - Compila e inicia o servidor
- `npm run watch` - Modo watch para desenvolvimento
- `npm run clean` - Remove arquivos compilados
- `npm run lint` - Verifica código com ESLint
- `npm run lint:fix` - Corrige problemas automaticamente
- `npm run format` - Formata código com Prettier
- `npm run format:check` - Verifica formatação
- `npm run type-check` - Verifica tipos sem compilar

## 📁 Estrutura do Projeto

```
nw-music/
├── src/
│   ├── main.ts              # Arquivo principal da aplicação
│   ├── server.ts            # Servidor HTTP
│   ├── types.ts             # Definições de tipos TypeScript
│   ├── utils/
│   │   ├── colors.ts        # Sistema de cores centralizado
│   │   └── index.ts         # Barrel export
│   └── styles/
│       └── style.css        # Estilos da aplicação
├── data/
│   ├── songs.json           # Dados das músicas
│   └── translations/        # Arquivos de tradução
│       ├── pt.json
│       ├── en.json
│       └── es.json
├── images/                  # Imagens e ícones
├── dist/                    # Arquivos compilados (gerado)
├── .eslintrc.json          # Configuração ESLint
├── .prettierrc             # Configuração Prettier
├── tsconfig.json           # Configuração TypeScript
└── package.json            # Dependências e scripts
```

## 🎨 Sistema de Cores

O projeto utiliza um sistema de cores centralizado em `src/utils/colors.ts`:

- Cores são definidas como constantes exportadas
- Função `applyColors()` aplica as cores como variáveis CSS
- Facilita manutenção e tematização

## 🔧 Tecnologias

- **TypeScript** - Linguagem principal com tipagem estrita
- **Node.js** - Runtime do servidor
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **CSS3** - Estilização com variáveis customizadas

## 📝 Boas Práticas Implementadas

### TypeScript
- ✅ Modo `strict` habilitado
- ✅ Source maps para debugging
- ✅ Sem uso de `any`
- ✅ Tipos explícitos em todas as funções
- ✅ Validação rigorosa de null/undefined

### Código
- ✅ Sem duplicação de código
- ✅ Separação de responsabilidades
- ✅ Sistema de módulos ES6
- ✅ Barrel exports para organização

### Qualidade
- ✅ ESLint configurado
- ✅ Prettier configurado
- ✅ Git ignore apropriado
- ✅ Scripts de validação

## 🌍 Suporte a Idiomas

A aplicação detecta automaticamente o idioma do navegador e suporta:

- 🇧🇷 Português (pt)
- 🇺🇸 Inglês (en)
- 🇪🇸 Espanhol (es)

## 💾 Armazenamento

Os dados são salvos automaticamente no `localStorage` do navegador:
- Progresso de coleta
- Idioma selecionado

## 📤 Exportar/Importar

- **Exportar**: Salva o progresso em arquivo JSON
- **Importar**: Restaura progresso de arquivo JSON
- Formato compatível com versões antigas

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com ❤️ para a comunidade de New World
