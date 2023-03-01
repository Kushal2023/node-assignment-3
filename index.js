const fs = require("fs");
const http = require("http");

fs.writeFileSync("index.html", "<h1>Hello World</h1><p>This is Kushal</p>");

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    if (err) console.log(err);
    else res.end(data);
  });
});

server.listen(8080, () => {
  console.log("Server listening on port 8080");
});
