# 📚 Documentación API - Página Sobre Nosotros
## Strapi v5 - Integración Frontend

Esta documentación describe cómo consumir la API de Strapi v5 para obtener información de la página "Sobre Nosotros", miembros del equipo y socios.

---

## 🔑 Configuración Base

### URL Base de la API

```
https://railwayapp-strapi-production-2d73.up.railway.app/api
```

### Autenticación

**Nota:** Para endpoints públicos (solo lectura), no se requiere autenticación si los permisos están configurados correctamente en Strapi.

Si necesitas autenticación (opcional), puedes usar:

#### Opción 1: API Token (Recomendado para producción)
```http
Authorization: Bearer YOUR_API_TOKEN
```

**Cómo obtener un API Token:**
1. Ve a Strapi Admin → Settings → API Tokens
2. Crea un nuevo token con tipo `Read-only`
3. Asigna permisos a: `sobre-nosotros.find`, `miembro-equipo.find`, `socio.find`
4. Copia el token generado

#### Opción 2: Sin autenticación (si los permisos públicos están habilitados)
No se requiere header de autorización.

---

## 🌐 Endpoints Disponibles

### 1. Página Sobre Nosotros (Single Type)

#### Obtener la página Sobre Nosotros

```http
GET /api/sobre-nosotros?locale={locale}&populate=*
```

**Parámetros:**
- `locale` (requerido): `es` o `ca`
- `populate` (opcional): `*` para obtener todas las relaciones

**Ejemplo:**
```bash
GET https://railwayapp-strapi-production-2d73.up.railway.app/api/sobre-nosotros?locale=es&populate=*
```

**Parámetros de populate específicos (Strapi v5):**
```bash
# Popular solo campos específicos
GET /api/sobre-nosotros?locale=es&populate[hero][populate]=*&populate[sobrePhimister][populate]=*&populate[equipo][populate]=*&populate[miembrosEquipo][populate]=*&populate[experienciaInternacional][populate]=*&populate[partners][populate]=*&populate[socios][populate]=*
```

#### Estructura de Respuesta - Sobre Nosotros Completo

