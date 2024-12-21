// Banques de questions
const allQuestions = [
    // Série 1 : Les Origines de Stitch
    [
        {
            question: "Quel est le numéro d'expérience de Stitch ?",
            options: ["625", "626", "627", "628"],
            correct: 1,
            explanation: "Stitch est l'expérience 626, créée par le Dr Jumba Jookiba."
        },
        {
            question: "Dans quelle ville hawaïenne Stitch atterrit-il ?",
            options: ["Honolulu", "Kokaua Town", "Hilo", "Kauai"],
            correct: 1,
            explanation: "Stitch atterrit à Kokaua Town sur l'île de Kauai."
        },
        {
            question: "Qui a créé Stitch ?",
            options: ["Dr. Hamsterviel", "Dr. Jumba", "Grand Conseiller", "Capitaine Gantu"],
            correct: 1,
            explanation: "C'est le Dr. Jumba Jookiba qui m'a créé dans son laboratoire."
        },
        {
            question: "De quelle planète vient Stitch ?",
            options: ["Turo", "Kweltikwan", "Terre", "Xenon"],
            correct: 1,
            explanation: "Je viens de la planète Kweltikwan, même si je préfère Hawaï maintenant !"
        },
        {
            question: "Pourquoi Stitch a-t-il été créé à l'origine ?",
            options: ["Pour faire des amis", "Pour détruire", "Pour explorer", "Pour protéger"],
            correct: 1,
            explanation: "J'ai été créé comme une machine de destruction, mais j'ai changé grâce à Lilo !"
        },
        {
            question: "Quel vaisseau Stitch vole-t-il pour s'échapper ?",
            options: ["Vaisseau de police", "Vaisseau cargo", "Vaisseau personnel", "Navette spatiale"],
            correct: 0,
            explanation: "J'ai volé un vaisseau de la police galactique pour m'échapper !"
        },
        {
            question: "Où Stitch est-il emprisonné au début ?",
            options: ["Prison spatiale", "Laboratoire", "Vaisseau prison", "Base militaire"],
            correct: 2,
            explanation: "J'étais détenu dans un vaisseau prison avant mon évasion."
        },
        {
            question: "Quel est le premier mot que Stitch apprend ?",
            options: ["Ohana", "Hi", "Aloha", "Café"],
            correct: 1,
            explanation: "Mon premier mot était un simple 'Hi' !"
        },
        {
            question: "Comment Stitch arrive-t-il sur Terre ?",
            options: ["En s'écrasant", "En atterrissant", "Par téléportation", "Par hasard"],
            correct: 0,
            explanation: "Mon vaisseau s'est écrasé sur Terre après une poursuite spatiale."
        },
        {
            question: "Qui poursuit initialement Stitch ?",
            options: ["Les aliens", "La police", "Capitaine Gantu", "Dr. Hamsterviel"],
            correct: 2,
            explanation: "Le Capitaine Gantu était chargé de me capturer."
        }
    ],
    // Série 2 : La Famille Ohana
    [
        {
            question: "Que signifie 'Ohana' ?",
            options: ["Amitié", "Famille", "Amour", "Maison"],
            correct: 1,
            explanation: "Ohana signifie famille, et famille signifie que personne ne doit être abandonné."
        },
        {
            question: "Comment s'appelle la grande sœur de Lilo ?",
            options: ["Nani", "Nina", "Nana", "Nora"],
            correct: 0,
            explanation: "Nani est la grande sœur de Lilo qui s'occupe d'elle."
        },
        {
            question: "Quel est le travail de Nani ?",
            options: ["Serveuse", "Sauveteur", "Vendeuse", "Monitrice de surf"],
            correct: 0,
            explanation: "Nani travaille comme serveuse pour subvenir aux besoins de sa famille."
        },
        {
            question: "Qui est David dans la série ?",
            options: ["Le petit ami de Nani", "Un touriste", "Un policier", "Le professeur de Lilo"],
            correct: 0,
            explanation: "David est le petit ami de Nani et un excellent surfeur."
        },
        {
            question: "Quel est le nom de la poupée de Lilo ?",
            options: ["Scrump", "Dolly", "Stitchy", "Luna"],
            correct: 0,
            explanation: "La poupée de Lilo s'appelle Scrump, elle l'a fabriquée elle-même."
        },
        {
            question: "Qui est l'assistante sociale de Lilo ?",
            options: ["Mme Hasagawa", "Cobra Bubbles", "Mrs. Edmonds", "Elena"],
            correct: 1,
            explanation: "Cobra Bubbles est l'assistante sociale qui surveille la situation de Lilo."
        },
        {
            question: "Où habitent Lilo et sa famille ?",
            options: ["Dans une maison sur pilotis", "Dans un appartement", "Dans un hôtel", "Sur un bateau"],
            correct: 0,
            explanation: "Ils habitent dans une charmante maison sur pilotis à Hawaï."
        },
        {
            question: "Que font Lilo et Stitch comme activité ensemble ?",
            options: ["Surf", "Cuisine", "Danse hula", "Tout ça"],
            correct: 3,
            explanation: "Lilo et Stitch font plein d'activités ensemble, comme le surf, la cuisine et la danse hula !"
        },
        {
            question: "Qui devient le 'père' adoptif de Stitch ?",
            options: ["David", "Cobra Bubbles", "Dr. Jumba", "Pleakley"],
            correct: 2,
            explanation: "Le Dr. Jumba devient une sorte de père adoptif pour Stitch."
        },
        {
            question: "Quel est le rêve de Lilo ?",
            options: ["Devenir danseuse", "Avoir une famille heureuse", "Être astronaute", "Devenir photographe"],
            correct: 0,
            explanation: "Lilo rêve de devenir une grande danseuse de hula."
        }
    ],
    // Série 3 : Les Aventures à Hawaï
    [
        {
            question: "Quel est le plat préféré de Stitch ?",
            options: ["Le café", "La noix de coco", "Les gâteaux", "Le poulet frit"],
            correct: 0,
            explanation: "Stitch adore le café, même s'il devient un peu hyperactif après en avoir bu !"
        },
        {
            question: "Quelle activité Lilo pratique-t-elle régulièrement ?",
            options: ["La danse", "Le surf", "La photographie", "Le hula"],
            correct: 3,
            explanation: "Lilo pratique régulièrement le hula dans une école de danse."
        },
        {
            question: "Où Lilo prend-elle ses photos ?",
            options: ["À l'école", "À la plage", "En ville", "Dans la forêt"],
            correct: 1,
            explanation: "Lilo aime photographier les touristes sur la plage."
        },
        {
            question: "Quel est le sport préféré de David ?",
            options: ["Le surf", "Le football", "La natation", "Le volleyball"],
            correct: 0,
            explanation: "David est un excellent surfeur et adore ce sport."
        },
        {
            question: "Où travaille Nani au début ?",
            options: ["Restaurant de plage", "Hôtel", "Magasin de surf", "Supermarché"],
            correct: 0,
            explanation: "Nani travaille dans un restaurant de plage."
        },
        {
            question: "Quel instrument Stitch apprend-il à jouer ?",
            options: ["Guitare", "Ukulélé", "Piano", "Batterie"],
            correct: 1,
            explanation: "Stitch apprend à jouer du ukulélé, un instrument traditionnel hawaïen."
        },
        {
            question: "Que collectionne Lilo ?",
            options: ["Coquillages", "Photos", "Poupées", "Timbres"],
            correct: 1,
            explanation: "Lilo collectionne les photos qu'elle prend des touristes."
        },
        {
            question: "Quel est le lieu préféré de Stitch à Hawaï ?",
            options: ["La plage", "La forêt", "La ville", "La montagne"],
            correct: 0,
            explanation: "Stitch adore passer du temps à la plage avec Lilo."
        },
        {
            question: "Quelle est la spécialité culinaire préférée de Lilo ?",
            options: ["Pizza à l'ananas", "Glace à la noix de coco", "Sandwich au thon", "Salade de fruits"],
            correct: 1,
            explanation: "Lilo adore la glace à la noix de coco, un dessert typique d'Hawaï."
        },
        {
            question: "Quel temps fait-il quand Stitch arrive sur Terre ?",
            options: ["Il pleut", "Il fait beau", "C'est la nuit", "Il y a un orage"],
            correct: 3,
            explanation: "Stitch arrive pendant un orage, ce qui masque son vaisseau spatial."
        }
    ]
];

