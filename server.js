import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("data/jsondb.json");

const middlewares = jsonServer.defaults({
  static: "data"
});

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 10000;

server.listen(port, () => {
  console.log("JSON Server running on", port);
});