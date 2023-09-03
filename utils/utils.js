const Project = require('../model/CreateProjectModel')

const SaveProject = async (data) => {
  try {
    const project = new Project(data);
    await project.save();
    return project;
  } catch (error) {
    throw error;
  }
};
module.exports = {
    SaveProject
}
