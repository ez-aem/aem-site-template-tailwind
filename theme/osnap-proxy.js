const http = require("http");

function onRequest(req, res) {
  console.log("serve: " + req.url);

  const options = {
    hostname: "localhost",
    port: 7001,
    path: req.url,
    method: req.method,
    headers: {
      ...req.headers,
      authorization: "Basic YWRtaW46YWRtaW4=",
    },
  };

  const proxy = http.request(options, function (r) {
    res.writeHead(r.statusCode, r.headers);
    r.pipe(res, {
      end: true,
    });
  });

  req.pipe(proxy, {
    end: true,
  });
}

http.createServer(onRequest).listen(3000);
console.log("Listening on port 3000");
