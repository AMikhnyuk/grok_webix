import mysql from "mysql"
import dbConfig from "./config/db.config.js";

const connection = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
})
connection.connect(error => {
    if (error) throw error;
    console.log("Database connect successfull");
});

export default connection