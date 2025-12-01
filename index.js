const http = require('http');
const url = require('url');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
	const parsed = url.parse(req.url, true);
	// Ruta GET /hola -> devuelve JSON { message: '¡Hola Mundo!' }
	if (req.method === 'GET' && parsed.pathname === '/hola') {
		const payload = { message: '¡Hola Mundo!' };
		res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
		res.end(JSON.stringify(payload));
		return;
	}

	// Ruta raíz -> pequeña página HTML con enlace al endpoint
	if (req.method === 'GET' && (parsed.pathname === '/' || parsed.pathname === '')) {
		res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
		res.end(`<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Mini API</title></head><body style="font-family:Segoe UI,Arial;background:#f5f7fb;color:#111;display:flex;align-items:center;justify-content:center;height:100vh;margin:0"><div style="text-align:center"><h1>Mini API</h1><p>Prueba el endpoint <a href="/hola">/hola</a></p></div></body></html>`);
		return;
	}

	// Si no se encontró la ruta
	res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
	res.end(JSON.stringify({ error: 'No encontrado' }));
});

server.listen(PORT, () => {
	console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

module.exports = server;

