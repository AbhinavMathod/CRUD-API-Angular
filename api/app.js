'use strict';
module.exports = function (app) {
    //Initialize models
    let todoModel = require('./models/todo');

    //Initialize routes for app.js
    let todoRoutes = require('./routes/todo-route');
    todoRoutes(app);
};