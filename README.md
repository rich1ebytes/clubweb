-----

## ClubConnect Web App

This is the official repository for ClubConnect, a web application designed to connect students with various clubs and events on campus. This README provides comprehensive instructions on how to set up and run both the front-end and back-end services locally.

### 🚀 **Getting Started**

Follow these steps to get a local copy of the project up and running.

-----

### **Have this already!**

You need to have the following software installed on your machine:

  * **Node.js** (LTS version recommended): The JavaScript runtime environment. You can download it from [nodejs.org](https://nodejs.org/).
  * **npm** (Node Package Manager): Comes bundled with Node.js.
  * **MongoDB**: A NoSQL database. You can use a local installation or a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
  * **Git**: For cloning the repository.

-----

### **Front-End Setup**

1.  **Navigate to the front-end directory:**
    ```bash
    cd ClubConnect-frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the application:**
    ```bash
    npm start
    ```
    This will start the front-end application on **http://localhost:3000**. The app will automatically reload if you make any changes to the source code.

-----

### **Back-End Setup**

*Note: This guide assumes a Node.js and Express.js backend with a MongoDB database.*

1.  **Navigate to the back-end directory:**
    ```bash
    cd ClubConnect-backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure environment variables:**
    Create a `.env` file in the back-end directory with the following variables:
    ```
    PORT=5000
    MONGO_URI=<Your-MongoDB-Connection-String>
    ```
      * **`PORT`**: The port for the back-end server.
      * **`MONGO_URI`**: Your MongoDB connection string. If you're using a local database, it might look like `mongodb://localhost:27017/clubconnect`. For MongoDB Atlas, you'll find the URI in your cluster settings.
4.  **Run the back-end server:**
    ```bash
    npm start
    ```
    This will start the server, which will be accessible at *example:* **http://localhost:5000**.

-----

### **Project Structure**

This project is divided into two main parts:

  * **`ClubConnect-frontend`**: A React application that serves as the user interface.
      * `src/components/`: Reusable React components.
      * `src/pages/`: Main application pages.
  * **`ClubConnect-backend`**: A Node.js/Express.js server that handles API requests and database interactions.
      * `routes/`: API endpoint definitions.
      * `models/`: Mongoose schemas for the database.
      * `controllers/`: Logic for handling requests.
