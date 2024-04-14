const http = require("http");
const mainRouteController = require("./controllers/main");
const gameRouteController = require("./controllers/game");
const defaultRouteController = require("./controllers/default");
const voteRouteController = require("./controllers/vote");
const path = require("path");

const fs = require("fs");
const server = http.createServer((req, res) => {
  let data = "";

  req.on("data", (chunk) => {
    data += chunk.toString();
  });

  req.on("end", () => {
    console.log(JSON.parse(data));
  });
  const url = req.url;
  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
      break;
  }
  switch (url) {
    case "/":
      console.log("Спасибо за запрос, скоро придумаю, что тебе ответить");
      break;
    case "/game":
      gameRouteController(res);

      console.log("Спасибо за запрос, скоро придумаю, что тебе ответить");
      break;
    case "/vote":
      voteRouteController(req, res);

      console.log("Спасибо за запрос, скоро придумаю, что тебе ответить");
      break;
    default:
      console.log("необрабатываемый запрос");
  }
  defaultRouteController(res, url);
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });

  res.end(
    "<h1>Спасибо за запрос, скоро придумаю, что тебе ответить</h1>",
    "utf8"
  );
});
server.listen(3000);
