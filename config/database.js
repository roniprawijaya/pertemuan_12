const mysql = require("mysql");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db.express",
});

db.connect((err) => {
    if (err) {
        console.log("Error connection " + err.stack);
        return;
    } else {
        console.log("connected to database");
        return;
    }
});
module.exports = db