// Faits amusants pour le carousel
const funFacts = [
    "Stitch peut soulever 3000 fois son poids !",
    "Son cerveau peut résoudre des équations complexes en quelques secondes.",
    "Il est pratiquement indestructible.",
    "Stitch adore Elvis Presley !",
    "Il peut voir dans le noir comme en plein jour.",
    "Sa force lui permet de grimper sur n'importe quelle surface.",
    "Il peut penser plus vite qu'un superordinateur.",
    "Ses griffes peuvent creuser à travers presque tout.",
    "Il peut reproduire n'importe quel son qu'il entend.",
    "Son sens de l'odorat est 1000 fois plus développé que celui des humains."
];

let currentQuestion = 0;
let score = 0;
let answeredQuestions = new Set();
let currentQuestionSet = [];

// Sélectionne une série de questions aléatoire
function selectRandomQuestionSet() {
    const randomIndex = Math.floor(Math.random() * allQuestions.length);
    currentQuestionSet = [...allQuestions[randomIndex]];
    shuffleArray(currentQuestionSet);
}

// Mélange un tableau
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Initialisation du quiz
function initializeQuiz() {
    currentQuestion = 0;
    score = 0;
    answeredQuestions.clear();
    selectRandomQuestionSet();
    showQuestion(currentQuestion);
    updateProgress();
    initializeFunFacts();
}

