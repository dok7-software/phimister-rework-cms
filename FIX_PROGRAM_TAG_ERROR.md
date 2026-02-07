# 🔧 Solución para el Error de program-tag

## Problema
Strapi está intentando cargar metadatos de `api::program-tag.program-tag` que ya no existe, causando el error:
```
Error on attribute etiquetas in model programa(api::programa.programa): 
Metadata for "api::program-tag.program-tag" not found
```

## Solución

### Opción 1: Limpiar la Base de Datos (Recomendado)

Si estás usando **PostgreSQL** (Railway), ejecuta estos comandos SQL:

```sql
-- 1. Eliminar la tabla de relación many-to-many
DROP TABLE IF EXISTS programas_etiquetas_links;

-- 2. Eliminar metadatos de Strapi relacionados con program-tag
DELETE FROM strapi_core_store_settings 
WHERE key LIKE '%program-tag%' 
   OR key LIKE '%programa%etiquetas%';

-- 3. Eliminar cualquier referencia en componentes
DELETE FROM strapi_components 
WHERE category LIKE '%program-tag%';
```

**Cómo ejecutar:**
1. Ve a tu panel de Railway
2. Abre la base de datos PostgreSQL
3. Ejecuta los comandos SQL anteriores

### Opción 2: Usar el CLI de Strapi

Ejecuta estos comandos para limpiar y regenerar:

```bash
# Limpiar build
npm run build

# O si estás en desarrollo, simplemente reinicia
npm run develop
```

### Opción 3: Eliminar Manualmente desde el Panel de Strapi (Si puedes acceder)

Si puedes acceder al panel de administración:
1. Ve a **Content-Type Builder**
2. Busca cualquier referencia a `program-tag` o `etiquetas`
3. Elimínala manualmente

### Opción 4: Recrear Temporalmente y Eliminar Correctamente

Si ninguna de las opciones anteriores funciona:

1. Recrea temporalmente el content type `program-tag` con el schema mínimo
2. Accede al panel de Strapi
3. Elimina la relación `etiquetas` del content type `programa` desde el panel
4. Elimina el content type `program-tag` desde el panel
5. Elimina los archivos de `program-tag` nuevamente

## Verificación

Después de aplicar la solución, verifica que:

1. ✅ El directorio `src/api/program-tag` no existe
2. ✅ El schema de `programa` no tiene el campo `etiquetas`
3. ✅ No hay referencias a `program-tag` en ningún archivo
4. ✅ Strapi inicia sin errores

## Si el Problema Persiste

Si después de aplicar estas soluciones el error continúa, puede ser necesario:

1. **Hacer backup de la base de datos**
2. **Eliminar todas las tablas relacionadas con `program-tag`**
3. **Regenerar los metadatos de Strapi**

O contacta con el equipo técnico para revisar la base de datos directamente.

