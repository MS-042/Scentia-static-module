// script.js
import { screens } from './screens.js';

const DEFAULT_SCREEN_BG = '#E2E1D9';

let currentIndex = -1;

function render() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  // If currentIndex < 0 => Title screen
  if (currentIndex < 0) {
    renderTitleScreen(app);
  } else {
    renderScreen(app);
  }

  createToolbar();
}

function renderTitleScreen(app) {
  // For the title screen, just set a default page BG
  setPageBackground(DEFAULT_SCREEN_BG);

  const titleScreen = document.createElement('div');
  titleScreen.className = 'title-screen';
  titleScreen.innerHTML = `
    <h1>Welcome to the E-Learning Demo!</h1>
    <button id="beginBtn" class="btn">Begin</button>
  `;
  app.appendChild(titleScreen);

  document.getElementById('beginBtn').addEventListener('click', () => {
    currentIndex = 0;
    render();
  });
}

function renderScreen(app) {
  const screen = screens[currentIndex];

  // 1) Set the overall page background based on screenBG
  setPageBackground(screen.screenBG);

  // 2) Create the container with background = containerBG (default transparent)
  const containerBG = screen.containerBG || 'transparent';

  const container = document.createElement('div');
  container.className = `container content-${
    screen.contentPosition || 'middle'
  }`;
  container.style.background = containerBG;

  // Title
  const heading = document.createElement('h2');
  heading.textContent = screen.title;
  container.appendChild(heading);

  // Body content
  screen.bodyContent.forEach((section) => {
    if (section.type === 'text') {
      const p = document.createElement('p');
      p.textContent = section.value;
      container.appendChild(p);
    } else if (section.type === 'html') {
      const htmlWrapper = document.createElement('div');
      htmlWrapper.innerHTML = section.value;
      container.appendChild(htmlWrapper);
    } else if (section.type === 'flipCards') {
      const flipcards = document.createElement('div');
      flipcards.className = 'flipcards';

      section.cards.forEach((card) => {
        const flipcard = document.createElement('div');
        flipcard.className = 'flipcard';
        flipcard.innerHTML = `
          <div class="flipcard-inner">
            <div class="flipcard-front">${card.main}</div>
            <div class="flipcard-back">${card.aside}</div>
          </div>
        `;
        flipcard.addEventListener('click', () => {
          flipcard.querySelector('.flipcard-inner').classList.toggle('flipped');
        });
        flipcards.appendChild(flipcard);
      });
      container.appendChild(flipcards);
    } else if (section.type === 'accordions') {
      section.items.forEach((item) => {
        const accordion = document.createElement('div');
        accordion.className = 'accordion-item';

        const header = document.createElement('div');
        header.className = 'accordion-header';
        header.textContent = item.main;

        const content = document.createElement('div');
        content.className = 'accordion-content';
        content.textContent = item.aside;

        header.addEventListener('click', () => {
          content.classList.toggle('open');
        });

        accordion.appendChild(header);
        accordion.appendChild(content);
        container.appendChild(accordion);
      });
    } else if (section.type === 'subheading') {
      // Renders as <h3>
      const h3 = document.createElement('h3');
      h3.textContent = section.value;
      container.appendChild(h3);
    }
  });

  app.appendChild(container);
}

/**
 * Sets the page background
 * If screenBG is a URL, use it as an image; else treat as a color.
 */
function setPageBackground(bgValue) {
  // Clear any prior background
  document.body.style.backgroundImage = 'none';
  document.body.style.backgroundColor = DEFAULT_SCREEN_BG;

  if (!bgValue) {
    // No custom screenBG => use default color
    document.body.style.backgroundColor = DEFAULT_SCREEN_BG;
    return;
  }

  if (bgValue.startsWith('http') || bgValue.startsWith('//')) {
    // It's an image
    document.body.style.backgroundImage = `url('${bgValue}')`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
  } else {
    // It's presumably a color code
    document.body.style.backgroundColor = bgValue;
  }
}

/** Creates or rebuilds the bottom toolbar */
function createToolbar() {
  const oldToolbar = document.querySelector('.toolbar');
  if (oldToolbar) oldToolbar.remove();

  const toolbar = document.createElement('div');
  toolbar.className = 'toolbar';

  // Progress bar
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';

  screens.forEach((screen, i) => {
    const segment = document.createElement('div');
    segment.className = 'progress-segment';
    segment.title = screen.title;

    if (i < currentIndex) {
      segment.style.backgroundColor = '#46B1E1'; // visited
    } else if (i === currentIndex) {
      segment.style.backgroundColor = '#2B3473'; // current
    } else {
      segment.style.backgroundColor = '#D9D9D9'; // future
    }
    progressBar.appendChild(segment);
  });
  toolbar.appendChild(progressBar);

  // Lower row with "Screen: X of Y" + Next/Reset
  const toolbarRow = document.createElement('div');
  toolbarRow.className = 'toolbar-row';

  const screenText = document.createElement('span');
  screenText.className = 'screen-text';

  if (currentIndex >= 0) {
    const totalScreens = screens.length;
    const currentNumber = currentIndex + 1;
    screenText.textContent = `Screen: ${currentNumber} of ${totalScreens}`;
  } else {
    screenText.textContent = '';
  }
  toolbarRow.appendChild(screenText);

  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn';

  if (currentIndex === screens.length - 1) {
    nextBtn.textContent = 'Reset';
    nextBtn.addEventListener('click', () => {
      alert('Module complete, refresh to restart.');
    });
  } else {
    nextBtn.textContent = 'Next';
    nextBtn.addEventListener('click', () => {
      currentIndex++;
      render();
    });
  }

  toolbarRow.appendChild(nextBtn);
  toolbar.appendChild(toolbarRow);

  // Show toolbar only if we're past the title screen
  if (currentIndex > -1) {
    document.body.appendChild(toolbar);
  }
}

// Initial render
render();