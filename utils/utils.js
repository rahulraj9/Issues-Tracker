const Project = require('../model/CreateProjectModel')
const Issue = require('../model/Issues.model')

const SaveProject = async (data) => {
  try {
    const project = new Project(data);
    await project.save();
    return project;
  } catch (error) {
    throw error;
  }
};
const SaveIssue = async (issueData) => {
  try {
    const issue = new Issue(issueData);
    await issue.save();
    return issue;
  } catch (error) {
    throw error;
  }
};
module.exports = {
    SaveProject,
    SaveIssue
}
