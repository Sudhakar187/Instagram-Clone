import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const server = jsonServer.create();
const router = jsonServer.router("data/jsondb.json");

const middlewares = jsonServer.defaults();
server.use(middlewares);

// serve assets folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

server.use("/assets", jsonServer.defaults().static(path.join(__dirname, "data/assets")));

server.use(router);

const port = process.env.PORT || 10000;

server.listen(port, () => {
  console.log("JSON Server running on", port);
});