// Affichage d'une question
function showQuestion(index) {
    const question = currentQuestionSet[index];
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = `
        <div class="question-card">
            <div class="question-text">${question.question}</div>
            <div class="options-list">
                ${question.options.map((option, i) => `
                    <div class="option-item" onclick="selectAnswer(${i})">
                        ${option}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Sélection d'une réponse
function selectAnswer(optionIndex) {
    if (answeredQuestions.has(currentQuestion)) return;

    const options = document.querySelectorAll('.option-item');
    const correctIndex = currentQuestionSet[currentQuestion].correct;

    options.forEach(option => option.style.pointerEvents = 'none');
    
    if (optionIndex === correctIndex) {
        options[optionIndex].classList.add('correct');
        score++;
    } else {
        options[optionIndex].classList.add('wrong');
        options[correctIndex].classList.add('correct');
    }

    // Affiche l'explication
    const explanation = document.createElement('div');
    explanation.className = 'explanation';
    explanation.textContent = currentQuestionSet[currentQuestion].explanation;
    document.querySelector('.question-card').appendChild(explanation);

    answeredQuestions.add(currentQuestion);

    setTimeout(() => {
        if (currentQuestion < currentQuestionSet.length - 1) {
            currentQuestion++;
            showQuestion(currentQuestion);
            updateProgress();
        } else {
            showResults();
        }
    }, 2000);
}

// Mise à jour de la barre de progression
function updateProgress() {
    const progress = ((currentQuestion + 1) / currentQuestionSet.length) * 100;
    document.querySelector('.progress-fill').style.width = `${progress}%`;
    document.getElementById('current-question').textContent = currentQuestion + 1;
}

// Affichage des résultats
function showResults() {
    const percentage = (score / currentQuestionSet.length) * 100;
    let medal, medalText;

    if (percentage === 100) {
        medal = '../images/or.png';
        medalText = 'Expert Stitch ! Tu connais vraiment tout sur notre ami bleu !';
    } else if (percentage >= 70) {
        medal = '../images/argent.png';
        medalText = 'Fan Dévoué ! Tu es presque un expert de Stitch !';
    } else if (percentage >= 40) {
        medal = '../images/bronze.png';
        medalText = 'Apprenti Ohana ! Continue d\'apprendre sur Stitch !';
    } else {
        medal = '../images/try.png';
        medalText = 'Continue d\'essayer ! Stitch croit en toi !';
    }

    const quizContent = document.getElementById('quiz-content');
    const resultsDiv = document.getElementById('quiz-results');
    
    quizContent.style.display = 'none';
    resultsDiv.classList.remove('hidden');
    resultsDiv.innerHTML = `
        <h2>Résultats</h2>
        <div class="results-content">
            <div class="score-display">
                <div class="score-circle">
                    <span class="score-number">${score}</span>
                    <span class="score-text">/${currentQuestionSet.length}</span>
                </div>
            </div>
            <div class="medal-display">
                <img src="${medal}" alt="Médaille" class="medal-image">
                <p class="medal-text">${medalText}</p>
            </div>
            <button class="restart-btn" onclick="initializeQuiz()">Recommencer le Quiz</button>
        </div>
    `;
}

// Carousel de faits amusants
function initializeFunFacts() {
    const factCarousel = document.querySelector('.fact-carousel');
    let currentFact = 0;

    function showFact() {
        factCarousel.innerHTML = `<p>${funFacts[currentFact]}</p>`;
        currentFact = (currentFact + 1) % funFacts.length;
    }

    showFact();
    setInterval(showFact, 5000);
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', initializeQuiz);