```json
{
  "data": {
    "id": 1,
    "documentId": "about123",
    "hero": {
      "titulo": "Sobre Phimister",
      "subtitulo": "Transformando el futuro del emprendimiento",
      "imagen": {
        "data": {
          "id": 1,
          "attributes": {
            "name": "hero-about.jpg",
            "alternativeText": null,
            "caption": null,
            "width": 1920,
            "height": 1080,
            "formats": {
              "large": {
                "url": "/uploads/large_hero_about.jpg",
                "width": 1920,
                "height": 1080
              },
              "medium": {
                "url": "/uploads/medium_hero_about.jpg",
                "width": 750,
                "height": 422
              },
              "small": {
                "url": "/uploads/small_hero_about.jpg",
                "width": 500,
                "height": 281
              }
            },
            "hash": "hero_about_abc123",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "size": 245.67,
            "url": "/uploads/hero_about_abc123.jpg",
            "previewUrl": null,
            "provider": "cloudinary",
            "provider_metadata": {
              "public_id": "hero_about_abc123",
              "resource_type": "image"
            },
            "createdAt": "2026-01-01T00:00:00.000Z",
            "updatedAt": "2026-01-01T00:00:00.000Z"
          }
        }
      },
      "cta": {
        "texto": "Conoce nuestros programas",
        "url": "/programas",
        "tipo": "primary"
      }
    },
    "sobrePhimister": {
      "titulo": "Sobre Phimister",
      "contenido": "<p>Phimister es una escuela de negocios...</p>",
      "highlights": [
        {
          "id": 1,
          "texto": "Más de 10 años de experiencia",
          "icono": "Award"
        },
        {
          "id": 2,
          "texto": "Más de 1000 estudiantes graduados",
          "icono": "Users"
        }
      ],
      "imagenes": {
        "data": [
          {
            "id": 1,
            "attributes": {
              "url": "/uploads/image1.jpg"
            }
          },
          {
            "id": 2,
            "attributes": {
              "url": "/uploads/image2.jpg"
            }
          }
        ]
      }
    },
    "equipo": {
      "titulo": "Nuestro Equipo",
      "subtitulo": "Conoce a las personas detrás de Phimister"
    },
    "miembrosEquipo": {
      "data": [
        {
          "id": 1,
          "documentId": "member1",
          "nombre": "Juan Pérez",
          "cargo": "Director General",
          "biografia": "<p>Juan tiene más de 15 años de experiencia...</p>",
          "foto": {
            "data": {
              "id": 1,
              "attributes": {
                "url": "/uploads/juan_perez.jpg"
              }
            }
          },
          "email": "juan@phimister.com",
          "linkedIn": "https://linkedin.com/in/juanperez",
          "twitter": "https://twitter.com/juanperez",
          "orden": 1
        }
      ]
    },
    "experienciaInternacional": {
      "titulo": "Experiencia Internacional",
      "contenido": "<p>Phimister tiene presencia en múltiples países...</p>",
      "hitos": [
        {
          "id": 1,
          "titulo": "Países",
          "descripcion": "Presencia internacional",
          "valor": "15+",
          "icono": "Globe",
          "orden": 1
        },
        {
          "id": 2,
          "titulo": "Estudiantes",
          "descripcion": "Alumnos graduados",
          "valor": "5000+",
          "icono": "Users",
          "orden": 2
        }
      ],
      "ubicaciones": [
        {
          "id": 1,
          "pais": "España",
          "ciudad": "Barcelona",
          "bandera": "🇪🇸",
          "descripcion": "Sede principal en Barcelona",
          "coordenadas": {
            "latitud": 41.3851,
            "longitud": 2.1734
          }
        },
        {
          "id": 2,
          "pais": "Estados Unidos",
          "ciudad": "San Francisco",
          "bandera": "🇺🇸",
          "descripcion": "Oficina en San Francisco",
          "coordenadas": {
            "latitud": 37.7749,
            "longitud": -122.4194
          }
        }
      ],
      "imagen": {
        "data": {
          "id": 1,
          "attributes": {
            "url": "/uploads/international.jpg"
          }
        }
      }
    },
    "partners": {
      "titulo": "Nuestros Partners",
      "subtitulo": "Colaboramos con las mejores organizaciones"
    },
    "socios": {
      "data": [
        {
          "id": 1,
          "documentId": "partner1",
          "nombre": "TechCorp",
          "logo": {
            "data": {
              "id": 1,
              "attributes": {
                "url": "/uploads/techcorp_logo.png"
              }
            }
          },
          "descripcion": "Empresa líder en tecnología",
          "url": "https://techcorp.com",
          "orden": 1
        }
      ]
    },
    "tituloSEO": "Sobre Nosotros | Phimister Business School",
    "descripcionSEO": "Conoce más sobre Phimister, nuestra misión, visión y equipo",
    "publicado": true,
    "createdAt": "2026-01-01T00:00:00.000Z",
    "updatedAt": "2026-01-15T00:00:00.000Z",
    "publishedAt": "2026-01-01T00:00:00.000Z",
    "locale": "es"
  },
  "meta": {}
}
```

---

### 2. Miembros del Equipo (Collection Type)

#### Obtener todos los miembros del equipo

```http
GET /api/miembros-equipo?locale={locale}&populate=*
```

**Ejemplo:**
```bash
GET https://railwayapp-strapi-production-2d73.up.railway.app/api/miembros-equipo?locale=es&populate=*
```

**Ordenar por orden:**
```bash
GET /api/miembros-equipo?locale=es&sort=orden:asc&populate=*
```

