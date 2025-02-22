# Lendsqr Frontend Engineering Assessment

## Overview

This project is a frontend implementation of the Lendsqr admin console, built as part of the assessment. It includes login, dashboard, user listing, and user details pages, following the provided Figma design.

## Live Demo

[Live Application](https://yourname-lendsqr-fe-test.vercel.app)

## Tech Stack

- **Next.js (React Framework)** – For server-side rendering and optimized performance
- **TypeScript** – Enforced type safety
- **SCSS (Sass)** – For modular and maintainable styles
- **Axios** – For API requests
- **Mock API** – Used to generate and retrieve user data
- **LocalStorage / IndexedDB** – For storing and retrieving user details
- **Jest & React Testing Library** – For unit testing

## Features

- **Login Page**: User authentication with validation
- **Dashboard**: Overview of user statistics
- **User Page**: List of users with pagination and search functionality
- **User Details Page**: Fetches and displays detailed user info from local storage
- **Mobile Responsive**: Fully optimized for different screen sizes

## Folder Structure

```
├── public
├── src
│   ├── components      # Reusable UI components
│   ├── pages
│   │   ├── index.tsx   # Login page
│   │   ├── dashboard.tsx
│   │   ├── users.tsx
│   │   ├── user-details.tsx
│   ├── styles          # SCSS files following BEM methodology
│   ├── utils           # Utility functions
│   ├── hooks           # Custom React hooks
│   ├── services        # API calls
│   ├── store           # State management (if applicable)
├── tests               # Unit and integration tests
├── .env                # Environment variables
├── next.config.js      # Next.js configuration
├── tsconfig.json       # TypeScript configuration
└── README.md           # Documentation
```

## Installation & Setup

Clone the repository:

```sh
$ git clone https://github.com/yourusername/lendsqr-fe-test.git
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

Visit `http://localhost:3000` in your browser.

## Mock API Setup

The application uses a mock API with 500 records. To generate mock data, use:

- [Mocky.io](https://mocky.io/)
- [JSON Generator](https://www.json-generator.com/)

## Testing

Run unit tests:

```sh
$ npm run test
```

## Deployment

Deploy to Vercel:

```sh
$ vercel
```

Ensure the app is hosted at:

```
https://yourname-lendsqr-fe-test.vercel.app
```

## Documentation & Submission

1. **Google Docs Report** – Explain your approach, challenges, and decisions.
2. **Loom Video** – Walkthrough of the project (max 3 minutes).
3. **Submit the form** and notify Lendsqr via email.

## Author

[Your Name](https://github.com/yourusername)

## License

MIT License.

<!-- NEW ONE  -->

# Lendsqr Frontend Engineering Assessment

## About The Project

This project is a frontend implementation of the Lendsqr admin console, built as part of the assessment. It includes login, user listing, and user details pages.

## Live Demo

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

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js (Latest LTS recommended)**

To update npm to the latest version, run:

```sh
$ npm install -g npm@latest
```

## Installation

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

## Mock API Setup

The application uses a mock API with 500 records. You can generate mock data using:

- [Mocky.io](https://mocky.io/)

## Testing

Run unit tests:

```sh
$ npm run test
```

## Deployment

Deploy to Vercel:

```sh
$ vercel
```

Ensure the app is hosted at:

```
https://yourname-lendsqr-fe-test.vercel.app
```

## Documentation & Submission

1. **Google Docs Report** – Overview of approach, challenges, and decisions.
2. **Loom Video** – Walkthrough of the project (max 3 minutes).
3. **Submit the form** and notify Lendsqr via email.

## Author

[Your Name](https://github.com/yourusername)

## License

MIT License.
