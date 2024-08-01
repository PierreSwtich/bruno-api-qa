# API request collection using BRUNO

## Installation

To install Bruno, follow these steps:

1. Install bruno globally : `npm install -g @usebruno/cli`
2. Navigate to the project directory: `cd api`
3. Install dependencies: `npm install`

## Dependencies

The Collection relies on the following dependency:

- **Faker-js**

## How to Run the Collection

To run the collection:

1. Ensure you are inside the `api` directory
2. Run the collection with environment variables: `bru run --env books-env --output=results.html --format=html`
4. Open manually the html report or use a command `npm run openReport`

That's it!

### This API Collection is primarily focused on the following functionalities:

- **Adding Entry**: It allows users to add new movies into the system.
- **Validating New Item**: The API validates new items according to predefined rules.
- **Error Handling**: How the system behaves and handles error (1 case only).
- **Delete Method**: was used only as a test cleaner
- Tests that validates the response time fails as the actual response time is below 1sec sometimes even over 1sec but it is designed on purpose for now.

