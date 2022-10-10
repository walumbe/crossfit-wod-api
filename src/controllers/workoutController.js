const express = require("express");

const getAllWorkouts = (req, res) => {
    res.send("Get all workouts");
};

const getOneWorkout = (req, res) => {
    res.send("Get an exiting workout!");
};

const createNewWorkout = (req, res) => {
    res.send("Create a new workout!");
};

const updateOneWorkout = (req, res) => {
    res.send("Update an existing account!");
};

const deleteOneWorkout = (req, res) => {
    res.send("Delete an existing account!");
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};