**Estructura de Respuesta:**
```json
{
  "data": [
    {
      "id": 1,
      "documentId": "member1",
      "nombre": "Juan Pérez",
      "cargo": "Director General",
      "biografia": "<p>Juan tiene más de 15 años de experiencia en el sector educativo...</p>",
      "foto": {
        "data": {
          "id": 1,
          "attributes": {
            "name": "juan_perez.jpg",
            "alternativeText": null,
            "caption": null,
            "width": 400,
            "height": 400,
            "formats": {
              "thumbnail": {
                "url": "/uploads/thumbnail_juan_perez.jpg",
                "width": 150,
                "height": 150
              }
            },
            "hash": "juan_perez_abc123",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "size": 45.67,
            "url": "/uploads/juan_perez_abc123.jpg",
            "provider": "cloudinary",
            "createdAt": "2026-01-01T00:00:00.000Z",
            "updatedAt": "2026-01-01T00:00:00.000Z"
          }
        }
      },
      "email": "juan@phimister.com",
      "linkedIn": "https://linkedin.com/in/juanperez",
      "twitter": "https://twitter.com/juanperez",
      "orden": 1,
      "createdAt": "2026-01-01T00:00:00.000Z",
      "updatedAt": "2026-01-01T00:00:00.000Z",
      "publishedAt": "2026-01-01T00:00:00.000Z",
      "locale": "es"
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```

---

### 3. Socios (Collection Type)

#### Obtener todos los socios

```http
GET /api/socios?locale={locale}&populate=*
```

**Ejemplo:**
```bash
GET https://railwayapp-strapi-production-2d73.up.railway.app/api/socios?locale=es&populate=*
```

**Ordenar por orden:**
```bash
GET /api/socios?locale=es&sort=orden:asc&populate=*
```

**Estructura de Respuesta:**
```json
{
  "data": [
    {
      "id": 1,
      "documentId": "partner1",
      "nombre": "TechCorp",
      "logo": {
        "data": {
          "id": 1,
          "attributes": {
            "name": "techcorp_logo.png",
            "alternativeText": null,
            "caption": null,
            "width": 300,
            "height": 100,
            "formats": {
              "small": {
                "url": "/uploads/small_techcorp_logo.png",
                "width": 150,
                "height": 50
              }
            },
            "hash": "techcorp_logo_abc123",
            "ext": ".png",
            "mime": "image/png",
            "size": 12.45,
            "url": "/uploads/techcorp_logo_abc123.png",
            "provider": "cloudinary",
            "createdAt": "2026-01-01T00:00:00.000Z",
            "updatedAt": "2026-01-01T00:00:00.000Z"
          }
        }
      },
      "descripcion": "Empresa líder en tecnología e innovación",
      "url": "https://techcorp.com",
      "orden": 1,
      "createdAt": "2026-01-01T00:00:00.000Z",
      "updatedAt": "2026-01-01T00:00:00.000Z",
      "publishedAt": "2026-01-01T00:00:00.000Z",
      "locale": "es"
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```

---

## 📝 Ejemplos de Uso en Frontend

### JavaScript/TypeScript - Fetch API

```typescript
// Configuración base
const API_BASE_URL = 'https://railwayapp-strapi-production-2d73.up.railway.app/api';
const LOCALE = 'es'; // o 'ca'

// Obtener página Sobre Nosotros
async function getAboutPage() {
  const response = await fetch(
    `${API_BASE_URL}/sobre-nosotros?locale=${LOCALE}&populate=*`
  );
  const data = await response.json();
  return data.data; // Retorna el objeto único (Single Type)
}

// Obtener todos los miembros del equipo
async function getTeamMembers() {
  const response = await fetch(
    `${API_BASE_URL}/miembros-equipo?locale=${LOCALE}&sort=orden:asc&populate=*`
  );
  const data = await response.json();
  return data.data;
}

// Obtener todos los socios
async function getPartners() {
  const response = await fetch(
    `${API_BASE_URL}/socios?locale=${LOCALE}&sort=orden:asc&populate=*`
  );
  const data = await response.json();
  return data.data;
}
```

