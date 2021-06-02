const orm = require('../config/orm');

module.exports = {
    add: (group, callback) => orm.insertOne('groups', group, callback),
    delete: (groupId, callback) => orm.deleteOne('groups', id, callback),
    getAll: (callback) => orm.selectAllFrom('groups', callback),
    update: (group, callback) => orm.updateOne('groups', group, callback),
}