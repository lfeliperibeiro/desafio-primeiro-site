const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
nunjucks.configure("views", {
  express: server,
});

server.set("view engine", "njk");

server.use(express.static("public"));

server.get("/", (req, res) => {
  return res.render("about");
});

server.get("/courses", (req, res) => {
  return res.render("courses");
});

server.use((req, res) =>{
    res.status(404).render('not-found')
})

server.listen(3000, () => {
  console.log("server running");
});
