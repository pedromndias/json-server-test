const jsonServer = require("json-server");

// Create the object for all my server:
const server = jsonServer.create();

// Make the basic server config:
const middlewares = jsonServer.defaults();

// And use them:
server.use(middlewares);

// Allow access from any client to our server:
const allowAccessFromAnywhere = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
};
server.use(allowAccessFromAnywhere);

// Create all backend routes in db.json:
const router = jsonServer.router("db.json");
server.use(router)

// Create port number:
const PORT = 5005

// Activate the server on port 5005:
server.listen(PORT, () => {
    console.log(`JSON Server running on port ${PORT}`);
    console.log(`Local access in http://localhost:${PORT}`);
});