# User Management REST API

A simple RESTful API built with Node.js and Express for managing user data. 
This project implements basic CRUD operations with proper error handling, request validation, and logging middleware.

## 🚀 Features

- RESTful API endpoints for user management
- Request logging middleware
- Input validation middleware
- Error handling
- In-memory data store
- Comprehensive API documentation
- PNPM package management

## 🛠 Tech Stack

- Node.js
- Express.js
- PNPM (Package Manager)

## 📋 Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (version 14 or higher)
- PNPM (version 6 or higher)

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/Lunar-spec/basic_api.git
cd basic_api
```

2. Install dependencies using PNPM:
```bash
pnpm install
```

3. Start the server:
```bash
# Development mode with auto-reload
pnpm dev

# Production mode
pnpm start
```

The server will start running at `http://localhost:3000`

## 🔌 API Endpoints

| Method | Endpoint      | Description           | Request Body                                    |
|--------|--------------|----------------------|------------------------------------------------|
| GET    | /users       | Get all users        | -                                              |
| GET    | /users/:id   | Get user by ID       | -                                              |
| POST   | /user        | Create new user      | `{ "firstName": "", "lastName": "", "hobby": "" }` |
| PUT    | /user/:id    | Update user          | `{ "firstName": "", "lastName": "", "hobby": "" }` |
| DELETE | /user/:id    | Delete user          | -                                              |

## 🧪 Testing

You can test the API using Postman or any other API testing tool. Import the provided Postman collection for a complete set of test cases.

```bash
# Run the development server
pnpm dev
```