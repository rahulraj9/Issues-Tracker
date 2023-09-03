const route = require("express").Router();
const issueTrakcerController = require('../controller/issues.tracker.controller')

route.post('/issueTracker/createProject',issueTrakcerController.createProject)
route.post('/issueTracker/createIssues',issueTrakcerController.createIssues)
route.get('/issueTracker/getIssues/:projectId',issueTrakcerController.getIssues)
module.exports =route