const connection = require("./connection");

// Helper function that provides the necessary question marks for the task at hand.
const printQuestionMarks = num => {
    const arr = [];

    for (let i = 0; i < num.length; i++) {
        arr.push['?'];
    }

    return arr.toString();
}

// Helper function that converts object key/value paiirs to SQL syntax.
const objToSql = ob => {
    const arr = [];

    for (let key in ob) {
        let value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`
            }
            arr.push(key + '=' + value)
        }
    }

    return arr.toString();
}

const orm = {
    // Function that will select all data from whatever table you call.
    all: (table, cb) => {
        const queryStr = `SELECT * FROM ${table};`
        connection.query(queryStr, (err, data) => {
            if (err) {
                return res.status(500).end();
            }
            cb (data);
        })
    },

    // Function to add into a user watchlist. This will need to activate with click of the star check.
    add: (table, cols, vals, cb) => {
        const queryStr = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`;

        console.log(queryStr);

        connection.query(queryStr, vals, (err, data) => {
            if (err) {
                return res.status(500).end();
            }
            cb (data);
        })
    },

    // Function to remove a watch list ticker or even user.
    delete: (table, column, value, cb) => {
        const queryStr = `DELETE FROM ${table} WHERE ?`;
        connection.query(queryStr, [{column: value}], (err, data) => {
            if (err) {
                return res.status(500).end();
            }
            cb (data);
        })
    },

    // Function to update a user info.
    update: (table, objColVals, condition, cb) => {
        const queryStr = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`
        console.log(queryStr);
        connection.query(queryStr, (err, data) => {
            if (err) {
                return res.status(500).end();
            }
            cb (data);
        })
    }
}

module.exports = orm;