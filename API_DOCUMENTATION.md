# 📚 Documentación API - Phimister Business School
## Strapi v5 - Integración Frontend

Esta documentación describe cómo consumir la API de Strapi v5 para obtener información de programas, testimonios y ex-participantes.

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
3. Asigna permisos a: `programa.find`, `programa.findOne`, `testimonial.find`, `ex-participant.find`
4. Copia el token generado

#### Opción 2: Sin autenticación (si los permisos públicos están habilitados)
No se requiere header de autorización.

---

## 🌐 Endpoints Disponibles

### 1. Programas (Programs)

#### Obtener todos los programas

```http
GET /api/programas?locale={locale}&populate=*
```

**Parámetros:**
- `locale` (requerido): `es` o `ca`
- `populate` (opcional): `*` para obtener todas las relaciones

**Ejemplo:**
```bash
GET https://railwayapp-strapi-production-2d73.up.railway.app/api/programas?locale=es&populate=*
```

**Filtrar solo programas activos:**
```bash
GET /api/programas?locale=es&filters[activo][$eq]=true&populate=*
```

**Filtrar programas destacados:**
```bash
GET /api/programas?locale=es&filters[destacado][$eq]=true&populate=*
```

**Filtrar por tipo:**
```bash
GET /api/programas?locale=es&filters[tipo][$eq]=Aceleración&populate=*
```

#### Obtener un programa por slug

```http
GET /api/programas?filters[slug][$eq]={slug}&locale={locale}&populate=*
```

**Ejemplo:**
```bash
GET https://railwayapp-strapi-production-2d73.up.railway.app/api/programas?filters[slug][$eq]=talento-joven&locale=es&populate=*
```

**Parámetros de populate específicos (Strapi v5):**
```bash
# Popular solo campos específicos
GET /api/programas?filters[slug][$eq]=talento-joven&locale=es&populate[testimonios]=*&populate[exParticipantes]=*&populate[videoMasterclass][populate]=*&populate[objetivosAprendizaje]=*&populate[cta]=*&populate[preguntasFrecuentes]=*
```

#### Estructura de Respuesta - Programa Completo

