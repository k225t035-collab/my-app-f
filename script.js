const terminalContent = document.getElementById('terminal-content');
const monitor = document.querySelector('.monitor');

// Use CONFIG from config.js
const { profile, projects, contact, bootMessages, settings } = CONFIG;

async function typeWriter(text, speed = settings.typingSpeed) {
    const line = document.createElement('div');
    line.style.minHeight = '1.2em';
    terminalContent.appendChild(line);
    
    // Smooth Japanese character handling
    for (const char of text) {
        line.textContent += char;
        await new Promise(resolve => setTimeout(resolve, speed));
    }
}

async function renderPortfolio() {
    terminalContent.innerHTML = ''; // Clear previous

    // 1. Boot Sequence
    for (const msg of bootMessages) {
        await typeWriter(msg, 20);
    }

    await new Promise(resolve => setTimeout(resolve, 500));

    // 2. Header
    const siteTitle = document.createElement('div');
    siteTitle.className = 'glitch-active';
    siteTitle.style.fontSize = '2rem';
    siteTitle.style.marginBottom = '20px';
    siteTitle.textContent = CONFIG.siteTitle;
    terminalContent.appendChild(siteTitle);

    // 3. Profile Section
    await typeSectionHeader('[USER_INFO]');
    await typeWriter(`NAME: ${profile.name}`);
    await typeWriter(`ROLE: ${profile.role}`);
    await typeWriter(`SKILLS: ${profile.skills.join(', ')}`);
    await typeWriter(`BIO: ${profile.bio}`);
    
    await addSpacing();

    // 4. Projects Section
    await typeSectionHeader('[DATA_CORES]');
    for (const project of projects) {
        await typeLink(project.label, project.url);
    }

    await addSpacing();

    // 5. Comms Section
    await typeSectionHeader('[COMMS]');
    await typeWriter(`EMAIL: ${contact.email}`);
    await typeWriter(`GITHUB: ${contact.github}`);
    if (contact.twitter) await typeWriter(`TWITTER: ${contact.twitter}`);

    await addSpacing();
    await typeWriter("> SYSTEM STABLE. AWAITING INPUT...");
    
    // Add final cursor
    const finalCursor = document.createElement('span');
    finalCursor.className = 'cursor';
    terminalContent.lastChild.appendChild(finalCursor);
}

async function typeSectionHeader(text) {
    const header = document.createElement('div');
    header.style.color = 'var(--text-color)';
    header.style.fontWeight = 'bold';
    header.style.marginTop = '15px';
    header.style.borderLeft = '4px solid var(--text-color)';
    header.style.paddingLeft = '10px';
    terminalContent.appendChild(header);
    
    for (const char of text) {
        header.textContent += char;
        await new Promise(resolve => setTimeout(resolve, 50));
    }
}

async function typeLink(label, url) {
    const linkLine = document.createElement('div');
    const link = document.createElement('a');
    link.href = url;
    link.style.color = 'var(--text-color)';
    link.style.textDecoration = 'none';
    link.style.borderBottom = '1px dashed var(--text-color)';
    link.onmouseover = () => link.style.color = 'white';
    link.onmouseout = () => link.style.color = 'var(--text-color)';
    linkLine.appendChild(document.createTextNode('> '));
    linkLine.appendChild(link);
    terminalContent.appendChild(linkLine);
    
    for (const char of label) {
        link.textContent += char;
        await new Promise(resolve => setTimeout(resolve, 40));
    }
}

async function addSpacing() {
    const div = document.createElement('div');
    div.style.height = '15px';
    terminalContent.appendChild(div);
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
    }, Math.random() * 400 + 100);
    
    setTimeout(triggerGlitch, Math.random() * settings.glitchInterval + 1000);
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
