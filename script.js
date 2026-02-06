const config = window.VALENTINE_CONFIG;

const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const mainContainer = document.getElementById('mainContainer');
const celebrationContainer = document.getElementById('celebrationContainer');
const celebrationGif = document.getElementById('celebrationGif');
const questionImage = document.getElementById('questionImage');

// Load initial image
questionImage.src = config.mainImage;

let yesSize = 1;

// The logic that moves the button and grows "Yes"
function handleNoInteraction(event) {
    // Prevent the default "click" behavior on mobile so it doesn't get stuck
    if (event.type === 'touchstart') {
        event.preventDefault();
    }

    // 1. Calculate random position
    // We subtract more padding (100px) so it doesn't go off-screen on small phones
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    
    noBtn.style.position = 'fixed'; // 'fixed' works better for mobile jumping
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

    // 2. Make the Yes button bigger
    yesSize += 0.2;
    yesBtn.style.transform = `scale(${yesSize})`;
    
    // 3. Move the No button to the front so it's always tappable
    noBtn.style.zIndex = "1000";
}

// Listen for BOTH mouse hover (computer) and finger touch (phone)
noBtn.addEventListener('mouseover', handleNoInteraction);
noBtn.addEventListener('touchstart', handleNoInteraction);

// Function when Yes is clicked
yesBtn.addEventListener('click', () => {
    mainContainer.classList.add('hidden');
    celebrationContainer.classList.remove('hidden');
    celebrationGif.src = config.celebration.gifUrl;
});
