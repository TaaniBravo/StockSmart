const connection = require("./connection");

module.exports = {
    addAll(addArray){
        return connection.query(
            `INSERT INTO ?? SET ?`, addArray);
    }
}