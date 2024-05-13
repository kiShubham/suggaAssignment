const Task = require("../models/task.model");

const create = async (data) => {
  try {
    const newTask = await Task.create(data);
    return newTask;
  } catch (error) {
    throw error;
  }
};

const get = async () => {
  try {
    const getTasks = await Task.find();
    if (!getTasks) throw new Error("userId not valid");
    return getTasks;
  } catch (error) {
    throw error;
  }
};

const getbyId = async (id) => {
  try {
    const getTask = await Task.find({ _id: id });
    return getTask;
  } catch (error) {
    throw error;
  }
};

const update = async (id, updatedData) => {
  try {
    const filter = { _id: id };
    const updateOpertion = { $set: updatedData };
    const options = { new: true };
    const task = await Task.findOneAndUpdate(filter, updateOpertion, options);

    return task;
    //
  } catch (error) {
    throw error;
  }
};

const deleteTask = async (id) => {
  try {
    const taskD = await Task.findByIdAndDelete({ _id: id });
    return taskD;
  } catch (error) {
    throw error;
  }
};
module.exports = {
  create,
  get,
  getbyId,
  update,
  deleteTask,
};
