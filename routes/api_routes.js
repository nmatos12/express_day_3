const path = require('path');
const router = require('express').Router();

// const todos = ['eat dinner', 'take out trash'];
const todos = [
    {
        id: 1,
        text:'Eat Dinner'
    },
    {
        id: 2,
        text: 'Take Out Trash'
    },
    {
        id: 3,
        text: 'Get Groceries'
    }
];

// Make a GET route to send array of todos
router.get('/todos', (client_req, server_res) => {
    server_res.send(todos);
})

router.get('/todos/:id', (client_req, server_res) => {
    const params = client_req.params;
    const todo = todos.find((obj) => {
        return obj.id == params.id
    })
    server_res.send(todo || 'No Todo Found');
})


// router.get('/todos', (client_req, server_res) => {
//     server_res.send({
//         text: todos[0]
//     });
// });

module.exports = router;