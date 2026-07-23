# Grupo Paula Pessoa — Site institucional

Site institucional estático do Grupo Paula Pessoa, desenvolvido com HTML, CSS e JavaScript puro.

## Executar localmente

Na pasta do projeto, inicie um servidor HTTP:

```powershell
python -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Estrutura

- `index.html`: estrutura e conteúdo da página.
- `css/estilos.css`: estilos e responsividade.
- `js/principal.js`: filtros, carrosséis, catálogo de unidades e localizador.
- `assets/`: imagens, logos, ícones e fotos das unidades.

## Integração futura com back-end

As unidades são consolidadas no catálogo `unitCatalog`, em `js/principal.js`. Esse catálogo é o ponto de substituição por dados JSON vindos de uma API, preservando os componentes visuais existentes.

## Publicação

O projeto não exige build. Pode ser publicado diretamente no GitHub Pages ou em qualquer hospedagem de arquivos estáticos.
