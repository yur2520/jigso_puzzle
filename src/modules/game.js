import { addDragAndDrop } from './dragndrop.js';
import * as ui from './ui.js';

const puzzleContainer = document.getElementById('puzzle-container');
const piecesContainer = document.getElementById('pieces-container');
const snapSound = new Audio(require('../sounds/snap.mp3').default);

const image = new Image();
let currentImageSrc = null;
let currentImageRatio = 1;

let pieces = [];
let puzzleWidth, puzzleHeight, pieceWidth, pieceHeight;
let gameStartTime, gameTimer, completedCount;
let gridCols, gridRows;

function onPieceSnapped() {
    completedCount++;
    updateProgress();
    checkCompletion();
}

function shuffleAndPlacePieces() {
    pieces.sort(() => Math.random() - 0.5);
    const fragment = document.createDocumentFragment();
    const spreadAreaHeight = Math.max(300, piecesContainer.clientHeight * 0.8);
    pieces.forEach(piece => {
        const maxX = puzzleWidth - pieceWidth;
        const maxY = spreadAreaHeight - pieceHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // top/left 방식으로 위치 설정
        piece.style.left = `${randomX}px`;
        piece.style.top = `${randomY}px`;
        
        // transform 속성은 깨끗하게 비워둡니다.
        piece.style.transform = '';

        fragment.appendChild(piece);
        addDragAndDrop(piece, {
            puzzleContainer, piecesContainer, snapSound, pieceWidth, onSnap: onPieceSnapped
        });
    });
    piecesContainer.appendChild(fragment);
}


function resetGame() {
    piecesContainer.innerHTML = '';
    puzzleContainer.innerHTML = '';
    pieces = [];
    completedCount = 0;
    ui.hideGameInfo();
    stopTimer();
}

function getGridSize(pieceCount) {
    let cols, rows;
    switch (pieceCount) {
        case 12: cols = 4; rows = 3; break;
        case 30: cols = 6; rows = 5; break;
        case 50: cols = 10; rows = 5; break;
        case 100: cols = 10; rows = 10; break;
        default: cols = 6; rows = 5;
    }
    return { cols, rows };
}

function calculateOptimalSize() {
    const maxWidth = Math.min(600, window.innerWidth * 0.95);
    const maxHeight = Math.min(600, window.innerHeight * 0.85);


    let targetWidth, targetHeight;
    if (currentImageRatio >= 1) {
        targetWidth = Math.min(maxWidth, image.naturalWidth);
        targetHeight = targetWidth / currentImageRatio;
        if (targetHeight > maxHeight) {
            targetHeight = maxHeight;
            targetWidth = targetHeight * currentImageRatio;
        }
    } else {
        // 세로가 더 긴 이미지 (portrait)
        targetHeight = Math.min(maxHeight, image.naturalHeight);
        targetWidth = targetHeight * currentImageRatio;

        if (targetWidth > maxWidth) {
            targetWidth = maxWidth;
            targetHeight = targetWidth / currentImageRatio;
        }
    }

    puzzleWidth = Math.floor(targetWidth);
    puzzleHeight = Math.floor(targetHeight);
}

function updateProgress() {
    document.getElementById('completedPieces').textContent = completedCount;
    const total = parseInt(document.getElementById('totalPieces').textContent);
    const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;
    document.getElementById('progressPercent').textContent = percent;
}

function checkCompletion() {
    if (completedCount === pieces.length) {
        stopTimer();
        setTimeout(() => {
            ui.showCompletionMessage();
        }, 500);
    }
}

function startTimer() {
    gameStartTime = Date.now();
    gameTimer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    if (gameTimer) {
        clearInterval(gameTimer);
        gameTimer = null;
    }
}

