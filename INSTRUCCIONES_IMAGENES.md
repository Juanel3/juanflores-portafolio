# Instrucciones para Agregar Imágenes

## Ubicación de las Imágenes

Coloca las imágenes en la carpeta `public/images/` con los siguientes nombres:

### Sección Inicio (Hero)
- **Archivo:** `public/images/personaje-hero.png` (o `.jpg`, `.webp`)
- **Descripción:** Personaje 3D trabajando en una laptop (lado derecho de la sección inicio)
- **Dimensiones recomendadas:** 600x600px o superior
- **Formato:** PNG con transparencia o JPG

### Sección Sobre mi
- **Archivo:** `public/images/personaje-sobre-mi.png` (o `.jpg`, `.webp`)
- **Descripción:** Personaje 3D con iconos flotantes alrededor (nube, Wi-Fi, teléfono, engranaje, bombilla, play, diamante)
- **Dimensiones recomendadas:** 500x500px o superior
- **Formato:** PNG con transparencia o JPG

## Cómo Actualizar el Código

Una vez que tengas las imágenes, actualiza el archivo `app/page.tsx` reemplazando los placeholders con:

### Para la sección Hero:
```tsx
<Image 
  src="/images/personaje-hero.png" 
  alt="Juan Miguel trabajando" 
  width={600} 
  height={600}
  className="w-full h-auto"
/>
```

### Para la sección Sobre mi:
```tsx
<Image 
  src="/images/personaje-sobre-mi.png" 
  alt="Juan Miguel con iconos" 
  width={500} 
  height={500}
  className="w-full h-auto"
/>
```

**Nota:** No olvides importar `Image` de `next/image` al inicio del archivo:
```tsx
import Image from 'next/image';
```

## Estructura de Carpetas

```
public/
└── images/
    ├── personaje-hero.png
    └── personaje-sobre-mi.png
```