```json
{
  "data": [
    {
      "id": 1,
      "documentId": "abc123",
      "slug": "talento-joven",
      "nombre": "Talento Joven",
      "descripcionCorta": "Programa para jóvenes emprendedores...",
      "descripcionCompleta": "<p>Descripción completa en HTML...</p>",
      "contenidoExpandible": "<p>Contenido adicional...</p>",
      "tipo": "Aceleración",
      "nivel": "Inicial",
      "modalidad": "Presencial",
      "duracion": "3 meses",
      "requisitoEdad": "16-29 años",
      "ubicacion": "Barcelona",
      "fechaInicio": "2026-03-01",
      "fechaFin": "2026-06-01",
      "destacado": true,
      "activo": true,
      "esSubvencionado": true,
      "paginaActiva": true,
      "imagenHero": {
        "data": {
          "id": 1,
          "attributes": {
            "name": "hero-image.jpg",
            "alternativeText": null,
            "caption": null,
            "width": 1920,
            "height": 1080,
            "formats": {
              "large": {
                "url": "/uploads/large_hero_image.jpg",
                "width": 1920,
                "height": 1080
              },
              "medium": {
                "url": "/uploads/medium_hero_image.jpg",
                "width": 750,
                "height": 422
              },
              "small": {
                "url": "/uploads/small_hero_image.jpg",
                "width": 500,
                "height": 281
              }
            },
            "hash": "hero_image_abc123",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "size": 245.67,
            "url": "/uploads/hero_image_abc123.jpg",
            "previewUrl": null,
            "provider": "cloudinary",
            "provider_metadata": {
              "public_id": "hero_image_abc123",
              "resource_type": "image"
            },
            "createdAt": "2026-01-01T00:00:00.000Z",
            "updatedAt": "2026-01-01T00:00:00.000Z"
          }
        }
      },
      "miniatura": {
        "data": {
          "id": 2,
          "attributes": {
            "url": "/uploads/miniatura_abc123.jpg",
            "width": 600,
            "height": 400
          }
        }
      },
      "imagenPrograma": {
        "data": {
          "id": 3,
          "attributes": {
            "url": "/uploads/imagen_programa_abc123.jpg"
          }
        }
      },
      "videoMasterclass": {
        "video": {
          "data": {
            "id": 1,
            "attributes": {
              "name": "masterclass.mp4",
              "alternativeText": null,
              "caption": null,
              "width": 1920,
              "height": 1080,
              "formats": null,
              "hash": "masterclass_abc123",
              "ext": ".mp4",
              "mime": "video/mp4",
              "size": 52428.80,
              "url": "/uploads/masterclass_abc123.mp4",
              "previewUrl": null,
              "provider": "cloudinary",
              "provider_metadata": {
                "public_id": "masterclass_abc123",
                "resource_type": "video"
              },
              "createdAt": "2026-01-01T00:00:00.000Z",
              "updatedAt": "2026-01-01T00:00:00.000Z"
            }
          }
        },
        "plataforma": "uploaded",
        "embedId": null,
        "url": "https://res.cloudinary.com/.../masterclass_abc123.mp4"
      },
      "dossier": {
        "data": {
          "id": 1,
          "attributes": {
            "name": "dossier-programa.pdf",
            "alternativeText": null,
            "caption": null,
            "hash": "dossier_abc123",
            "ext": ".pdf",
            "mime": "application/pdf",
            "size": 1024.50,
            "url": "/uploads/dossier_abc123.pdf",
            "provider": "cloudinary",
            "createdAt": "2026-01-01T00:00:00.000Z",
            "updatedAt": "2026-01-01T00:00:00.000Z"
          }
        }
      },
      "objetivosAprendizaje": [
        {
          "id": 1,
          "titulo": "Desarrollar habilidades de liderazgo",
          "descripcion": "Aprenderás a liderar equipos y proyectos...",
          "icono": "Rocket",
          "badge": "Próximamente",
          "orden": 1
        },
        {
          "id": 2,
          "titulo": "Crear un plan de negocio",
          "descripcion": "Desarrollarás un plan de negocio completo...",
          "icono": "Briefcase",
          "badge": null,
          "orden": 2
        }
      ],
      "testimonios": {
        "data": [
          {
            "id": 1,
            "documentId": "test1",
            "name": "María García",
            "role": "Emprendedora",
            "company": "TechStart",
            "avatar": {
              "data": {
                "id": 1,
                "attributes": {
                  "url": "/uploads/avatar_maria.jpg"
                }
              }
            },
            "content": "Este programa cambió mi vida...",
            "rating": 5
          }
        ]
      },
      "exParticipantes": {
        "data": [
          {
            "id": 1,
            "documentId": "ex1",
            "name": "Juan Pérez",
            "currentRole": "CEO de StartupXYZ",
            "company": "StartupXYZ",
            "avatar": {
              "data": {
                "id": 1,
                "attributes": {
                  "url": "/uploads/avatar_juan.jpg"
                }
              }
            },
            "linkedIn": "https://linkedin.com/in/juanperez",
            "instagram": "https://instagram.com/juanperez",
            "cohort": "Edición 2024"
          }
        ]
      },
      "cta": {
        "texto": "Inscríbete ahora",
        "url": "https://wa.me/34600000000?text=Hola%20quiero%20información",
        "tipo": "primary"
      },
      "tituloSEO": "Talento Joven | Phimister",
      "descripcionSEO": "Programa de emprendimiento para jóvenes...",
      "preguntasFrecuentes": [
        {
          "id": 1,
          "pregunta": "¿Cuál es la duración del programa?",
          "respuesta": "El programa tiene una duración de 3 meses...",
          "orden": 1
        }
      ],
      "createdAt": "2026-01-01T00:00:00.000Z",
      "updatedAt": "2026-01-15T00:00:00.000Z",
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

### 2. Testimonios (Testimonials)

#### Obtener todos los testimonios

```http
GET /api/testimonials?locale={locale}&populate=*
```

**Ejemplo:**
```bash
GET https://railwayapp-strapi-production-2d73.up.railway.app/api/testimonials?locale=es&populate=*
```

**Filtrar testimonios de un programa específico:**
```bash
GET /api/testimonials?locale=es&filters[program][slug][$eq]=talento-joven&populate=*
```

**Estructura de Respuesta:**
```json
{
  "data": [
    {
      "id": 1,
      "documentId": "test1",
      "name": "María García",
      "role": "Emprendedora",
      "company": "TechStart",
      "avatar": {
        "data": {
          "id": 1,
          "attributes": {
            "url": "/uploads/avatar_maria.jpg",
            "width": 400,
            "height": 400
          }
        }
      },
      "content": "Este programa cambió mi vida profesional...",
      "rating": 5,
      "program": {
        "data": {
          "id": 1,
          "slug": "talento-joven",
          "nombre": "Talento Joven"
        }
      },
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

### 3. Ex-Participantes (Ex-Participants)

#### Obtener todos los ex-participantes

```http
GET /api/ex-participants?locale={locale}&populate=*
```

**Ejemplo:**
```bash
GET https://railwayapp-strapi-production-2d73.up.railway.app/api/ex-participants?locale=es&populate=*
```

**Estructura de Respuesta:**
```json
{
  "data": [
    {
      "id": 1,
      "documentId": "ex1",
      "name": "Juan Pérez",
      "currentRole": "CEO de StartupXYZ",
      "company": "StartupXYZ",
      "avatar": {
        "data": {
          "id": 1,
          "attributes": {
            "url": "/uploads/avatar_juan.jpg"
          }
        }
      },
      "linkedIn": "https://linkedin.com/in/juanperez",
      "instagram": "https://instagram.com/juanperez",
      "cohort": "Edición 2024",
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

## 🔍 Queries Avanzadas

### Filtrar programas por múltiples criterios

```bash
GET /api/programas?locale=es&filters[activo][$eq]=true&filters[destacado][$eq]=true&filters[tipo][$eq]=Aceleración&populate=*
```

### Ordenar programas

```bash
# Ordenar por fecha de creación (más recientes primero)
GET /api/programas?locale=es&sort=createdAt:desc&populate=*

# Ordenar por nombre
GET /api/programas?locale=es&sort=nombre:asc&populate=*
```

### Paginación

```bash
# Primera página (25 items por defecto)
GET /api/programas?locale=es&pagination[page]=1&populate=*

# Página específica con tamaño personalizado
GET /api/programas?locale=es&pagination[page]=2&pagination[pageSize]=10&populate=*
```

### Búsqueda por texto

```bash
# Buscar programas por nombre
GET /api/programas?locale=es&filters[nombre][$contains]=Talento&populate=*
```


---

## 📝 Ejemplos de Uso en Frontend

### JavaScript/TypeScript - Fetch API

```typescript
// Configuración base
const API_BASE_URL = 'https://railwayapp-strapi-production-2d73.up.railway.app/api';
const LOCALE = 'es'; // o 'ca'

// Obtener todos los programas
async function getPrograms() {
  const response = await fetch(
    `${API_BASE_URL}/programas?locale=${LOCALE}&populate=*`
  );
  const data = await response.json();
  return data;
}

// Obtener un programa por slug
async function getProgramBySlug(slug: string) {
  const response = await fetch(
    `${API_BASE_URL}/programas?filters[slug][$eq]=${slug}&locale=${LOCALE}&populate=*`
  );
  const data = await response.json();
  return data.data[0]; // Retorna el primer resultado
}

// Obtener programas activos y destacados
async function getFeaturedPrograms() {
  const response = await fetch(
    `${API_BASE_URL}/programas?locale=${LOCALE}&filters[activo][$eq]=true&filters[destacado][$eq]=true&populate=*`
  );
  const data = await response.json();
  return data;
}

// Obtener programas por tipo
async function getProgramsByType(type: string) {
  const response = await fetch(
    `${API_BASE_URL}/programas?locale=${LOCALE}&filters[tipo][$eq]=${type}&populate=*`
  );
  const data = await response.json();
  return data;
}

```

### React Hook Example

```typescript
import { useState, useEffect } from 'react';

interface Program {
  id: number;
  slug: string;
  nombre: string;
  descripcionCorta: string;
  // ... otros campos
}

export function usePrograms(locale: string = 'es') {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPrograms() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://railwayapp-strapi-production-2d73.up.railway.app/api/programas?locale=${locale}&populate=*`
        );
        const data = await response.json();
        setPrograms(data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPrograms();
  }, [locale]);

  return { programs, loading, error };
}

export function useProgram(slug: string, locale: string = 'es') {
  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProgram() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://railwayapp-strapi-production-2d73.up.railway.app/api/programas?filters[slug][$eq]=${slug}&locale=${locale}&populate=*`
        );
        const data = await response.json();
        setProgram(data.data[0] || null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchProgram();
    }
  }, [slug, locale]);

  return { program, loading, error };
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

