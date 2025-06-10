# Authentication System

## Project Overview

This project is an authentication system designed to manage user registration, login, and secure access to resources. It demonstrates the implementation of secure authentication practices using modern technologies.

## Features

- User registration with validation
- Secure login with password hashing
- Session management
- Role-based access control
- Logout functionality

## Technologies Used

- **Backend:** Node.js (Express)
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT
- **Environment Variables:** dotenv
- **Password Hashing:** bcryptjs
- **Email Service:** Mailtrap

## Installation

1. Initialize the project:
   ```bash
   npm init -y
   ```

2. Install dependencies:
   ```bash
   npm install express cookie-parser mailtrap bcryptjs dotenv jsonwebtoken mongoose crypto
   ```

3. Install development dependencies:
   ```bash
   npm install nodemon -D
   ```

## Usage

1. Start the server:
   ```bash
   node backend/index.js
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

## Deployment

To deploy the application, ensure the following steps are completed:

1. Set up environment variables in a `.env` file:
   - Example:
     ```
     DB_URI=mongodb://localhost:27017/auth-system
     JWT_SECRET=your_jwt_secret
     MAILTRAP_API_KEY=your_mailtrap_api_key
     ```

2. Deploy to a hosting service like Render and MongoDB.

## Credits

- **Libraries and Frameworks:** Express, Mongoose, bcryptjs, jsonwebtoken, dotenv, Mailtrap.
- **Documentation:** MDN, Stack Overflow, and official library documentation.

