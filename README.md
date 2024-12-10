# Personal Library Project

This is a **Personal Library** project designed to manage a collection of books. It allows users to perform CRUD (Create, Read, Update, Delete) operations on books and organize their library efficiently.

## Features

- User-friendly interface to manage your library.
- Add, edit, delete, and view books.
- Store data persistently using SQLite.
- Modern frontend built with React and TypeScript.
- Backend API developed in Node.js.

## Tech Stack

### Frontend
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript for improved development experience.

### Backend
- **Node.js**: JavaScript runtime for building the backend API.
- **Express.js**: Framework for creating robust backend APIs.

### Database
- **SQLite**: Lightweight database for storing library data.

## Installation

### Prerequisites
- Node.js and npm installed.
- SQLite installed.

### Steps

1. Clone the repository:
   ```bash
   git clone [https://github.com/GabrielCarelli/BibliotecaPessoal.git](https://github.com/GabrielCarelli/BibliotecaPessoal.git)
   cd personal-library
   ```

2. Install dependencies for both the frontend and backend:
   ```bash
   cd FrontEnd
   npm install
   cd BackEnd
   npm install
   ```

3. Set up the SQLite database:
   - Navigate to the `backend` folder.
   - Run the provided migration script to initialize the database (if available).
     ```bash
     node migrate.js
     ```

4. Start the backend server:
   ```bash
   cd BackEnd
   npm start
   ```

5. Start the frontend:
   ```bash
   cd FrontEnd
   npm start
   ```

6. Open the application in your browser:
   - Frontend: [http://localhost:5174](http://localhost:5174)
   - Backend API (default): [http://localhost:3001](http://localhost:3001)

## Usage

- Navigate to the application in your browser.
- Use the interface to add, edit, delete, or view books in your library.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

Happy coding!
