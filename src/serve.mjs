import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { join, resolve, extname, normalize } from "node:path";

const [directory = "dist/ketoneurology.com", portValue = "4173"] = process.argv.slice(2);
const root = resolve(directory);
const port = Number(portValue);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".ico": "image/x-icon"
};

createServer((request, response) => {
  const url = new URL(request.url ?? "/", `http://${request.headers.host}`);
  const decoded = decodeURIComponent(url.pathname);
  const safePath = normalize(decoded).replace(/^(\.\.(\/|\\|$))+/, "");
  let filePath = join(root, safePath);

  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, "index.html");
  }

  if (!existsSync(filePath)) {
    filePath = join(root, "404.html");
    response.statusCode = existsSync(filePath) ? 404 : 404;
  }

  if (!existsSync(filePath)) {
    response.setHeader("content-type", "text/plain; charset=utf-8");
    response.end("Not found");
    return;
  }

  response.setHeader("content-type", types[extname(filePath)] ?? "application/octet-stream");
  createReadStream(filePath).pipe(response);
}).listen(port, () => {
  console.log(`Serving ${root} at http://localhost:${port}`);
});