### React Hook Example

```typescript
import { useState, useEffect } from 'react';

interface AboutPage {
  hero: HeroSection;
  sobrePhimister: SobrePhimisterSection;
  equipo: EquipoSection;
  miembrosEquipo: {
    data: TeamMember[];
  };
  experienciaInternacional: ExperienciaInternacionalSection;
  partners: PartnersSection;
  socios: {
    data: Partner[];
  };
  tituloSEO?: string;
  descripcionSEO?: string;
  publicado: boolean;
}

export function useAboutPage(locale: string = 'es') {
  const [aboutPage, setAboutPage] = useState<AboutPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAboutPage() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://railwayapp-strapi-production-2d73.up.railway.app/api/sobre-nosotros?locale=${locale}&populate=*`
        );
        const data = await response.json();
        setAboutPage(data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchAboutPage();
  }, [locale]);

  return { aboutPage, loading, error };
}

export function useTeamMembers(locale: string = 'es') {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://railwayapp-strapi-production-2d73.up.railway.app/api/miembros-equipo?locale=${locale}&sort=orden:asc&populate=*`
        );
        const data = await response.json();
        setTeamMembers(data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchTeamMembers();
  }, [locale]);

  return { teamMembers, loading, error };
}

export function usePartners(locale: string = 'es') {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPartners() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://railwayapp-strapi-production-2d73.up.railway.app/api/socios?locale=${locale}&sort=orden:asc&populate=*`
        );
        const data = await response.json();
        setPartners(data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPartners();
  }, [locale]);

  return { partners, loading, error };
}
```

### Axios Example

```typescript
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://railwayapp-strapi-production-2d73.up.railway.app/api',
  headers: {
    'Content-Type': 'application/json',
    // Si necesitas autenticación:
    // 'Authorization': `Bearer ${YOUR_API_TOKEN}`
  },
});

// Obtener página Sobre Nosotros
export const getAboutPage = async (locale: string = 'es') => {
  const response = await api.get(`/sobre-nosotros?locale=${locale}&populate=*`);
  return response.data.data;
};

// Obtener miembros del equipo
export const getTeamMembers = async (locale: string = 'es') => {
  const response = await api.get(
    `/miembros-equipo?locale=${locale}&sort=orden:asc&populate=*`
  );
  return response.data.data;
};

// Obtener socios
export const getPartners = async (locale: string = 'es') => {
  const response = await api.get(
    `/socios?locale=${locale}&sort=orden:asc&populate=*`
  );
  return response.data.data;
};
```

---

## 🖼️ Manejo de Imágenes y Media

### URLs de Imágenes

Las imágenes vienen en el formato de Strapi/Cloudinary. Para construir la URL completa:

```typescript
function getImageUrl(image: any): string | null {
  if (!image?.data?.attributes?.url) return null;
  
  const url = image.data.attributes.url;
  
  // Si la URL ya es completa (empieza con http)
  if (url.startsWith('http')) {
    return url;
  }
  
  // Si es una ruta relativa, construir URL completa
  const baseUrl = 'https://railwayapp-strapi-production-2d73.up.railway.app';
  return `${baseUrl}${url}`;
}

// Uso
const heroImageUrl = getImageUrl(aboutPage.hero.imagen);
const teamMemberPhoto = getImageUrl(teamMember.foto);
const partnerLogo = getImageUrl(partner.logo);
```

### Formatos de Imagen Disponibles

```typescript
interface ImageFormats {
  large?: { url: string; width: number; height: number };
  medium?: { url: string; width: number; height: number };
  small?: { url: string; width: number; height: number };
  thumbnail?: { url: string; width: number; height: number };
}

