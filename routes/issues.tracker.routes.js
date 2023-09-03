const route = require("express").Router();
const issueTrakcerController = require('../controller/issues.tracker.controller')

route.post('/issueTracker/createProject',issueTrakcerController.createProject)
module.exports =route