Project Overview
This project implements a virtual classroom application that allows users to create courses, units, and discussions. Users can also participate in discussions and view course materials.

Prerequisites
Node.js and npm (or yarn)
Docker and Docker Compose
MongoDB
A code editor (e.g., Visual Studio Code)
Installation
Clone the Repository:

Bash
git clone https://github.com/your-username/virtual-classroom.git
Use code with caution.

Install Dependencies:

Bash
cd virtual-classroom
npm install
Use code with caution.

Set up Environment Variables:

Create a .env file in the root directory and add the following variables:

MONGODB_URI=mongodb://localhost:27017/virtual-classroom   

Running the Project
Start MongoDB:

Ensure your MongoDB server is running. You can start it using the mongod command.
Run the Backend:

Bash
cd backend
node index.js
Use code with caution.

Run the Frontend:

Bash
cd client
npm start
Use code with caution.

Access the Application:

Open a web browser and navigate to http://localhost:3000 to access the virtual classroom application.
