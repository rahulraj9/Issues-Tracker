const { SaveProject,SaveIssue } = require("../utils/utils");
const Issue = require('../model/Issues.model');
class IssuesTrackerController {
  //contrller for creating Project

  async createProject(req, res) {
    console.log("req.body",req.body)
    const { name, description, author } = req.body;
    const projectData = {
      name,
      description,
      author,
    };
    console.log("ProjectData",projectData)
    try {
      const project = await SaveProject(projectData);
      res.status(200).send(project)
      // res.redirect("/projects");
    } catch (err) {
      console.error(err);
      res.status(500).send("Server Error");
    }
  }

  // cretaing issue on Project

  async createIssues(req,res){
    const { title, description, labels, author, projectId } = req.body;
    const issueData = {
      title,
      description,
      labels,
      author,
      projectId, // Assuming you pass the project ID with the request
    };
    try {
      const issue = await SaveIssue(issueData);
      res.status(200).send(issue)
      // Handle successful issue creation
      // res.redirect(`/projects/${projectId}`); // Redirect to the project detail page or any other page as needed
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).send('Error creating issue');
    }
  }

  // get issues based on projectId
  async getIssues(req,res){
    const projectId = req.params.projectId;
    console.log(projectId)
    try {
      // Find all issues associated with the specified projectId
      const issues = await Issue.find({ projectId });
      console.log(issues)
      res.status(200).send(issues);
      // res.render('projectIssues', { issues });
    } catch (error) {
      // Handle errors
      console.error(error);
      res.status(500).send('Error fetching issues for the project');
    }
  };
}
module.exports = new IssuesTrackerController();
