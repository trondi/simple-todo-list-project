//============================
// DEPENDENCIES
//============================
const Group = require('../models/group');
const express = require('express');
const router = express.Router();

//============================
// ROUTES
//============================
/**
 * VIEW: home
 */
router.get('/', (req, res) => {
    Group.getAll((err, data) => {
        if (err) throw err;

        const groupNames = data.filter(group => group.groupId);

        res.render('index', {
            groupNames
        });
    });
});

/**
 * API: all groups
 */
router.get('/groups', (req, res) => {
    Group.getAll((err, data) => {
        if (err) throw err;
        res.json(data);
    });
});


/**
 * API: add group
 */
router.post('/groups', (req, res) => {
    // If todo name is empty send an error back.
    if (req.body.task.trim() === '') { //task?
        res.statusMessage = 'Group name is required.';
        return res.status(400).end();
    }

    Group.add(req.body, (err, data) => {
        if (err) {
            res.sendStatus(500);
        } else {
            res.json(data);
        }
    });
});

/**
 * API: update group
 */
router.put('/groups', (req, res) => {
    Group.update(req.body, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

/**
 * API: delete group
 */
router.delete('/groups', (req, res) => {
    Group.delete(req.body.id, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

module.exports = router;