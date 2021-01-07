const orm = require('../config/orm.js');

const stocks = {
    all: cb => {
        orm.all('saved_stocks', data => {
            cb(data)
        })
    },

    // Cols and vals should be arrays.
    add: (cols, vals, cb) => {
        orm.add('saved_stocks', cols, vals, data => {
            cb(data)
        })
    },

    update: (objColVals, condition, cb) => {
        orm.update('user', objColVals, condition, data => {
            cb(data)
        })
    },

    delete: (column, value, cb) => {
        orm.delete('saved_stocks', column, value, data => {
            cb(data)
        })
    }
}

module.exports = stocks;