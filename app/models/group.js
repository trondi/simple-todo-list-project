const orm = require('../config/orm');

module.exports = {
    add: (group, callback) => orm.insertOne('groups', group, callback),
    delete: (groupId, callback) => orm.deleteOne('groups', groupId, callback),
    getAll: (callback) => orm.selectAllFrom('groups', callback),
    getGroupNames: (callback) => orm.selectAllOne('groups', 'groupName', 'done', 0,callback),
    update: (group, callback) => orm.updateOne('groups', group, callback),
}