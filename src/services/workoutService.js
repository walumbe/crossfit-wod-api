const workout = require("../database/Workout");
const { all } = require("../v1/routes/workoutRoutes");
const { v4: uuid } = require("uuid");
const Workout = require("../database/Workout");

const getAllWorkouts = () => {
    const allWorkouts = workout.getAllWorkouts();
    return allWorkouts;
}

const getOneWorkout = () => {
    return;
}

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
      ...newWorkout,
      id: uuid(),
      createdAt: new Date().toLocaleString("en-US", { timeZone: "GMT+3" }),
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "GMT+3" }),
    };
    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
  };

const updateOneWorkout = () => {
    return;
}

const deleteOneWorkout = () => {
    return;
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};