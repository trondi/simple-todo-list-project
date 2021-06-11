//============================
// DEPENDENCIES
//============================
const Todo = require('../models/todo');
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
    Todo.getAll((err, data) => {
        if (err) throw err;
        const completedTodos = data.filter(todo => todo.done);
        const incompleteTodos = data.filter(todo => !todo.done);
        const groupNames = data.filter(todo => todo.groupId);
        
        res.render('index', {
            completedTodos,
            incompleteTodos,
            groupNames
        });      
    });
    
    Group.getAll((err, data) => {
        if (err) throw err;
        const groupNames = data.filter(group => group.groupId);

        res.render('index', {
            groupNames
        });
    });
});

/**
 * API: all todos
 */
router.get('/todos', (req, res) => {
    
    Todo.getAll((err, data) => {
        if (err) throw err;
        res.json(data);
    });

});

router.get('/groups', (req, res) => {
    
    Group.getAll((err, data) => {
        if (err) throw err;
        res.json(data);
    });
});


/**
 * API: add todo
 */
router.post('/todos', (req, res) => {
    // If todo name is empty send an error back.
    if (req.body.task.trim() === '') {
        res.statusMessage = 'Todo name is required.';
        return res.status(400).end();
    }

    Todo.add(req.body, (err, data) => {
        if (err) {                      //------!!  에러 일어나는중
            res.sendStatus(500);
            console.log(err)
        } else {
            res.json(data);  
        }
    });
   // console.log(req.body)//task group done
});

router.post('/groups', (req, res) => { // 그룹 추가
    // If group name is empty send an error back.
    if (req.body.groupname.trim() === '') {
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
 * API: update todo
 */
router.put('/todos', (req, res) => {
    Todo.update(req.body, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
    console.log(req.body)
});

router.put('/groups', (req, res) => {
    Groups.update(req.body, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});


/**
 * API: delete todo
 */
router.delete('/todos', (req, res) => {
    Todo.delete(req.body.id, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

router.delete('/groups', (req, res) => {
    Group.delete(req.body.id, (err, data) => {
        if (err) throw err;
        res.json(data);
    });
});

module.exports = router;