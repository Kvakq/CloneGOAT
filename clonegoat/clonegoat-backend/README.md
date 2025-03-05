# CloneGOAT Backend

This is the backend for the CloneGOAT project, built using Node.js and Express. This backend serves as the API for the frontend application, handling requests and managing data.

## Getting Started

To get started with the backend, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd clonegoat/backend
   ```

2. **Install Dependencies**
   Make sure you have Node.js installed. Then run:
   ```bash
   npm install
   ```

3. **Run the Server**
   To start the server, use the following command:
   ```bash
   npm start
   ```
   The server will start on the specified port (default is 3000).

## Folder Structure

- **src/**: Contains the source code for the backend.
  - **controllers/**: Contains controller functions for handling requests.
  - **models/**: Contains data models for interacting with the database.
  - **routes/**: Contains route definitions for the API endpoints.
  - **app.js**: Initializes the Express application and sets up middleware.
  - **server.js**: Starts the server and listens for incoming requests.

## API Endpoints

The backend exposes various API endpoints for the frontend to interact with. Refer to the route definitions in `src/routes/index.js` for more details.

## License

This project is licensed under the MIT License. See the LICENSE file for details.