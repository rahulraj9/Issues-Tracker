const { SaveProject } = require("../utils/utils");
class IssuesTrackerController {
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
}
module.exports = new IssuesTrackerController();
