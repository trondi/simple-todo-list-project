//===========================
// EVENT HANDLERS
//===========================
//todo
function addNewTodo(todo, callback) {
    $.post('/todos', todo)
        .done(callback)
        .catch(err => alert(err.statusText));
}

function deleteTodo(todo, callback) {
    $.ajax({
            type: 'DELETE',
            url: "/todos",
            data: todo,
        })
        .done(callback)
        .catch(err => alert(err.statusText));
}

function updateTodo(todo, callback) {
    $.ajax({
            type: 'PUT',
            url: '/todos',
            data: todo
        })
        .done(callback)
        .catch(err => alert(err.statusText));
}

//group
function addNewGroup(group, callback) {
    $.post('/groups', group)
        .done(callback)
        .catch(err => alert(err.statusText));
}

function deleteGroup(group, callback) {
    $.ajax({
            type: 'DELETE',
            url: "/groups",
            data: group,
        })
        .done(callback)
        .catch(err => alert(err.statusText));
}

function updateGroup(group, callback) {
    $.ajax({
            type: 'PUT',
            url: '/groups',
            data: group
        })
        .done(callback)
        .catch(err => alert(err.statusText));
}


//============================
// EVENT LISTENERS
//============================
//todo------------------------
/**
 * Add todo (on click)
 */
$('#addTodoBtn').on('click', () => {
    const newTodo = {
        task: $('#newTodoInput').val(),
        done: 0
    }
    const newGroup = {
        groupname: $('#newGroupInput').val()
    }

    addNewTodo(newTodo, location.reload());
    $('#newTodoInput').val('');
    addNewGroup(newGroup, location.reload());
    $('#newGroupInput').val('');
});

/**
 * Add todo (on enter)
 */
$('#newTodoInput').on('keyup', function (e) {
    if (e.keyCode !== 13) return;

    const newTodo = {//칼럼 추가
        groupId: $('#newGroupInput')..val('');,
        task: $('#newTodoInput').val(),
        done: 0
    }
    const newGroup = {
        groupname: $('#newGroupInput').val(),
        }

    addNewTodo(newTodo, location.reload());
    $('#newTodoInput').val('');
    addNewGroup(newGroup, location.reload());
    $('#newGroupInput').val('');
});


/**
 * Toggle todo
 */
$(document).on('click', '.toggleBtn', function () {
    const parent = $(this).parent().parent();
    const toggledTodo = {
        id: $(parent).attr('todoid'),
        groupid: $(parent).attr('groupid'), //추가
        task: $(parent).attr('todoname'),
        done: ($(parent).attr('tododone') == 1) ? 0 : 1, // Toggle 0 and 1
    }
    updateTodo(toggledTodo, location.reload());
});

/**
 * Delete todo
 */
$(document).on('click', '.deleteBtn', function () {
    const parent = $(this).parent().parent();
    const idToDelete = $(parent).attr('todoId');

    if (!idToDelete) return;

    deleteTodo({ id: idToDelete }, location.reload());
});

/**
 * Edit todo: show edit input
 */
$(document).on('click', '.taskBtn', function () {
    const taskInput = $(this).next();
    $(taskInput).show().focus();
    $(this).hide();
});

/**
 * Edit todo: (on blur) update todo and hide edit input
 */
$(document).on('blur', '.editTask', function () {
    $(this).prev().show(); // Task button
    $(this).hide(); // Input

    const parent = $(this).parent().parent();
    const updatedTask = $(this).val().trim();
    const originalTask = $(parent).attr('todotask');
    const updatedTodo = {
        id: parseInt($(parent).attr('todoid')),
        groupId : parseInt($(parent).attr('groupid')), //추가
        task: updatedTask,
        done: $(parent).attr('tododone')
    }

    if (updatedTask === originalTask || updatedTask.trim() === '') return;

    updateTodo(updatedTodo, location.reload());
});

/**
 * Edit todo: (on enter) update todo and hide edit input
 */
$(document).on('keyup', '.editTask', function (e) {
    if (e.keyCode !== 13) return;

    $(this).prev().show(); // Task button
    $(this).hide(); // Input

    const parent = $(this).parent().parent();
    const updatedTask = $(this).val().trim();
    const originalTask = $(parent).attr('todotask');
    const updatedTodo = {
        id: parseInt($(parent).attr('todoid')),
        groupid: parseInt($(parent).attr('groupid')),  //추가
        task: updatedTask,
        done: $(parent).attr('tododone')
    }

    if (updatedTask === originalTask || updatedTask.trim() === '') return;

    updateTodo(updatedTodo, location.reload());
});


//group------------------------todo->group task->name
/**
 * Add group (on click)
 */
 $('#addGroupBtn').on('click', () => {
    const newGroup = { //?????
        name: $('#newGroupInput').val()
    }
    addNewGroup(newGroup, location.reload());
    $('#newGroupInput').val('');
});

/**
 * Add todo (on enter)
*/
$('#newGroupInput').on('keyup', function (e) {
    if (e.keyCode !== 13) return;

    const newGroup = { //????
        name: $('#newGroupInput').val()
    }
    addNewGroup(newGroup, location.reload());
    $('#newGroupInput').val('');
});

/**
 * Toggle group
 */
$(document).on('click', '.toggleBtn', function () {
    const parent = $(this).parent().parent();
    const toggledGroup = {
        groupid: $(parent).attr('groupid'), //추가
        name: $(parent).attr('groupname')
    }
    updateGroup(toggledGroup, location.reload());
});

/**
 * Delete group
 */
$(document).on('click', '.deleteBtn', function () {
    const parent = $(this).parent().parent();
    const idGroupDelete = $(parent).attr('groupId');

    if (!idGroupDelete) return;

    deleteGroup({ id: idGroupDelete }, location.reload());
});

/**
 * Edit group: show edit input
 */
$(document).on('click', '.nameBtn', function () {
    const nameInput = $(this).next();
    $(nameInput).show().focus();
    $(this).hide();
});

/**
 * Edit group: (on blur) update group and hide edit input
 */
$(document).on('blur', '.editName', function () {
    $(this).prev().show(); // Name button
    $(this).hide(); // Input

    const parent = $(this).parent().parent();
    const updatedName = $(this).val().trim();
    const originalName = $(parent).attr('groupname');
    const updatedGroup = {
        groupId : parseInt($(parent).attr('groupid')), //추가
        name: updatedName
    }

    if (updatedName === originalName || updatedName.trim() === '') return;

    updateGroup(updatedGroup, location.reload());
});

/**
 * Edit group: (on enter) update group and hide edit input
 */
$(document).on('keyup', '.editName', function (e) {
    if (e.keyCode !== 13) return;

    $(this).prev().show(); // Task button
    $(this).hide(); // Input

    const parent = $(this).parent().parent();
    const updatedName = $(this).val().trim();
    const originalName = $(parent).attr('groupname');
    const updatedGroup = {
        groupid: parseInt($(parent).attr('groupid')),  //추가
        name: updatedName
    }

    if (updatedName === originalName || updatedName.trim() === '') return;

    updateTodo(updatedGroup, location.reload());
});