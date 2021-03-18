require("dotenv").config();

const app = require("./server");
const connection = require("./database/database");

connection()

app.listen(app.get("port"), () => {
	console.log("Server on port", app.get("port"));
});
