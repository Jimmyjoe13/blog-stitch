// Données pour les histoires et aventures
const stories = [
    {
        id: 1,
        title: "Expérience 626",
        content: "Je suis né dans un laboratoire spatial... Mais ne vous inquiétez pas, je suis devenu gentil ! 😊"
    },
    {
        id: 2,
        title: "Rencontre avec Lilo",
        content: "Ma vie a changé quand j'ai rencontré Lilo. Elle m'a appris ce qu'était une vraie famille ❤️"
    }
];

// Quiz questions
const quizQuestions = [
    {
        question: "Quel est mon plat préféré ?",
        options: ["Le café", "Les noix de coco", "Les pizzas", "Les glaces"],
        correct: 0
    },
    {
        question: "Comment je dis 'Bonjour' ?",
        options: ["Hi!", "Aloha!", "Meega!", "Ih!"],
        correct: 1
    }
];

// Fonction pour charger les histoires
function loadStories() {
    const storyContainer = document.querySelector('.origin-story');
    stories.forEach(story => {
        const storyCard = document.createElement('div');
        storyCard.className = 'story-card';
        storyCard.innerHTML = `
            <h3>${story.title}</h3>
            <p class="story-preview">Cliquez pour découvrir...</p>
            <p class="story-content hidden">${story.content}</p>
        `;
        storyCard.addEventListener('click', () => toggleStory(storyCard));
        storyContainer.appendChild(storyCard);
    });
}

// Fonction pour afficher/cacher le contenu des histoires
function toggleStory(card) {
    const preview = card.querySelector('.story-preview');
    const content = card.querySelector('.story-content');
    preview.classList.toggle('hidden');
    content.classList.toggle('hidden');
}

// Fonction pour charger les aventures
function loadAdventures() {
    const adventureGrid = document.querySelector('.adventure-grid');
    adventures.forEach(adventure => {
        const adventureCard = document.createElement('div');
        adventureCard.className = 'adventure-card';
        adventureCard.innerHTML = `
            <img src="images/${adventure.image}" alt="${adventure.title}">
            <h3>${adventure.title}</h3>
            <p>${adventure.description}</p>
        `;
        adventureGrid.appendChild(adventureCard);
    });
}

// Fonction pour gérer le quiz
function initQuiz() {
    const quizContent = document.getElementById('quiz-content');
    let currentQuestion = 0;

    function displayQuestion() {
        const question = quizQuestions[currentQuestion];
        quizContent.innerHTML = `
            <h4>${question.question}</h4>
            <div class="options">
                ${question.options.map((option, index) => `
                    <button onclick="checkAnswer(${index})">${option}</button>
                `).join('')}
            </div>
        `;
    }

    window.checkAnswer = function(index) {
        const question = quizQuestions[currentQuestion];
        if (index === question.correct) {
            alert('Ih! Correct! 🎉');
            currentQuestion++;
            if (currentQuestion < quizQuestions.length) {
                displayQuestion();
            } else {
                quizContent.innerHTML = '<p>Bravo! Tu as terminé le quiz! 🌟</p>';
            }
        } else {
            alert('Naga! Essaie encore! 😅');
        }
    };

    displayQuestion();
}

// Gestion du formulaire de questions
function initQuestionForm() {
    const form = document.getElementById('question-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const question = document.getElementById('question').value;
        if (question.trim()) {
            alert('Meega! Ta question a été envoyée à Stitch! 📨');
            document.getElementById('question').value = '';
        }
    });
}

// Animation du logo Stitch
function initLogoAnimation() {
    const logo = document.querySelector('.stitch-logo');
    if (logo) {
        logo.addEventListener('mouseover', () => {
            logo.style.transform = 'rotate(360deg)';
        });
        logo.addEventListener('mouseout', () => {
            logo.style.transform = 'rotate(0deg)';
        });
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    loadStories();
    loadAdventures();
    initQuiz();
    initQuestionForm();
    initLogoAnimation();
});
