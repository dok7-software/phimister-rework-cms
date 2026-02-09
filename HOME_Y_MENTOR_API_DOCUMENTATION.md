# Documentación API: Home y Mentor

Documentación de los content types **Home** (Single Type) y **Mentor** (Collection Type) implementados en el CMS, con APIs para el frontend y referencias a tablas en PostgreSQL.  
**Idiomas:** Español (`es`) y Catalán (`ca`).

---

## Índice

1. [Multilenguaje (i18n)](#1-multilenguaje-i18n)
2. [Home – Single Type](#2-home--single-type)
3. [Mentor – Collection Type](#3-mentor--collection-type)
4. [APIs para el frontend](#4-apis-para-el-frontend)
5. [Tablas PostgreSQL (referencia)](#5-tablas-postgresql-referencia)

---

## 1. Multilenguaje (i18n)

- **Locales:** `es` (español), `ca` (catalán).
- En las peticiones REST se usa el query param **`locale`**:
  - `?locale=es`
  - `?locale=ca`
- Los campos marcados como **Localizable** en esta doc devuelven el texto según el `locale` solicitado.
- Medios (imágenes/vídeos) y campos no localizables son compartidos entre locales.

---

## 2. Home – Single Type

**Content Type:** `home`  
**Tabla principal (PostgreSQL):** `homes`

Home es un **Single Type**: solo existe un registro por locale. Contiene el hero, carrusel de vídeos, etiquetas de programas, filosofía, experiencia internacional, CTAs y la relación con mentores.

### 2.1 Hero Section

| Campo (API)           | Tipo  | Descripción                                      | Requerido | Localizable |
|----------------------|-------|--------------------------------------------------|-----------|-------------|
| `insigniaHero`       | string| Badge superior (ej: "Barcelona · Londres")       | ✅        | ❌          |
| `tituloHero`         | text  | Título principal                                 | ✅        | ✅          |
| `tituloDestacadoHero`| text  | Parte destacada del título                       | ✅        | ✅          |
| `subtituloHero`      | text  | Subtítulo                                       | ✅        | ✅          |
| `descripcionHero`    | text  | Descripción del hero                             | ✅        | ✅          |
| `ctaPrincipalHero`   | string| Texto del botón CTA principal                    | ✅        | ✅          |
| `ctaSecundarioHero`  | string| Texto del botón CTA secundario                   | ✅        | ✅          |
| `imagenFondoHero`    | media | Imagen de fondo (images)                         | ❌        | ❌          |

**Componente (BD):** `components_home_hero_homes`

---

### 2.2 Carrusel de Videos

Array de ítems (componente repetible). Cada ítem:

| Campo (API)  | Tipo   | Descripción                              | Requerido | Localizable |
|-------------|--------|------------------------------------------|-----------|-------------|
| `video`     | media  | Archivo de video (videos)                | ✅        | ❌          |
| `nombre`    | text   | Nombre del programa                      | ✅        | ✅          |
| `descripcion`| text  | Descripción/rol del programa            | ✅        | ✅          |
| `empresa`   | string | Nombre de la empresa                     | ❌        | ❌          |
| `orden`     | number | Orden en el carrusel                     | ✅        | ❌          |

**Componente (BD):** `components_home_video_carrusels`

---

### 2.3 Program Tags (¿Qué quieres aprender?)

| Campo (API)               | Tipo     | Descripción                         | Requerido | Localizable |
|---------------------------|----------|-------------------------------------|-----------|-------------|
| `tituloEtiquetasProgramas`| string   | Título de la sección                | ✅        | ✅          |
| `etiquetasProgramas`      | component| Lista de etiquetas (ver abajo)      | ✅        | -           |

Cada ítem de **etiquetasProgramas**:

| Campo (API)  | Tipo   | Descripción / Ejemplo              | Requerido | Localizable |
|-------------|--------|------------------------------------|-----------|-------------|
| `nombre`    | text   | ej: "Marketing", "Emprendimiento"  | ✅        | ✅          |
| `icono`     | string | Nombre icono lucide-react          | ✅        | ❌          |
| `urlPrograma`| string| URL amigable, ej: "talento-joven"   | ❌        | ❌          |

**Componentes (BD):** `components_home_seccion_etiquetas_programas`, `components_home_etiquetas_programa`

---

### 2.4 Filosofía

| Campo (API)                | Tipo     | Descripción              | Requerido | Localizable |
|----------------------------|----------|--------------------------|-----------|-------------|
| `etiquetaSeccionFilosofia` | string   | ej: "Nuestra Esencia"    | ✅        | ✅          |
| `tituloFilosofia`          | text     | Título de la sección     | ✅        | ✅          |
| `valoresFilosofia`         | component| Lista de valores         | ✅        | -           |

Cada ítem de **valoresFilosofia**:

| Campo (API) | Tipo | Descripción   | Requerido | Localizable |
|-------------|------|---------------|-----------|-------------|
| `titulo`    | text | Título valor  | ✅        | ✅          |
| `descripcion`| text| Descripción   | ✅        | ✅          |

**Componentes (BD):** `components_home_seccion_filosofias`, `components_home_valores_filosofia`

---

### 2.5 Experiencia Internacional

| Campo (API)                     | Tipo     | Descripción                    | Requerido | Localizable |
|---------------------------------|----------|---------------------------------|-----------|-------------|
| `etiquetaSeccionInternacional`  | string   | ej: "Alcance Global"            | ✅        | ✅          |
| `tituloInternacional`           | text     | Título "Experiencia Internacional" | ✅      | ✅          |
| `descripcionInternacional`      | text     | Descripción                     | ✅        | ✅          |
| `tituloRedInternacional`        | text     | ej: "Una Red Global de Mentores" | ✅       | ✅          |
| `descripcionRedInternacional1`  | text     | Primera descripción             | ✅        | ✅          |
| `descripcionRedInternacional2`  | text     | Segunda descripción            | ✅        | ✅          |
| `estadisticasInternacionales`   | component| Lista de estadísticas           | ✅        | -           |

Cada ítem de **estadisticasInternacionales**:

| Campo (API) | Tipo   | Descripción / Ejemplo | Requerido | Localizable |
|-------------|--------|------------------------|-----------|-------------|
| `valor`     | string | ej: "1.500+", "80+"    | ✅        | ❌          |
| `etiqueta`  | string | ej: "alumni", "empresas"| ✅       | ✅          |

**Componentes (BD):** `components_home_seccion_experiencia_internacionals`, `components_home_estadisticas_internacionales`

---

### 2.6 Schedule Call CTA

| Campo (API)               | Tipo   | Descripción      | Requerido | Localizable |
|--------------------------|--------|------------------|-----------|-------------|
| `tituloAgendarLlamada`   | text   | Título           | ✅        | ✅          |
| `descripcionAgendarLlamada`| text | Descripción      | ✅        | ✅          |
| `ctaAgendarLlamada`      | string | Texto del botón  | ✅        | ✅          |

**Componente (BD):** `components_home_cta_agendar_llamadas`

---

### 2.7 Final CTA

| Campo (API)         | Tipo   | Descripción           | Requerido | Localizable |
|---------------------|--------|-----------------------|-----------|-------------|
| `insigniaCtaFinal`  | string | Badge (ej: "Plazas limitadas") | ✅ | ✅          |
| `tituloCtaFinal`    | text   | Título                | ✅        | ✅          |
| `descripcionCtaFinal`| text  | Descripción           | ✅        | ✅          |
| `ctaPrincipalFinal` | string | Texto botón principal | ✅        | ✅          |
| `ctaSecundarioFinal`| string | Texto botón secundario| ✅        | ✅          |

**Componente (BD):** `components_home_cta_finals`

---

### 2.8 Mentores (relación)

| Campo (API) | Tipo     | Descripción                    |
|-------------|----------|--------------------------------|
| `mentores`  | relation | Many to many → Collection Mentor |

Lista de mentores asociados a la Home. Solo IDs por defecto; usar **populate** para traer datos completos (ver APIs más abajo).

---

## 3. Mentor – Collection Type

**Content Type:** `mentor`  
**Tabla principal (PostgreSQL):** `mentores`

Colección de mentores. No es localizable; los campos son los mismos para todos los idiomas.

| Campo (API) | Tipo   | Descripción                | Requerido |
|-------------|--------|----------------------------|-----------|
| `nombre`    | text   | Nombre completo            | ✅        |
| `rol`       | text   | Cargo/posición            | ✅        |
| `bio`       | text   | Biografía corta           | ❌        |
| `foto`      | media  | Imagen (images)           | ✅        |
| `linkedin`  | string | URL de LinkedIn          | ❌        |
| `orden`     | number | Orden de visualización    | ✅        |
| `activo`    | boolean| Si está activo            | ✅        |

Campos de sistema (incluidos en la respuesta): `id`, `documentId`, `createdAt`, `updatedAt`, `publishedAt`.

---

## 4. APIs para el frontend

Base URL: `https://tu-dominio-cms.com` (o la URL de tu Strapi).

### 4.1 Home (Single Type)

Solo hay un registro de Home por locale. Se usa el **singularName** del content type.

#### Obtener Home (español)

```http
GET /api/home?locale=es
```

#### Obtener Home (catalán)

```http
GET /api/home?locale=ca
```

#### Home con todo poblado (recomendado para la página)

Incluir componentes y relación con mentores, y medios (imágenes/vídeos):

```http
GET /api/home?locale=es&populate[HeroHome][populate]=*
GET /api/home?locale=es&populate[VideoCarrusel][populate]=*
GET /api/home?locale=es&populate[EtiquetasProgramas][populate][etiquetasProgramas]=*
GET /api/home?locale=es&populate[Filosofia][populate][valoresFilosofia]=*
GET /api/home?locale=es&populate[ExperienciaInternacional][populate][estadisticasInternacionales]=*
GET /api/home?locale=es&populate[CtaAgendarLlamada]=*
GET /api/home?locale=es&populate[CtaFinal]=*
GET /api/home?locale=es&populate[mentores][populate]=*
```

En una sola petición (Strapi 5), usando `populate=*` o un objeto de populate anidado:

```http
GET /api/home?locale=es&populate=*
```

Si con `populate=*` no se rellenan todos los niveles, usar populate explícito por sección como arriba.

**Ejemplo con `fetch` (ES):**

```javascript
const locale = 'es'; // o 'ca'
const res = await fetch(
  `${process.env.EXPO_PUBLIC_STRAPI_URL}/api/home?locale=${locale}&populate=*`
);
const { data } = await res.json();
// data.documentId, data.HeroHome, data.VideoCarrusel, data.mentores, etc.
```

**Ejemplo con `fetch` (CA):**

```javascript
const res = await fetch(
  `${process.env.EXPO_PUBLIC_STRAPI_URL}/api/home?locale=ca&populate=*`
);
const { data } = await res.json();
```

---

### 4.2 Mentores (Collection Type)

Ruta base: **pluralName** → `mentores`.

#### Listar mentores (todos los publicados)

```http
GET /api/mentores
```

Con foto poblada:

```http
GET /api/mentores?populate=foto
```

Solo activos (filtrar en front o con `filters` si tu Strapi lo permite):

```http
GET /api/mentores?filters[activo][$eq]=true&populate=foto
```

Ordenados por `orden` (si tu controlador/schema lo permiten):

```http
GET /api/mentores?sort=orden:asc&populate=foto
```

#### Obtener un mentor por ID

```http
GET /api/mentores/:documentId?populate=foto
```

O por id numérico (según cómo esté configurado tu Strapi):

```http
GET /api/mentores/:id?populate=foto
```

**Ejemplo con `fetch`:**

```javascript
const res = await fetch(
  `${process.env.EXPO_PUBLIC_STRAPI_URL}/api/mentores?populate=foto&sort=orden:asc`
);
const { data } = await res.json();
// data es un array de mentores
```

---

### 4.3 Resumen de rutas y query params

| Recurso    | Método | Ruta            | Parámetros útiles |
|------------|--------|-----------------|-------------------|
| Home (ES)  | GET    | `/api/home`     | `locale=es`, `populate=*` |
| Home (CA)  | GET    | `/api/home`     | `locale=ca`, `populate=*` |
| Listar mentores | GET | `/api/mentores` | `populate=foto`, `sort=orden:asc`, `filters[activo][$eq]=true` |
| Un mentor  | GET    | `/api/mentores/:id` | `populate=foto` |

---

## 5. Tablas PostgreSQL (referencia)

Nombres típicos que Strapi usa. Pueden variar según versión y config.

### Home (Single Type)

| Tabla / Uso              | Nombre en BD |
|--------------------------|----------------|
| Registro principal Home  | `homes`       |
| Hero                     | `components_home_hero_homes` (vinculado por Strapi a `homes`) |
| Vídeos carrusel          | `components_home_video_carrusels` |
| Sección etiquetas        | `components_home_seccion_etiquetas_programas` |
| Etiqueta programa        | `components_home_etiquetas_programa` |
| Sección filosofía        | `components_home_seccion_filosofias` |
| Valor filosofía          | `components_home_valores_filosofia` |
| Sección exp. internacional | `components_home_seccion_experiencia_internacionals` |
| Estadística internacional| `components_home_estadisticas_internacionales` |
| CTA Agendar Llamada      | `components_home_cta_agendar_llamadas` |
| CTA Final                | `components_home_cta_finals` |

### Mentor (Collection Type)

| Tabla / Uso     | Nombre en BD |
|------------------|----------------|
| Registros mentor | `mentores`    |

### Relación Home ↔ Mentores (Many to Many)

Strapi suele crear una tabla de enlace. Nombre típico:

| Uso              | Nombre en BD (convención Strapi) |
|------------------|-----------------------------------|
| Enlace Home–Mentor | `homes_mentores_lnk` (o similar con sufijo `_lnk`) |

Para comprobar el nombre exacto en tu BD:

```sql
SELECT tablename FROM pg_tables WHERE schemaname = 'public' AND tablename LIKE '%home%' OR tablename LIKE '%mentor%';
```

---

## Changelog

- **Home:** Hero, Carrusel de vídeos, Etiquetas de programas, Filosofía, Experiencia internacional, CTA Agendar Llamada, CTA Final, relación con Mentores.
- **Mentor:** Collection type con nombre, rol, bio, foto, linkedin, orden, activo.
- **i18n:** Campos localizables en Home para `es` y `ca`; APIs con `?locale=es` y `?locale=ca`.
