document.addEventListener('DOMContentLoaded', () => {
    // Animation des images au scroll
    const images = document.querySelectorAll('.article-image, .gallery-image');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.5
    });

    images.forEach(image => {
        observer.observe(image);
    });

    // Gestion des boutons de partage et j'aime
    const shareBtn = document.querySelector('.share-btn');
    const likeBtn = document.querySelector('.like-btn');
    let isLiked = false;

    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            if (navigator.share) {
                navigator.share({
                    title: document.title,
                    url: window.location.href
                })
                .catch(console.error);
            } else {
                alert('Lien copié! Partagez-le avec vos amis! 🌟');
            }
        });
    }

    if (likeBtn) {
        likeBtn.addEventListener('click', () => {
            isLiked = !isLiked;
            likeBtn.innerHTML = isLiked ? 'Aimé ❤️' : 'J\'aime ❤️';
            likeBtn.classList.toggle('liked');
            
            if (isLiked) {
                createHeartAnimation(likeBtn);
            }
        });
    }

    // Création d'animation de cœurs
    function createHeartAnimation(button) {
        const heart = document.createElement('span');
        heart.innerHTML = '❤️';
        heart.className = 'floating-heart';
        
        // Position aléatoire autour du bouton
        const randomX = Math.random() * 40 - 20;
        heart.style.left = `calc(50% + ${randomX}px)`;
        
        button.appendChild(heart);
        
        // Suppression après l'animation
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }

    // Zoom des images de la galerie
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            
            document.body.appendChild(modal);
            
            modal.addEventListener('click', () => {
                modal.remove();
            });
        });
    });

    // Animation du texte au scroll
    const sections = document.querySelectorAll('.article-section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});

// Ajout de styles dynamiques pour les animations
const style = document.createElement('style');
style.textContent = `
    .article-image, .gallery-image {
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.6s ease-out;
    }

    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }

    .floating-heart {
        position: absolute;
        animation: float-up 1s ease-out forwards;
        pointer-events: none;
    }

    @keyframes float-up {
        0% {
            transform: translateY(0) scale(1);
            opacity: 1;
        }
        100% {
            transform: translateY(-50px) scale(1.5);
            opacity: 0;
        }
    }

    .image-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        cursor: pointer;
    }

    .modal-content img {
        max-width: 90%;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 10px;
    }

    .article-section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
    }

    .section-visible {
        opacity: 1;
        transform: translateY(0);
    }

    .liked {
        background: #ff4081 !important;
        transform: scale(1.05);
    }
`;

document.head.appendChild(style);
