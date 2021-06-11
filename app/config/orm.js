const conn = require('./connection');

module.exports = {
    selectAllFrom: (tbl, callback) => {
        const query = 'SELECT * FROM ??';
        conn.query(query, [tbl], callback);
    },

    selectAllWhere: (tbl, where, value, callback) => {
        const query = 'SELECT * FROM ?? WHERE ?? = ?';
        conn.query(query, [tbl, where, value], callback);
    },

    selectAllOne: (tbl, col, where, value, callback) => {
        const query = 'SELECT ?? FROM ?? WHERE ?? = ?';
        conn.query(query, [col, tbl, where, value], callback);
    },

    insertOne: (tbl, obj, callback) => {
        const query = 'INSERT INTO ?? SET ?';
        conn.query(query, [tbl, obj], callback);
    },

    updateOne: (tbl, obj, callback) => {
        const query = 'UPDATE ?? SET ? WHERE id = ?';
        conn.query(query, [tbl,obj,obj.id], callback);
    },

    deleteOne: (tbl, id, callback) => {
        const query = 'DELETE FROM ?? WHERE id = ?';
        conn.query(query, [tbl, id], callback);
    },

    selectId: (callback) => { 
        const query = 'SELECT LAST_INSERT_ID() from groups;';
        conn.query(query, callback);
    }
    
}