const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
  title: String,
  description: String,
  labels: [String],
  author: String,
  projectId: {type:mongoose.Schema.Types.ObjectId,ref:'Project'}
},{
    timestamps:true
});

module.exports = mongoose.model('Issue', issueSchema);
