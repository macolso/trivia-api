# Trivia API
This is a simple trivia API built as a Spin app using the JavaScript SDK. The API serves random trivia questions from the Open Trivia Database (OpenTDB), providing users with trivia questions along with multiple-choice answers.

### Features
- Built with Spin and the JavaScript SDK.
- Fetches random trivia questions from the OpenTDB API.
- Returns trivia questions along with multiple choices, including the correct answer.
- Implements a simple REST API using itty-router.

### Requirements
* Spin v3.0 or newer
* Node.js (v14 or later)
* npm (v6 or later)

### Setup and Installation
Clone the repository:

```bash
git clone https://github.com/macolso/trivia-api.git
```

Navigate into the project directory:

```bash
cd trivia-api
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
spin build --up
```

The server will be running on http://localhost:3000/api.

```bash
curl localhost:3000/api
```

### Endpoints
* **GET /trivia**
Returns a random trivia question along with multiple-choice answers.
Example response:

```json
{
  "question": "When was Nintendo founded?",
  "choices": [
    "September 23rd, 1889",
    "November 16th, 1894",
    "April 1st, 1888",
    "July 7th, 1890"
  ],
  "answer": "September 23rd, 1889"
}
```
