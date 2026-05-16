const terminalContent = document.getElementById('terminal-content');
const monitor = document.querySelector('.monitor');

// Use CONFIG from config.js
const { messages, codeFragments, settings } = CONFIG;

async function typeWriter(text, className = 'message-line') {
    const line = document.createElement('div');
    line.className = className;
    terminalContent.appendChild(line);
    
    for (const char of text) {
        line.textContent += char;
        await new Promise(resolve => setTimeout(resolve, settings.typingSpeed));
    }

    // Scroll to bottom smoothly
    const screen = document.querySelector('.screen');
    screen.scrollTo({
        top: screen.scrollHeight,
        behavior: 'smooth'
    });

    // Performance cleanup: remove old lines if too many
    if (terminalContent.children.length > 50) {
        terminalContent.removeChild(terminalContent.firstChild);
    }
}

async function startBulletinBoard() {
    // Initial display
    const title = document.createElement('div');
    title.className = 'glitch-active';
    title.style.fontSize = '2.5rem';
    title.style.marginBottom = '30px';
    title.textContent = CONFIG.siteTitle;
    terminalContent.appendChild(title);

    let messageIndex = 0;

    // Infinite Loop
    while (true) {
        // 1. Decide if we inject a code fragment
        if (Math.random() < settings.glitchFrequency) {
            const fragment = codeFragments[Math.floor(Math.random() * codeFragments.length)];
            await typeWriter(`[DATA_FRAGMENT]: ${fragment}`, 'code-fragment');
            await new Promise(resolve => setTimeout(resolve, 500));
        }

        // 2. Type next message
        const message = messages[messageIndex];
        await typeWriter(message);
        
        // Update index for next time (loop back)
        messageIndex = (messageIndex + 1) % messages.length;

        // 3. Wait before next line
        await new Promise(resolve => setTimeout(resolve, settings.lineInterval));
    }
}

// Random Glitch Trigger (Screen flicker)
function triggerGlitch() {
    if (document.body.classList.contains('stable-mode')) {
        setTimeout(triggerGlitch, 1000);
        return;
    }
    
    monitor.classList.add('glitch-active');
    setTimeout(() => {
        monitor.classList.remove('glitch-active');
    }, Math.random() * 400 + 100);
    
    setTimeout(triggerGlitch, Math.random() * 5000 + 2000);
}

// Stable Mode Toggle
const stableToggle = document.getElementById('stable-toggle');
stableToggle.onclick = () => {
    document.body.classList.toggle('stable-mode');
    const isStable = document.body.classList.contains('stable-mode');
    stableToggle.textContent = `STABLE MODE: ${isStable ? 'ON' : 'OFF'}`;
};

// Initialize
window.onload = () => {
    startBulletinBoard();
    triggerGlitch();
};
