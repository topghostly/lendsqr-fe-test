# Lendsqr Frontend Engineering Assessment

## About The Project

This project is a frontend implementation of the Lendsqr admin console, built as part of the assessment. It includes login, user listing, and user details pages.

### Live Demo

[Live Application](https://temitope-abolaji-lendsqr-fe-test.vercel.app/)

### Built With

- **Next.js** – React framework for optimized performance
- **TypeScript** – Enforced type safety
- **SCSS (Sass)** – Modular and maintainable styles
- **Jest & React Testing Library** – Unit testing
- **Mock API** – Simulated user data

### Features

- **Login Page**: User authentication with validation
- **Dashboard**: Overview of user statistics
- **User Page**: List of users with pagination and search
- **User Details Page**: Displays detailed user info

## Getting Started [🔝](#lendsqr-frontend-engineering-assessment)

### Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js (Latest LTS recommended)**

To update npm to the latest version, run:

```sh
$ npm install -g npm@latest
```

### Installation

Clone the repository:

```sh
$ git clone https://github.com/topghostly/lendsqr-fe-test.git
$ cd lendsqr-fe-test
```

Install dependencies:

```sh
$ npm install
```

Run the development server:

```sh
$ npm run dev
```

Enter your Mocky API endpoint in `.env.local`:

```sh
$ const MOCK_API_UR = 'ENTER YOUR API ENDPOINT';
```

Visit `http://localhost:3000` in your browser.

### Mock API Setup

The application uses a mock API with 500 records. You can generate mock data using:

- [Mocky.io](https://mocky.io/)

### Testing

Run unit tests:

```sh
$ npm test
```

### Deployment

Deploy to Vercel:

```sh
$ vercel
```

Ensure the app is hosted at:

```
https://temitope-abolaji-lendsqr-fe-test.vercel.app/
```

## Author [🔝](#lendsqr-frontend-engineering-assessment)

[David](https://github.com/topghostly/)
