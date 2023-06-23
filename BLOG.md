# TODO del blog

 
 ## Mapa de componentes

- Pagina
    - Sección
        - Componente

- Home
    - Navbar (#1) name: `BlogNavbar`
    - Categorías (#2) name: `CategoryNav`
    - Hero (post destacado) (#4) (idem que categorias, pero sobre una seccion un poco mas alta) name: `HeroPostCard`
    - Ultimas Notas name: `LatestNewsSection`
        - Tarjeta ultimas notas name: `LatestNewsCard`
    - Suscripción al news letter name: `NewsLetterBanner`
    - Sección Posts name: `PostsSection`
        - Componente Grid (#6) name: `GridContainer`
            - Tarjeta de post (#3) name: `PostCard`
    - Podcast name: `PodcastSection`
        - Tarjeta de podcast name: `PodcastCard`
    - Footer (mismo de la web)
- Post
    - Navbar (#1) name: `BlogNavbar`
    - Categorías (#2) (mimo que el home, solo cambia color de fondo) name: `CategoryNav`
    - Breadcrumbs name: `PostBreadcrumbs`
    - Header del Post name: `PostHeader`
    - Body del post (todo de wp) name: `PostBody`
    - Calificacion del post (?) + compartir redes name: `RateAndShare`
    - Entrar comentarios (?) name: `CommentForm`
    - Seccion de comentarios (?) name: `CommentsSections`
    - Posts Relacionados (#5) name: `RelatedPostsSection`
        - Tarjeta de post (#3) (mismo que la tarjeta del home solo cambia el color y el texto y leer mas ocultado) name: `PostCard`
    - Footer (Mismo de la web)
- Categorias
    - Categorías (#2) (mimo que el home, solo cambia color de fondo) name: `CategoryNav`
    - Titulo de categoría name: `CategoryHeader`
    - Hero (post destacado) (#4) name: `HeroPostCard`
    - Contenedor gird o flex para las tarjetas con el boton de mas (#6) name: `GridContainer`
        - Tarjetas post categoría name: `CategoryPostCard`
    - Posts Relacionados (#5) name: `RelatedPostsSection`
    - Footer (Mismo de la web)
- Resultados de busqueda (igual que la de categorias pero otro titulo)

## Componentes listados

| Componente | Descripción | # |
|------------|-------------|---|
| `BlogNavbar` | xxx | #1 |
| `CategoryNav` | xxx | #2 |
| `HeroPostCard` | xxx | #4 |
| `LatestNewsSection` | xxx |
| `LatestNewsCard` | xxx |
| `NewsLetterBanner` | xxx |
| `PostsSection` | xxx |
| `GridContainer` | xxx | #6 |
| `PostCard` | xxx | #3 |
| `PodcastSection` | xxx |
| `PodcastCard` | xxx |
| `PostBreadcrumbs` | xxx |
| `PostHeader` | xxx |
| `PostBody` | xxx |
| `RateAndShare` | xxx |
| `CommentForm` | xxx |
| `CommentsSections` | xxx |
| `RelatedPostsSection` | xxx | #5 |
| `CategoryHeader` | xxx |
| `CategoryPostCard` | xxx |


## Tareas
- [x] Crear pagina de el home del blog por ahora en blog-new/
- [x] Traer los datos de WP y poder buildiar estáticamente con los datos
- [ ] Hacer la home
    - [x] Crear Componentes
        - [x]`BlogNavbar`
            - [x]`SearchField`
        - [x]`CategoryNav`
        - [x]`HeroPostCard`
            - [x] `AuthorCard`
        - [x]`LatestNewsSecton`
            - [x]`LatestNewsCard`
        - [x]`NewsLetterBanner`
        - [x]`PostsSection`
            - ~~[ ]`GridContainer`~~
                - [x]`PostCard`
        - [x]`PodcastSection`
            - [x]`PodcastCard`
    - [ ] Traducciones home
- [x] Hacer la pagina del post
    - [ ] Crear componentes
        - [x]`PostBreadcrumbs`
        - [x]`PostHeader`
        - [x]`PostBody`
        - [x]`SharePost`
        - [ ]`CommentForm` ?
        - [ ]`CommentsSections` ?
        - [x]`RelatedPostsSection`
    - [ ] Traducciones
- [ ] Hacer la pagina de categorías
    - [x] Crear componentes
        - [x] `CategoryHeader`
        - [x] `CategoryPostCard`
    - [x] Crear los links a las categorias
    - [x] Colores para las industrias
    - [ ] Traducciones
- [x] Buscar
- [ ] Funcionalidad de suscribirse al news letter
- [x] Podcast filtrar por podcast
- [x] Agregar categorias dentro de menu hamburguesa
- [ ] Verificar que los alt text usen los alt de las images
- [ ] Ocultar suscribirse al news letter
- [x] Webhooks para deploy con wp
- [ ] Ver de setear una pagina que muestre los post no publicados como preview


SEO, 
- H1
- Actualizar textos