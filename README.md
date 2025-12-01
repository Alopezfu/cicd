# cicd

Mini proyecto demo que incluye una mini-API y una página estática.

## Ejecutar el servidor

1. Instala dependencias (si no lo has hecho):

```powershell
npm install
```

2. Inicia el servidor:

```powershell
npm start
```

El servidor por defecto escucha en `http://localhost:3000`. Visita `/hola` para obtener JSON.

## Tests

Las pruebas usan `jest` y `supertest`.

Instala dependencias (si no lo hiciste antes):

```powershell
npm install
```

Ejecuta las pruebas:

```powershell
npm test
```

## Notas

- Archivo principal: `index.js` (exporta el servidor para pruebas).
- Endpoint de prueba: `GET /hola` → `{ "message": "¡Hola Mundo!" }`.