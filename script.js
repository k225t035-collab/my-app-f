const terminalContent = document.getElementById('terminal-content');
const monitor = document.querySelector('.monitor');

const portfolioData = [
    { type: 'text', content: '> INITIALIZING SYSTEM...' },
    { type: 'text', content: '> LOADING DATA CORES...' },
    { type: 'text', content: '> ACCESS GRANTED.' },
    { type: 'text', content: '' },
    { type: 'text', content: '----------------------------------------' },
    { type: 'header', content: 'GHOST_TERMINAL v1.0.4' },
    { type: 'text', content: '----------------------------------------' },
    { type: 'text', content: '' },
    { type: 'header', content: '[USER_INFO]' },
    { type: 'text', content: 'NAME: GHOST_USER' },
    { type: 'text', content: 'ROLE: FULL-STACK SORCERER' },
    { type: 'text', content: 'SKILLS: HTML, CSS, JS, REACT, NODE, PYTHON' },
    { type: 'text', content: '' },
    { type: 'header', content: '[DATA_CORES]' },
    { type: 'link', label: 'PROJECT_A', url: '#' },
    { type: 'link', label: 'PROJECT_B', url: '#' },
    { type: 'link', label: 'PROJECT_C', url: '#' },
    { type: 'text', content: '' },
    { type: 'header', content: '[COMMS]' },
    { type: 'text', content: 'EMAIL: contact@ghost.dev' },
    { type: 'text', content: 'GITHUB: github.com/ghost' },
    { type: 'text', content: '' },
    { type: 'text', content: '> SYSTEM STABLE. AWAITING INPUT...' },
];

async function typeWriter(text, speed = 30) {
    const line = document.createElement('div');
    terminalContent.appendChild(line);
    
    for (let i = 0; i < text.length; i++) {
        line.textContent += text[i];
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

async function renderPortfolio() {
    for (const item of portfolioData) {
        if (item.type === 'header') {
            const header = document.createElement('div');
            header.style.color = 'var(--glitch-blue)';
            header.style.fontWeight = 'bold';
            header.style.marginTop = '10px';
            terminalContent.appendChild(header);
            await typeWriter(item.content, 50);
        } else if (item.type === 'link') {
            const linkLine = document.createElement('div');
            const link = document.createElement('a');
            link.href = item.url;
            link.style.color = 'var(--text-color)';
            link.style.textDecoration = 'none';
            link.style.borderBottom = '1px dashed var(--text-color)';
            link.onmouseover = () => link.style.color = 'var(--glitch-red)';
            link.onmouseout = () => link.style.color = 'var(--text-color)';
            linkLine.appendChild(document.createTextNode('> '));
            linkLine.appendChild(link);
            terminalContent.appendChild(linkLine);
            
            // Type the link label
            for (let i = 0; i < item.label.length; i++) {
                link.textContent += item.label[i];
                await new Promise(resolve => setTimeout(resolve, 50));
            }
        } else {
            await typeWriter(item.content, 20);
        }
        
        // Add cursor to the end of the last line
        const cursor = document.createElement('span');
        cursor.className = 'cursor';
        terminalContent.lastChild.appendChild(cursor);
        await new Promise(resolve => setTimeout(resolve, 100));
        cursor.remove();
    }
    
    // Final cursor
    const finalCursor = document.createElement('span');
    finalCursor.className = 'cursor';
    terminalContent.lastChild.appendChild(finalCursor);
}

// Random Glitch Trigger
function triggerGlitch() {
    if (document.body.classList.contains('stable-mode')) {
        setTimeout(triggerGlitch, 1000);
        return;
    }
    
    monitor.classList.add('glitch-active');
    setTimeout(() => {
        monitor.classList.remove('glitch-active');
    }, Math.random() * 500 + 100);
    
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
    renderPortfolio();
    triggerGlitch();
};
