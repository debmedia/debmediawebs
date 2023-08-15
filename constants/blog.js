export const BLOG_URL = "/blog";
export const BLOG_LOCALES = ['es', 'pt'];

// por ahora hardcodeamos los ids de los idiomas
// son los ids de las categorias de la tabla
export const LANGS_IDS = {
    es: 1709,
    pt: 1710
};

export const LANGS_PARENT_CATEGORY_ID = 1708;
// TODO: buscar las categorias directamente de wp
export const BLOG_RENDER_CATEGORIES = [
    {
        "slug": "banca-y-seguros",
        "name": "Banca y seguros",
        "databaseId": 1354
    },
    {
        "slug": "casos-de-exito",
        "name": "Casos de éxito",
        "databaseId": 855
    },
    {
        "slug": "ebooks",
        "name": "Ebooks",
        "databaseId": 856
    },
    {
        "slug": "gobierno",
        "name": "Gobierno",
        "databaseId": 1355
    },
    {
        "slug": "industrias",
        "name": "Industrias",
        "databaseId": 1353
    },
    {
        "slug": "noticias",
        "name": "Notas",
        "databaseId": 3
    },
    {
        "slug": "novedades",
        "name": "Novedades",
        "databaseId": 2
    },
    {
        "slug": "podcast",
        "name": "Podcast",
        "databaseId": 1382
    },
    {
        "slug": "retail",
        "name": "Retail",
        "databaseId": 1357
    },
    {
        "slug": "salud",
        "name": "Salud",
        "databaseId": 1358
    },
    {
        "slug": "telecomunicaciones",
        "name": "Telecomunicaciones",
        "databaseId": 1356
    },
    {
        "slug": "utilities",
        "name": "Utilities",
        "databaseId": 1359
    }
];