import { AutoRouter } from 'itty-router';

let router = AutoRouter();

// Health check route
router.get("/ping", () => new Response("pong"));

// Wildcard route to fetch trivia questions
router.get("*", getDataFromAPI);

async function getDataFromAPI(_request) {
    try {
        let response = await fetch(
            'https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=multiple'
        );
        let data = await response.json();

        let questionData = data.results[0];

        let question = questionData.question;
        let choices = [
            ...questionData.incorrect_answers,
            questionData.correct_answer,
        ];

        choices.sort(() => Math.random() - 0.5);

        let triviaResponse = {
            question: question,
            choices: choices,
            answer: questionData.correct_answer,
        };

        return new Response(JSON.stringify(triviaResponse), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("❌ Error fetching trivia:", error);
        return new Response("Internal Server Error", { status: 500 });
    }
}

// Ensure event loop remains active and properly handles requests
addEventListener('fetch', (event) => {
    event.respondWith(router.fetch(event.request));
});
