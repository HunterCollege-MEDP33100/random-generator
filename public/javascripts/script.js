const generateButton = document.getElementById('generate_button');

generateButton.addEventListener('click', async function() {
    // Prevent reloading the full page
    // Fetch a new random answer from the server
    try {
        const response = await fetch('/');
        const text = await response.text();

        // Analyze the returned HTML and extract the new random answer
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        const newAnswer = doc.querySelector('#answer_text')?.textContent;

        // Update the answer on the page
        const answerElement = document.getElementById('answer_text');
        if (newAnswer && answerElement) {
            answerElement.textContent = newAnswer;
        }
    } catch (error) {
        console.error('Error fetching new answer:', error);
    }
});
