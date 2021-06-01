const orm = require('../config/orm');

module.exports = {
    add: (todo, callback) => orm.insertOne('todos', todo, callback),
    delete: (id, callback) => orm.deleteOne('todos', id, callback),
    getAll: (callback) => orm.selectAllFrom('todos', callback),
    getAllComplete: (callback) => orm.selectAllWhere('todos', 'done', 1, callback),
    getAllIncomplete: (callback) => orm.selectAllWhere('todos', 'done', 0, callback),
    update: (todo, callback) => orm.updateOne('todos', todo, callback),
}

module.exports = {
    add: (todo, callback) => orm.insertOne('groups', todo, callback),
    delete: (id, callback) => orm.deleteOne('groups', id, callback),
    getAll: (callback) => orm.selectAllFrom('groups', callback),
    update: (todo, callback) => orm.updateOne('groups', todo, callback),
}