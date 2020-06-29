const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const data = require("./data");
nunjucks.configure("views", {
  express: server,
  autoescape: false,
});

server.set("view engine", "njk");

server.use(express.static("public"));

server.get("/", (req, res) => {
  about = {
    image: "https://rocketseat.com.br/static/images/logo-rocketseat.svg",
    title: "Rocketseat",
    imagetech: "https://rocketseat.com.br/static/images/update/trofeu-home.svg",
    description:
      "As melhores tecnologias em programação, direto ao ponto e do jeito certo.",
    uls: [
      { name: "JavaScript" },
      { name: "Node.js" },
      { name: "React" },
      { name: "React-Native" },
    ],
  };

  return res.render("about", { about });
});

server.get("/courses", (req, res) => {
  return res.render("courses", { items: data });
});

server.use((req, res) => {
  res.status(404).render("not-found");
});

server.listen(3000, () => {
  console.log("server running");
});