// Obtener programas
export const getPrograms = async (locale: string = 'es') => {
  const response = await api.get(`/programas?locale=${locale}&populate=*`);
  return response.data;
};

// Obtener programa por slug
export const getProgramBySlug = async (slug: string, locale: string = 'es') => {
  const response = await api.get(
    `/programas?filters[slug][$eq]=${slug}&locale=${locale}&populate=*`
  );
  return response.data.data[0];
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
const heroImageUrl = getImageUrl(program.imagenHero);
const thumbnailUrl = getImageUrl(program.miniatura);
```

### Formatos de Imagen Disponibles

Strapi/Cloudinary proporciona múltiples formatos:

```typescript
interface ImageFormats {
  large?: { url: string; width: number; height: number };
  medium?: { url: string; width: number; height: number };
  small?: { url: string; width: number; height: number };
  thumbnail?: { url: string; width: number; height: number };
}

function getOptimizedImage(image: any, size: 'small' | 'medium' | 'large' = 'medium') {
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

## 🎥 Manejo de Videos

### Video de Masterclass

```typescript
interface VideoMasterclass {
  video?: {
    data?: {
      attributes?: {
        url: string;
        mime: string;
        size: number;
      };
    };
  };
  plataforma: 'youtube' | 'vimeo' | 'uploaded';
  embedId?: string;
  url?: string;
}

function getVideoUrl(videoMasterclass: VideoMasterclass): string | null {
  if (!videoMasterclass) return null;
  
  // Si es YouTube o Vimeo, usar embedId
  if (videoMasterclass.plataforma === 'youtube' && videoMasterclass.embedId) {
    return `https://www.youtube.com/embed/${videoMasterclass.embedId}`;
  }
  
  if (videoMasterclass.plataforma === 'vimeo' && videoMasterclass.embedId) {
    return `https://player.vimeo.com/video/${videoMasterclass.embedId}`;
  }
  
  // Si es video subido, usar URL directa
  if (videoMasterclass.video?.data?.attributes?.url) {
    const baseUrl = 'https://railwayapp-strapi-production-2d73.up.railway.app';
    return `${baseUrl}${videoMasterclass.video.data.attributes.url}`;
  }
  
  if (videoMasterclass.url) {
    return videoMasterclass.url;
  }
  
  return null;
}
```

---

## 📄 Manejo de Archivos (Dossier)

```typescript
function getDossierUrl(dossier: any): string | null {
  if (!dossier?.data?.attributes?.url) return null;
  
  const url = dossier.data.attributes.url;
  const baseUrl = 'https://railwayapp-strapi-production-2d73.up.railway.app';
  
  if (url.startsWith('http')) {
    return url;
  }
  
  return `${baseUrl}${url}`;
}
```

---

## 🔐 Configuración de Permisos en Strapi

Para que los endpoints funcionen sin autenticación, asegúrate de configurar los permisos:

1. Ve a **Settings → Users & Permissions Plugin → Roles → Public**
2. Habilita los siguientes permisos:
   - `programa.find`
   - `programa.findOne`
   - `testimonial.find`
   - `testimonial.findOne`
   - `ex-participant.find`
   - `ex-participant.findOne`

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

## 📊 Tipos TypeScript (Opcional)

```typescript
// types/program.ts

