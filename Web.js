async function askAI() {
    const userInput = document.getElementById('user-input').value;
    const responseDiv = document.getElementById('response');
    
    responseDiv.innerHTML = 'در حال پردازش...';

    const apiKey = 'sk-proj-3jT5Oxk8RKPNpViNp3DQT3BlbkFJDwkVW3bKMVqeHlvKnfO9';  // کلید API خود را وارد کنید
    const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';

    const data = {
        prompt: userInput,
        max_tokens: 100
    };

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        responseDiv.innerHTML = result.choices[0].text;
    } catch (error) {
        responseDiv.innerHTML = 'خطایی رخ داده است. لطفاً دوباره تلاش کنید.';
    }
}