# json-server-test

This is a simple test to use JSON-server, in order to simulate a backend server.

Run "node server.js" for the first time and the file db.json will be created. We can then use the localhost port to execute the endpoint methods (GET, POST, etc) in a tool like Postman.

Then in db.json we create empty arrays inside our json so we are implementing our collections. Those will be the only objects the system will accept. For relationships between collections, we add the singular noun to it, for example, an object in the array "games" will have a property "companyId" which is a reference to the other array "companies". Magic!

To query one company's details and all its games:
http://localhost:5005/companies/:companyId?_embed=games

For more details please check the documentation:
https://github.com/typicode/json-server/tree/v0