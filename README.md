# Sugga_Assignment

A simple Personal Task Manager API that allows users to manage their daily tasks. This API will support basic CRUD (Create, Read, Update, Delete) operations for tasks.

# Task_Management_System

Making a mern application for task management ;

# Project: Task Management System

Overview:

The Task Management System allows users to create, update, delete, and view tasks. 

### 1. Endpoints and Libraries:

Created endpoints for CRUD operations on tasks:

GET api/tasks/ - Get all tasks ;

POST api/tasks/ - Create's a new task;

GET api/tasks/:id - Get a specific task;

PUT api/tasks/:id - Update a task;

DELETE api/tasks/:id - Delete a task;

Libraries:
Use Express.js for routing.
Use Mongoose for MongoDB connection and modeling.

### 2. Backend Architecture: MVCS

Routes:
Defined routes for tasks in separate files under the routes folder.
Use Express Router to handle routing.

Controllers:
Created controller functions for handling requests related to tasks.
These functions will interact with services and send responses.

Services:
Implement service functions to encapsulate business logic.
Services will interact with the database through Mongoose models.