function updateTimer() {
    if (!gameStartTime) return;
    const elapsed = Date.now() - gameStartTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    document.getElementById('gameTime').textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// 외부에서 호출할 수 있도록 export 합니다.
export function startGame(pieceCount) {
    if (!currentImageSrc) {
        ui.showError('이미지를 먼저 선택해주세요.');
        return;
    }

    resetGame();
    ui.showGameInfo();
    startTimer();

    const grid = getGridSize(pieceCount);
    gridCols = grid.cols;
    gridRows = grid.rows;

    pieceWidth = puzzleWidth / gridCols;
    pieceHeight = puzzleHeight / gridRows;

    document.getElementById('totalPieces').textContent = pieceCount;
    updateProgress();

    //이미지 분할 로직

    const canvas = document.createElement('canvas');
    canvas.width = puzzleWidth;
    canvas.height = puzzleHeight;
    const context = canvas.getContext('2d');

    context.drawImage(image, 0, 0, puzzleWidth, puzzleHeight);

    for (let y = 0; y < gridRows; y++) {
        for (let x = 0; x < gridCols; x++) {
            const pieceCanvas = document.createElement('canvas');
            pieceCanvas.width = pieceWidth;
            pieceCanvas.height = pieceHeight;
            const pieceContext = pieceCanvas.getContext('2d');

            pieceContext.drawImage(
                canvas,           // 원본 캔버스
                x * pieceWidth,   // 원본에서 복사할 x 위치
                y * pieceHeight,  // 원본에서 복사할 y 위치
                pieceWidth,       // 복사할 너비
                pieceHeight,      // 복사할 높이
                0, 0,             // 새 캔버스에 그릴 위치 (0,0)
                pieceWidth,       // 새로 그릴 너비
                pieceHeight       // 새로 그릴 높이
            );

            const pieceImageUrl = pieceCanvas.toDataURL();

            const piece = document.createElement('div');
            piece.className = 'puzzle-piece';
            piece.style.width = `${pieceWidth}px`;
            piece.style.height = `${pieceHeight}px`;
            piece.style.backgroundImage = `url(${pieceImageUrl})`;

            piece.style.backgroundSize = 'cover';
            piece.dataset.correctX = `${x * pieceWidth}`;
            piece.dataset.correctY = `${y * pieceHeight}`;

            pieces.push(piece);
        }
    }

    shuffleAndPlacePieces();
}

export function handleImageLoad(imageSrc, title) {
    currentImageSrc = imageSrc;
    image.crossOrigin = 'anonymous';
    image.src = imageSrc;
}

image.onload = () => {
    currentImageRatio = image.naturalWidth / image.naturalHeight;
    calculateOptimalSize();

    puzzleContainer.style.width = `${puzzleWidth}px`;
    puzzleContainer.style.height = `${puzzleHeight}px`;
    piecesContainer.style.width = `${puzzleWidth}px`;
    piecesContainer.style.minHeight = `${Math.max(400, puzzleHeight * 0.7)}px`;
    
    ui.applyDynamicTheme(image); // ui. 접두사 및 image 인자 전달
    ui.enableDifficultyButtons();
    ui.showSuccess('이미지가 로드되었습니다! 난이도를 선택해주세요.');
    ui.hideLoading();
};

image.onerror = () => {
    ui.hideLoading();
    ui.showError('이미지를 불러올 수 없습니다. 다른 이미지를 선택해주세요.');
    ui.disableDifficultyButtons();
};

export function handleResize() {
    if (!currentImageSrc) return;

    const oldPuzzleWidth = puzzleWidth;
    calculateOptimalSize();

    puzzleContainer.style.width = `${puzzleWidth}px`;
    puzzleContainer.style.height = `${puzzleHeight}px`;
    piecesContainer.style.width = `${puzzleWidth}px`;
    
    if (pieces.length === 0) return;

    pieceWidth = puzzleWidth / gridCols;
    pieceHeight = puzzleHeight / gridRows;

    pieces.forEach(piece => {
        piece.style.width = `${pieceWidth}px`;
        piece.style.height = `${pieceHeight}px`;

        if (piece.classList.contains('snapped')) {
            const ratio = puzzleWidth / oldPuzzleWidth;
            const newX = parseFloat(piece.dataset.correctX) * ratio;
            const newY = parseFloat(piece.dataset.correctY) * ratio;
            piece.dataset.correctX = newX;
            piece.dataset.correctY = newY;
            piece.style.transform = `translate(${newX}px, ${newY}px)`;
        }
    });
}