export interface Program {
  id: number;
  documentId: string;
  slug: string;
  nombre: string;
  descripcionCorta: string;
  descripcionCompleta: string;
  contenidoExpandible?: string;
  tipo: 'Aceleración' | 'Bootcamp' | 'Programa' | 'Curso' | 'Posgrado' | 'Máster';
  nivel: 'Inicial' | 'Intermedio' | 'Avanzado';
  modalidad: 'Presencial' | 'Online' | 'Híbrido' | 'Barcelona' | 'San Francisco';
  duracion: string;
  requisitoEdad: string;
  ubicacion?: string;
  fechaInicio?: string;
  fechaFin?: string;
  destacado: boolean;
  activo: boolean;
  esSubvencionado: boolean;
  paginaActiva: boolean;
  imagenHero?: Media;
  miniatura?: Media;
  imagenPrograma?: Media;
  videoMasterclass?: VideoMasterclass;
  dossier?: Media;
  objetivosAprendizaje?: ObjetivoAprendizaje[];
  testimonios?: {
    data: Testimonial[];
  };
  exParticipantes?: {
    data: ExParticipant[];
  };
  cta?: CtaPrograma;
  tituloSEO?: string;
  descripcionSEO?: string;
  preguntasFrecuentes?: PreguntaFrecuente[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
}

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
    };
  };
}

