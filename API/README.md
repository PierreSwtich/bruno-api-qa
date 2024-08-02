# API Request Collection using BRUNO

## Installation

To install Bruno, follow these steps:

1. Install Bruno globally: `npm install -g @usebruno/cli`
2. Navigate to the project directory: `cd api`
3. Install dependencies: `npm install`

## Dependencies

The Collection relies on the following dependency:

- **Faker-js**

## Environment Variables

This project uses environment variables for sensitive information like the username and password. These variables are defined in an `.env` file.

### .env File

Create a `.env` file in the root of your project directory and add the following variables:

```ini
USERNAME=your_username
PASSWORD=your_password
```

These variables will be used in the vars configuration:\

```json
vars {
    baseURL: https://qa-simple-book-api.vercel.app/api
    booksEndpoint: /books
    auth: /login
    username: {{process.env.USERNAME}}
    password: {{process.env.PASSWORD}}
}
```

Ensure you replace your_username and your_password with your actual credentials via .env file

# How to Run the Collection

To run the collection:

1. Ensure you are inside the api directory
2. Run the collection with environment variables: ```bru run --env books-env --output=results.html --format=html``` OR ```npm run booksAPI```
3. Open the HTML report manually or use the command ```npm run openReport```

## Functionality

This API Collection is primarily focused on the following functionalities:

* Adding Entry: It allows users to add new movies into the system.
* Validating New Item: The API validates new items according to predefined rules.
* Error Handling: Demonstrates how the system behaves and handles errors (1 case only).
* Delete Method: Used only as a test cleaner.
* Response Time Validation: Tests that validate the response time may fail as the actual response time can vary, sometimes being below 1 second and occasionally exceeding it. This is designed on purpose for now.

## Deployment

The index file is deployed to GitHub Pages. You can view the deployed content at the following URL: ```https://<your-github-username>.github.io/bruno-api-qa/```