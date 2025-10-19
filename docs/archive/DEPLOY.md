# 🚀 Deploy no GitHub Pages

## Configuração Inicial

1. **Fork** este repositório para sua conta GitHub
2. **Renomeie** o repositório para `seu-usuario.github.io` (se for página pessoal) ou mantenha o nome atual
3. **Ative** o GitHub Pages nas configurações do repositório:
   - Vá em Settings → Pages
   - Em "Source", selecione "Deploy from a branch"
   - Escolha a branch `main` como fonte
   - Clique em "Save"

## Acesso

Após a configuração, sua página estará disponível em:
- **Página pessoal**: `https://seu-usuario.github.io/`
- **Repositório específico**: `https://seu-usuario.github.io/nome-do-repo/`

## Arquivos Importantes

- ✅ `.nojekyll` - Desabilita o processamento Jekyll
- ✅ `_config.yml` - Configuração do Jekyll (se necessário)
- ✅ `.gitignore` - Ignora arquivos desnecessários
- ✅ `index.html` - Página principal

## Verificação

Para verificar se está funcionando:
1. Acesse a URL da sua página
2. Teste todas as funcionalidades:
   - Seleção de idioma
   - Marcação de itens
   - Reset de progresso
   - Exportação de dados

## Troubleshooting

### Página não carrega
- Verifique se o GitHub Pages está ativado
- Confirme se a branch `main` está selecionada
- Aguarde alguns minutos para o deploy

### Erro 404
- Verifique se o arquivo `index.html` está na raiz
- Confirme se o arquivo `.nojekyll` existe

### Funcionalidades não funcionam
- Verifique o console do navegador (F12)
- Confirme se todos os arquivos estão sendo carregados
- Teste em modo incógnito

## Atualizações

Para atualizar a página:
1. Faça as alterações nos arquivos
2. Commit e push para a branch `main`
3. O GitHub Pages atualizará automaticamente em alguns minutos