export interface ImageFormat {
  url: string;
  width: number;
  height: number;
}

export interface VideoMasterclass {
  video?: Media;
  plataforma: 'youtube' | 'vimeo' | 'uploaded';
  embedId?: string;
  url?: string;
}

export interface ObjetivoAprendizaje {
  id: number;
  titulo: string;
  descripcion: string;
  icono?: string;
  badge?: string;
  orden?: number;
}

export interface Testimonial {
  id: number;
  documentId: string;
  name: string;
  role: string;
  company?: string;
  avatar?: Media;
  content: string;
  rating?: number;
}

export interface ExParticipant {
  id: number;
  documentId: string;
  name: string;
  currentRole: string;
  company: string;
  avatar?: Media;
  linkedIn?: string;
  instagram?: string;
  cohort?: string;
}

export interface CtaPrograma {
  texto?: string;
  url?: string;
  tipo?: 'primary' | 'secondary';
}

export interface PreguntaFrecuente {
  id: number;
  pregunta: string;
  respuesta: string;
  orden?: number;
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

export interface StrapiSingleResponse<T> {
  data: T;
  meta: {};
}
```

---

## ✅ Checklist de Implementación

- [ ] Configurar URL base de la API
- [ ] Configurar permisos públicos en Strapi (o crear API Token)
- [ ] Implementar función para obtener programas
- [ ] Implementar función para obtener programa por slug
- [ ] Implementar función para obtener testimonios
- [ ] Implementar función para obtener ex-participantes
- [ ] Implementar manejo de imágenes (URLs completas)
- [ ] Implementar manejo de videos (YouTube/Vimeo/Uploaded)
- [ ] Implementar manejo de archivos (dossier)
- [ ] Implementar manejo de errores
- [ ] Implementar loading states
- [ ] Probar con diferentes locales (es, ca)
- [ ] Probar filtros y búsquedas
- [ ] Optimizar imágenes (usar formatos small/medium/large)

---

## 📞 Soporte

Si tienes problemas con la API:

1. Verifica que los permisos estén configurados correctamente en Strapi
2. Verifica que el content type esté publicado
3. Verifica que el locale sea correcto (`es` o `ca`)
4. Revisa la consola del navegador para errores de CORS
5. Verifica que la URL base sea correcta

---

**Última actualización:** Febrero 2026  
**Versión de Strapi:** 5.11.3

