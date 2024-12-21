// Animations pour les éléments interactifs
document.addEventListener('DOMContentLoaded', () => {
    // Animation au scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.section');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);

    // Animation des cartes d'histoire
    const storyCards = document.querySelectorAll('.story-card');
    storyCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Animation du message quotidien
    const dailyMessage = document.querySelector('.daily-message');
    if (dailyMessage) {
        setInterval(() => {
            dailyMessage.classList.add('pulse');
            setTimeout(() => {
                dailyMessage.classList.remove('pulse');
            }, 1000);
        }, 5000);
    }

    // Animation des boutons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });

    // Easter egg : Stitch apparaît aléatoirement
    const createStitchEasterEgg = () => {
        const stitch = document.createElement('div');
        stitch.className = 'stitch-easter-egg';
        stitch.innerHTML = '👽';
        
        const randomX = Math.random() * (window.innerWidth - 50);
        const randomY = Math.random() * (window.innerHeight - 50);
        
        stitch.style.left = `${randomX}px`;
        stitch.style.top = `${randomY}px`;
        
        document.body.appendChild(stitch);
        
        setTimeout(() => {
            stitch.remove();
        }, 3000);
    };

    setInterval(createStitchEasterEgg, 30000);
});
