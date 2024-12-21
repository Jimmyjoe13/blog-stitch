// Données des tutoriels
const tutorials = {
    'peluche': {
        title: 'Mini Peluche Stitch',
        materials: [
            '30cm x 30cm de feutrine bleue',
            '15cm x 15cm de feutrine rose',
            'Fil à coudre bleu et rose',
            'Aiguille',
            'Rembourrage synthétique',
            'Ciseaux',
            'Crayon à papier',
            'Patron (à télécharger)'
        ],
        steps: [
            {
                title: 'Préparation du patron',
                text: 'Téléchargez et imprimez le patron. Découpez toutes les pièces soigneusement.',
                tip: 'Utilisez des épingles pour maintenir le patron sur le tissu.'
            },
            {
                title: 'Découpe des pièces',
                text: 'Tracez les pièces du patron sur la feutrine et découpez-les. Pour le corps, découpez 2 fois le même patron.',
                tip: 'Laissez une marge de 0.5cm pour les coutures.'
            },
            {
                title: 'Assemblage du corps',
                text: 'Cousez les deux parties du corps ensemble en laissant une ouverture pour le rembourrage.',
                tip: 'Utilisez un point arrière pour plus de solidité.'
            },
            {
                title: 'Rembourrage',
                text: 'Rembourrez doucement la peluche en commençant par les extrémités.',
                tip: 'Utilisez un crayon pour pousser le rembourrage dans les petits espaces.'
            },
            {
                title: 'Finitions',
                text: 'Fermez l\'ouverture avec des points invisibles. Brodez les yeux et le nez.',
                tip: 'Pour les yeux, utilisez du fil noir pour plus de réalisme.'
            }
        ]
    },
    'marque-page': {
        title: 'Marque-page Stitch',
        materials: [
            'Papier cartonné bleu',
            'Papier cartonné noir et rose',
            'Ciseaux',
            'Colle',
            'Feutres ou crayons de couleur',
            'Règle',
            'Crayon à papier'
        ],
        steps: [
            {
                title: 'Préparation du marque-page',
                text: 'Découpez un rectangle de 5cm x 15cm dans le papier cartonné bleu.',
                tip: 'Utilisez une règle pour des lignes bien droites.'
            },
            {
                title: 'Création du visage',
                text: 'Dessinez et découpez les oreilles, les yeux et le nez de Stitch.',
                tip: 'Faites un croquis au crayon avant de découper.'
            },
            {
                title: 'Assemblage',
                text: 'Collez les différents éléments sur le marque-page.',
                tip: 'Commencez par les plus grands éléments.'
            },
            {
                title: 'Détails',
                text: 'Ajoutez les détails avec les feutres : sourcils, bouche, etc.',
                tip: 'Moins c\'est plus ! Gardez les détails simples.'
            },
            {
                title: 'Protection',
                text: 'Optionnel : recouvrez de papier adhésif transparent pour protéger.',
                tip: 'Lissez bien pour éviter les bulles d\'air.'
            }
        ]
    },
    'lanterne': {
        title: 'Lanterne Spatiale',
        materials: [
            'Bocal en verre propre',
            'Peinture phosphorescente',
            'Pinceau fin',
            'LED à pile',
            'Ruban adhésif',
            'Paillettes (optionnel)',
            'Papier calque',
            'Ciseaux'
        ],
        steps: [
            {
                title: 'Préparation du bocal',
                text: 'Nettoyez bien le bocal et laissez-le sécher complètement.',
                tip: 'Utilisez de l\'alcool pour un nettoyage parfait.'
            },
            {
                title: 'Création du motif',
                text: 'Dessinez des étoiles et des planètes sur le papier calque.',
                tip: 'Variez la taille des étoiles pour plus de profondeur.'
            },
            {
                title: 'Transfert du motif',
                text: 'Placez le papier calque à l\'intérieur du bocal comme guide.',
                tip: 'Fixez-le temporairement avec du ruban adhésif.'
            },
            {
                title: 'Peinture',
                text: 'Peignez les motifs avec la peinture phosphorescente.',
                tip: 'Faites plusieurs couches pour plus d\'éclat.'
            },
            {
                title: 'Finitions',
                text: 'Ajoutez la LED et décorez le bord du bocal.',
                tip: 'Utilisez un ruban bleu pour rappeler Stitch.'
            }
        ]
    }
};

// Gestion des modales
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.tutorial-modal');
    const modalContent = document.querySelector('.tutorial-content');
    const tutorialButtons = document.querySelectorAll('.tutorial-btn');
    const closeButton = document.querySelector('.close-modal');

    // Ouvrir la modale avec le tutoriel approprié
    tutorialButtons.forEach(button => {
        button.addEventListener('click', () => {
            const craftType = button.closest('.craft-card').dataset.craft;
            const tutorial = tutorials[craftType];
            
            if (tutorial) {
                showTutorial(tutorial);
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Fermer la modale
    closeButton.addEventListener('click', () => {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    // Fermer la modale en cliquant en dehors
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });

    // Afficher le tutoriel
    function showTutorial(tutorial) {
        modalContent.innerHTML = `
            <h2>${tutorial.title}</h2>
            
            <div class="tutorial-materials">
                <h3>Matériel Nécessaire</h3>
                <ul>
                    ${tutorial.materials.map(material => `
                        <li>${material}</li>
                    `).join('')}
                </ul>
            </div>

            <div class="tutorial-steps">
                <h3>Étapes</h3>
                ${tutorial.steps.map((step, index) => `
                    <div class="tutorial-step">
                        <h4>Étape ${index + 1}: ${step.title}</h4>
                        <p>${step.text}</p>
                        <div class="step-tip">
                            <strong>Astuce:</strong> ${step.tip}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
});

// Animation des cartes au scroll
function animateOnScroll() {
    const cards = document.querySelectorAll('.craft-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });
}

// Initialisation des animations
document.addEventListener('DOMContentLoaded', animateOnScroll);
