import ColorThief from 'colorthief';
import { debounce } from './utils.js';

const errorMessage = document.getElementById('errorMessage');
const loadingMessage = document.getElementById('loadingMessage');
const gameInfo = document.getElementById('gameInfo');
const completionMessage = document.getElementById('completionMessage');

// 자주 사용하는 DOM 요소를 미리 찾아둡니다.
const elements = {
    errorMessage: document.getElementById('errorMessage'),
    loadingMessage: document.getElementById('loadingMessage'),
    gameInfo: document.getElementById('gameInfo'),
    completionMessage: document.getElementById('completionMessage'),
    finalTime: document.getElementById('finalTime'),
    gameTime: document.getElementById('gameTime'),
    difficultyButtons: document.querySelectorAll('.difficulty-controls button')
};

export function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}

export function showSuccess(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 3000);
}
export function showLoading() {
    loadingMessage.style.display = 'block';
}
export function hideLoading() {
    loadingMessage.style.display = 'none';
}
export function enableDifficultyButtons() {
    document.querySelectorAll('.difficulty-controls button').forEach(btn => {
        btn.disabled = false;
    });
}
export function disableDifficultyButtons() {
    document.querySelectorAll('.difficulty-controls button').forEach(btn => {
        btn.disabled = true;
    });
}
export function showGameInfo() { 
    gameInfo.classList.add('show');
}
export function hideGameInfo() { 
    gameInfo.classList.remove('show');
}

export function showCompletionMessage() {
    elements.finalTime.textContent = elements.gameTime.textContent;
    elements.completionMessage.classList.add('show');
}
export function hideCompletionMessage() {
    elements.completionMessage.classList.remove('show');
}

export function applyDynamicTheme(image) { 
const colorThief = new ColorThief();
    const palette = colorThief.getPalette(image, 2); // 2개의 주요 테마색 추출

    if (palette && palette.length >= 2) {
        const primaryColor = `rgb(${palette[0].join(',')})`;
        const secondaryColor = `rgb(${palette[1].join(',')})`;
       
        document.documentElement.style.setProperty('--theme-bg-color', `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`);
        document.documentElement.style.setProperty('--theme-button-color', primaryColor);
        document.documentElement.style.setProperty('--theme-button-hover-color', secondaryColor);
    }
}
export function setupCarousel() { 
    const track = document.querySelector('.preset-images');
    const container = document.querySelector('.carousel-container');
    const nextButton = document.getElementById('nextBtn');
    const prevButton = document.getElementById('prevBtn');
    let currentIndex = 0;

    function updateCarousel() {
        const containerWidth = container.clientWidth;
        // 한 번에 이동할 거리를 컨테이너 너비로 설정
        const moveDistance = containerWidth;
        const totalWidth = track.scrollWidth;
        const maxScroll = totalWidth - containerWidth;

        // 이동할 위치 계산
        let newPosition = currentIndex * -moveDistance;

        // 경계 확인
        if (newPosition < -maxScroll) {
            newPosition = -maxScroll;
        }
        if (newPosition > 0) {
            newPosition = 0;
        }

        track.style.transform = `translateX(${newPosition}px)`;
    }

    nextButton.addEventListener('click', () => {
        const containerWidth = container.clientWidth;
        const totalWidth = track.scrollWidth;
        // 다음 인덱스로 이동, 단 전체 너비를 넘지 않도록
        if ((currentIndex + 1) * containerWidth < totalWidth) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevButton.addEventListener('click', () => {
        // 이전 인덱스로 이동, 단 0보다 작아지지 않도록
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // 창 크기가 변경될 때 캐러셀 위치를 재조정
    window.addEventListener('resize', debounce(updateCarousel, 250));
}