function getOptimizedImage(image: any, size: 'small' | 'medium' | 'large' | 'thumbnail' = 'medium') {
  if (!image?.data?.attributes) return null;
  
  const formats = image.data.attributes.formats;
  const baseUrl = 'https://railwayapp-strapi-production-2d73.up.railway.app';
  
  if (formats?.[size]?.url) {
    return `${baseUrl}${formats[size].url}`;
  }
  
  // Fallback a URL original
  return `${baseUrl}${image.data.attributes.url}`;
}
```

---

## 📊 Tipos TypeScript

```typescript
// types/about.ts

// ===== SINGLE TYPE: SOBRE NOSOTROS =====

export interface AboutPage {
  id: number;
  documentId: string;
  hero: HeroSection;
  sobrePhimister: SobrePhimisterSection;
  equipo: EquipoSection;
  miembrosEquipo: {
    data: TeamMember[];
  };
  experienciaInternacional: ExperienciaInternacionalSection;
  partners: PartnersSection;
  socios: {
    data: Partner[];
  };
  tituloSEO?: string;
  descripcionSEO?: string;
  publicado: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

// ===== COMPONENTES =====

export interface HeroSection {
  titulo: string;
  subtitulo?: string;
  imagen: Media;
  cta?: CTA;
}

export interface SobrePhimisterSection {
  titulo: string;
  contenido: string;
  highlights?: Highlight[];
  imagenes?: {
    data: Media[];
  };
}

export interface EquipoSection {
  titulo: string;
  subtitulo?: string;
}

export interface ExperienciaInternacionalSection {
  titulo: string;
  contenido: string;
  hitos?: Hito[];
  ubicaciones?: Ubicacion[];
  imagen?: Media;
}

export interface PartnersSection {
  titulo: string;
  subtitulo?: string;
}

// ===== SUB-COMPONENTES =====

export interface CTA {
  texto?: string;
  url?: string;
  tipo?: 'primary' | 'secondary';
}

export interface Highlight {
  id: number;
  texto: string;
  icono?: string;
}

export interface Hito {
  id: number;
  titulo: string;
  descripcion: string;
  valor?: string;
  icono?: string;
  orden: number;
}

export interface Ubicacion {
  id: number;
  pais: string;
  ciudad?: string;
  bandera?: string;
  descripcion?: string;
  coordenadas?: Coordenadas;
}

export interface Coordenadas {
  latitud?: number;
  longitud?: number;
}

// ===== COLLECTION TYPES =====

export interface TeamMember {
  id: number;
  documentId: string;
  nombre: string;
  cargo: string;
  biografia?: string;
  foto?: Media;
  email?: string;
  linkedIn?: string;
  twitter?: string;
  orden?: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

export interface Partner {
  id: number;
  documentId: string;
  nombre: string;
  logo?: Media;
  descripcion?: string;
  url?: string;
  orden?: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

// ===== TIPOS COMPARTIDOS =====

export interface Media {
  data?: {
    id: number;
    attributes: {
      name: string;
      url: string;
      width?: number;
      height?: number;
      formats?: {
        large?: ImageFormat;
        medium?: ImageFormat;
        small?: ImageFormat;
        thumbnail?: ImageFormat;
      };
      mime?: string;
      size?: number;
      alternativeText?: string;
      caption?: string;
      hash?: string;
      ext?: string;
      provider?: string;
      provider_metadata?: {
        public_id?: string;
        resource_type?: string;
      };
      createdAt: string;
      updatedAt: string;
    };
  };
}

export interface ImageFormat {
  url: string;
  width: number;
  height: number;
}

// ===== RESPUESTAS STRAPI =====

export interface StrapiSingleResponse<T> {
  data: T;
  meta: {};
}

export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
```

---

## 🔍 Queries Avanzadas

### Filtrar solo página publicada

```bash
GET /api/sobre-nosotros?locale=es&filters[publicado][$eq]=true&populate=*
```

### Obtener solo miembros del equipo con foto

```bash
GET /api/miembros-equipo?locale=es&filters[foto][$notNull]=true&populate=*
```

### Obtener socios con URL

```bash
GET /api/socios?locale=es&filters[url][$notNull]=true&populate=*
```

### Paginación

```bash
# Primera página (25 items por defecto)
GET /api/miembros-equipo?locale=es&pagination[page]=1&populate=*

# Página específica con tamaño personalizado
GET /api/miembros-equipo?locale=es&pagination[page]=2&pagination[pageSize]=10&populate=*
```

---

## 🔐 Configuración de Permisos en Strapi

Para que los endpoints funcionen sin autenticación, asegúrate de configurar los permisos:

1. Ve a **Settings → Users & Permissions Plugin → Roles → Public**
2. Habilita los siguientes permisos:
   - `sobre-nosotros.find`
   - `miembro-equipo.find`
   - `miembro-equipo.findOne`
   - `socio.find`
   - `socio.findOne`

---

## 🚨 Manejo de Errores

```typescript
async function fetchWithErrorHandling(url: string) {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Verificar si hay error en la respuesta de Strapi
    if (data.error) {
      throw new Error(data.error.message || 'Error desconocido');
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
```

---

## ✅ Checklist de Implementación

- [ ] Configurar URL base de la API
- [ ] Configurar permisos públicos en Strapi (o crear API Token)
- [ ] Implementar función para obtener página Sobre Nosotros
- [ ] Implementar función para obtener miembros del equipo
- [ ] Implementar función para obtener socios
- [ ] Implementar manejo de imágenes (URLs completas)
- [ ] Implementar manejo de componentes anidados (hero, sobrePhimister, etc.)
- [ ] Implementar manejo de relaciones (miembrosEquipo, socios)
- [ ] Implementar manejo de arrays (highlights, hitos, ubicaciones)
- [ ] Implementar manejo de errores
- [ ] Implementar loading states
- [ ] Probar con diferentes locales (es, ca)
- [ ] Optimizar imágenes (usar formatos small/medium/large)
- [ ] Implementar ordenamiento (orden de miembros y socios)

---

## 📞 Soporte

Si tienes problemas con la API:

1. Verifica que los permisos estén configurados correctamente en Strapi
2. Verifica que el content type esté publicado
3. Verifica que el locale sea correcto (`es` o `ca`)
4. Revisa la consola del navegador para errores de CORS
5. Verifica que la URL base sea correcta
6. Para Single Types, recuerda que `data` es un objeto, no un array

---

## 📋 Estructura de Campos - Resumen

### Página Sobre Nosotros (Single Type)
- `hero` (componente) - Sección hero
- `sobrePhimister` (componente) - Sección sobre Phimister
- `equipo` (componente) - Sección del equipo
- `miembrosEquipo` (relación many-to-many) - Miembros del equipo
- `experienciaInternacional` (componente) - Sección internacional
- `partners` (componente) - Sección de partners
- `socios` (relación many-to-many) - Socios/partners
- `tituloSEO` (string) - Título SEO
- `descripcionSEO` (text) - Meta descripción
- `publicado` (boolean) - Estado de publicación

### Miembro del Equipo (Collection Type)
- `nombre` (string) - Nombre del miembro
- `cargo` (string, localizable) - Cargo/posición
- `biografia` (richtext, localizable) - Biografía
- `foto` (media) - Foto del miembro
- `email` (email) - Email de contacto
- `linkedIn` (string) - URL de LinkedIn
- `twitter` (string) - URL de Twitter
- `orden` (integer) - Orden de visualización

### Socio (Collection Type)
- `nombre` (string) - Nombre del socio
- `logo` (media) - Logo del socio
- `descripcion` (text, localizable) - Descripción
- `url` (string) - URL del sitio web
- `orden` (integer) - Orden de visualización

---

**Última actualización:** Febrero 2026  
**Versión de Strapi:** 5.11.3

