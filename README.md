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
- `privacidade.html`: política de privacidade e canal para direitos dos titulares.
- `cookies.html`: política de cookies e tecnologias semelhantes.
- `termos.html`: termos de uso do site.
- `css/estilos.css`: estilos e responsividade.
- `js/principal.js`: filtros, carrosséis, catálogo de unidades e localizador.
- `js/vendor/lucide.min.js`: biblioteca de ícones servida localmente.
- `assets/`: imagens, logos, ícones e fotos das unidades.

## Privacidade e LGPD

O Google Maps incorporado é bloqueado até a autorização do visitante. A preferência é registrada localmente com a chave `gpp_cookie_preferences_v1` e pode ser alterada pelo link **Cookies** no rodapé.

Antes de adicionar analytics, pixels, novos serviços externos, formulários ou um backend, revise as políticas, as categorias de consentimento, as bases legais, os prazos de retenção e as medidas de segurança.

## Integração futura com back-end

As unidades são consolidadas no catálogo `unitCatalog`, em `js/principal.js`. Esse catálogo é o ponto de substituição por dados JSON vindos de uma API, preservando os componentes visuais existentes.

## Publicação

O projeto não exige build. Pode ser publicado diretamente no GitHub Pages ou em qualquer hospedagem de arquivos estáticos.
