# Visualização de Equipamentos Proteção Social - Teresópolis

Uma aplicação interativa desenvolvida em React + Vite que visualiza Equipamentos Proteção Social e os bairros que eles cobrem na cidade de Teresópolis, RJ.

## Funcionalidades

### Visualização Interativa
- **Nós Principais (Azuis)**: Representam os pontos de apoio
- **Subnós (Verdes)**: Representam os bairros atendidos
- **Conexões**: Linhas que mostram quais bairros são cobertos por cada ponto de apoio

### Navegação
- **Zoom**: Use o scroll do mouse ou os botões "🔍+ Zoom In" e "🔍- Zoom Out"
- **Pan**: Arraste com o mouse para mover a visualização
- **Reset View**: Botão "🎯 Reset View" para voltar à visualização inicial

### Expansão de Nós
- **Clique Individual**: Clique em qualquer ponto de apoio (nó azul) para expandir/colapsar seus bairros
- **Expandir Todos**: Botão "📂 Expandir Todos" para mostrar todos os bairros de uma vez
- **Colapsar Todos**: Botão "📁 Colapsar Todos" para voltar à visualização inicial

### Informações em Tempo Real
- **Painel de Informações**: Canto superior esquerdo com instruções
- **Controles**: Canto superior direito com botões de navegação
- **Estatísticas**: Canto inferior esquerdo mostrando:
  - Número de nós visíveis
  - Número de conexões
  - Número de pontos expandidos

## Como Executar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm

### Instalação
```bash
# Clone ou baixe o projeto
cd equipamentos-protecao-social

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

### Acesso
Abra seu navegador e acesse: `http://localhost:5173/`

## Tecnologias Utilizadas

- **React**: Framework para interface de usuário
- **Vite**: Build tool e servidor de desenvolvimento
- **react-force-graph-2d**: Biblioteca para visualização de grafos interativos
- **D3.js**: Biblioteca base para manipulação de dados e visualizações

## Licença

Este projeto foi desenvolvido para fins demonstrativos.
