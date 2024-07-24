document.addEventListener('DOMContentLoaded', () => {
    const startGameButton = document.getElementById('startGame');
    const drinkButton = document.getElementById('drink');
    const dareButton = document.getElementById('dare');
    const questionButton = document.getElementById('question');
    const messagesDiv = document.getElementById('messages');

    // Messages arrays
    const drinkMessages = [
        "Take a sip of your drink!",
        "Finish your drink!",
        "Take two sips!",
        "Drink half of your drink!"
    ];

    const dareMessages = [
        "Do 10 push-ups!",
        "Dance for 1 minute!",
        "Sing a song!",
        "Do an impression of someone!"
    ];

    const questionMessages = [
        "What is your biggest fear?",
        "What is your secret talent?",
        "What is your most embarrassing moment?",
        "Who was your first crush?"
    ];

    function getRandomMessage(messages) {
        const randomIndex = Math.floor(Math.random() * messages.length);
        return messages[randomIndex];
    }

    startGameButton.addEventListener('click', () => {
        messagesDiv.innerText = "Game Started! Choose an option below.";
    });

    drinkButton.addEventListener('click', () => {
        messagesDiv.innerText = getRandomMessage(drinkMessages);
    });

    dareButton.addEventListener('click', () => {
        messagesDiv.innerText = getRandomMessage(dareMessages);
    });

    questionButton.addEventListener('click', () => {
        messagesDiv.innerText = getRandomMessage(questionMessages);
    });
});

