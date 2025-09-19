import './styles.css';
import image01 from './puzzle-image.png';
import imageCake from './cake.jpeg';
import imageAutumn from './autumn.jpeg';
import ColorThief from 'colorthief';



// HTML에서 요소들을 가져옵니다.
const puzzleContainer = document.getElementById('puzzle-container');
const piecesContainer = document.getElementById('pieces-container');
const errorMessage = document.getElementById('errorMessage');
const loadingMessage = document.getElementById('loadingMessage');
const gameInfo = document.getElementById('gameInfo');
const completionMessage = document.getElementById('completionMessage');


// 퍼즐 이미지 객체를 생성합니다.
const image = new Image();
let currentImageSrc = null;
let currentImageRatio = 1; // 이미지의 가로세로 비율


// 미리 정의된 이미지 정보
const imageDatabase = {
    landscape1: {
        url: 'https://images.unsplash.com/photo-1505490096310-204ef067fe6b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ratio: 4 / 3, // 가로가 더 긴 이미지
        title: '산과 호수'
    },
    animals1: {
        url: 'https://images.unsplash.com/photo-1615233500022-01d251f3eb33?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        ratio: 3 / 4, // 세로가 더 긴 이미지
        title: '귀여운 강아지'
    },
    flowers1: {
        url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop&crop=center',
        ratio: 4 / 3,
        title: '화려한 꽃들'
    },
    space1: {
        url: imageCake,
        ratio: 16 / 9,
        title: '딸기 케이크'
    },
    ocean1: {
        url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop&crop=center',
        ratio: 4 / 3,
        title: '바다와 해변'
    },
    illust1: {
        url: image01,
        ratio: 4 / 3,
        title: '꿈꾸는 산'
    }
};

// 게임 상태를 관리할 변수들
let pieces = [];
let puzzleWidth, puzzleHeight;
let pieceWidth, pieceHeight;
let gameStartTime = null;
let gameTimer = null;
let completedCount = 0;

let gridCols = 0; // 그리드 열 개수 저장 변수 추가
let gridRows = 0;

// 이미지 로딩 성공 처리
image.onload = () => {
    hideLoading();

    // 이미지 비율에 맞춰 크기 계산
    calculateOptimalSize();

    // 퍼즐 판의 크기를 설정합니다.
    puzzleContainer.style.width = `${puzzleWidth}px`;
    puzzleContainer.style.height = `${puzzleHeight}px`;
    piecesContainer.style.width = `${puzzleWidth}px`;
    piecesContainer.style.minHeight = `${Math.max(400, puzzleHeight * 0.7)}px`;

    applyDynamicTheme();
    // 난이도 버튼 활성화
    enableDifficultyButtons();
    showSuccess('이미지가 로드되었습니다! 난이도를 선택해주세요.');
};

function applyDynamicTheme() {
    const colorThief = new ColorThief();
    // getPalette(image, colorCount)는 이미지에서 지정된 개수의 주요 색상 배열을 반환합니다.
    const palette = colorThief.getPalette(image, 2); // 2개의 주요 색상 추출

    if (palette && palette.length >= 2) {
        const primaryColor = `rgb(${palette[0].join(',')})`;
        const secondaryColor = `rgb(${palette[1].join(',')})`;

        // CSS 변수 값을 변경하여 테마 적용
        document.documentElement.style.setProperty('--theme-bg-color', `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`);
        document.documentElement.style.setProperty('--theme-button-color', primaryColor);
        document.documentElement.style.setProperty('--theme-button-hover-color', secondaryColor);
    }
}
// 이미지 크기 최적화 함수
function calculateOptimalSize() {
    const maxWidth = Math.min(600, window.innerWidth * 0.95);
    const maxHeight = Math.min(600, window.innerHeight * 0.85);

    // 이미지 비율에 따라 최적 크기 계산
    let targetWidth, targetHeight;

    if (currentImageRatio >= 1) {
        // 가로가 더 긴 이미지 (landscape)
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

// 이미지 로딩 실패 처리
image.onerror = () => {
    hideLoading();
    showError('이미지를 불러올 수 없습니다. 다른 이미지를 선택해주세요.');
    disableDifficultyButtons();
};

// 파일 업로드 처리 제거됨 - 미리 정의된 이미지만 사용

// 프리셋 이미지 선택 처리
document.querySelectorAll('.preset-image-container').forEach(container => {
    container.addEventListener('click', () => {
        const imageKey = container.dataset.image;
        const imageData = imageDatabase[imageKey];

        if (!imageData) {
            showError('이미지 정보를 찾을 수 없습니다.');
            return;
        }

        // 선택 표시 업데이트
        document.querySelectorAll('.preset-image').forEach(img => img.classList.remove('selected'));
        container.querySelector('.preset-image').classList.add('selected');

        showLoading();
        currentImageRatio = imageData.ratio;
        loadImage(imageData.url, imageData.title);
    });
});

// 이미지 로드 함수
function loadImage(imageSrc, title = '') {
    currentImageSrc = imageSrc;
    resetGame();
    image.crossOrigin = 'anonymous'; // CORS 처리
    image.src = imageSrc;
}

// 게임 리셋
function resetGame() {
    piecesContainer.innerHTML = '';
    puzzleContainer.innerHTML = '';
    pieces = [];
    completedCount = 0;
    hideGameInfo();
    stopTimer();
}

// 난이도 버튼을 누르면 이 함수가 호출됩니다.
function startGame(pieceCount) {
    if (!currentImageSrc) {
        showError('먼저 이미지를 선택해주세요.');
        return;
    }

    resetGame();
    showGameInfo();
    startTimer();

    // 난이도에 따라 퍼즐을 몇x몇으로 나눌지 결정합니다.
    const grid = getGridSize(pieceCount);
    const cols = grid.cols;
    const rows = grid.rows;

    gridCols = cols; 
    gridRows = rows;

    // 각 조각의 너비와 높이를 계산합니다.
    pieceWidth = puzzleWidth / cols;
    pieceHeight = puzzleHeight / rows;

    // 총 피스 수 업데이트
    document.getElementById('totalPieces').textContent = pieceCount;
    updateProgress();

    // 이중 for문을 이용해 이미지를 자르고 조각을 만듭니다.
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            // 1. 캔버스를 이용해 이미지 자르기
            const canvas = document.createElement('canvas');
            canvas.width = pieceWidth;
            canvas.height = pieceHeight;
            const context = canvas.getContext('2d');

            context.drawImage(
                image,
                x * pieceWidth, y * pieceHeight, pieceWidth, pieceHeight,
                0, 0, pieceWidth, pieceHeight
            );

            // 2. 잘라낸 이미지로 퍼즐 조각(div) 만들기
            const piece = document.createElement('div');
            piece.className = 'puzzle-piece';
            piece.style.width = `${pieceWidth}px`;
            piece.style.height = `${pieceHeight}px`;
            piece.style.backgroundImage = `url(${canvas.toDataURL()})`;
            piece.style.backgroundSize = 'cover';

            // 3. 각 조각의 정답 위치를 dataset에 저장해 둡니다.
            piece.dataset.correctX = `${x * pieceWidth}`;
            piece.dataset.correctY = `${y * pieceHeight}`;
            piece.dataset.col = x; // 열 인덱스 저장
            piece.dataset.row = y; // 행 인덱스 저장

            pieces.push(piece);
        }
    }

    // 4. 조각들을 무작위로 섞고 화면에 표시합니다.
    shuffleAndPlacePieces();
}

// 조각 수에 따라 그리드 크기를 정하는 함수
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

// 조각들을 섞고 배치하는 함수
function shuffleAndPlacePieces() {
    pieces.sort(() => Math.random() - 0.5);

    pieces.forEach((piece, index) => {
        const containerRect = piecesContainer.getBoundingClientRect();
        const maxX = Math.max(0, containerRect.width - pieceWidth);
        const maxY = Math.max(0, containerRect.height - pieceHeight);

        piece.style.left = `${Math.random() * maxX}px`;
        piece.style.top = `${Math.random() * maxY}px`;
        piece.style.zIndex = index;

        piecesContainer.appendChild(piece);
        addDragAndDrop(piece);
    });
}

function addDragAndDrop(piece) {
    let isDragging = false;
    let offsetX, offsetY;

    // 마우스와 터치 이벤트 모두 지원
    const startEvents = ['mousedown', 'touchstart'];
    const moveEvents = ['mousemove', 'touchmove'];
    const endEvents = ['mouseup', 'touchend'];

    function getEventPos(e) {
        return e.type.includes('touch') ?
            { x: e.touches[0].clientX, y: e.touches[0].clientY } :
            { x: e.clientX, y: e.clientY };
    }

    startEvents.forEach(eventType => {
        piece.addEventListener(eventType, (e) => {
            e.preventDefault();
            const pos = getEventPos(e);
            isDragging = true;

            offsetX = pos.x - piece.offsetLeft;
            offsetY = pos.y - piece.offsetTop;

            piece.style.zIndex = 1000;
            piecesContainer.appendChild(piece);
        });
    });

    moveEvents.forEach(eventType => {
        document.addEventListener(eventType, (e) => {
            if (!isDragging) return;
            e.preventDefault();

            const pos = getEventPos(e);
            piece.style.left = `${pos.x - offsetX}px`;
            piece.style.top = `${pos.y - offsetY}px`;
        });
    });

    endEvents.forEach(eventType => {
        document.addEventListener(eventType, (e) => {
            if (!isDragging) return;
            isDragging = false;
            piece.style.zIndex = 1;

            // 정답 위치 확인 및 스냅
            const pieceRect = piece.getBoundingClientRect();
            const containerRect = puzzleContainer.getBoundingClientRect();
            const correctX = parseFloat(piece.dataset.correctX) + containerRect.left;
            const correctY = parseFloat(piece.dataset.correctY) + containerRect.top;

            const tolerance = Math.min(30, Math.min(pieceWidth, pieceHeight) * 0.3);

            if (Math.abs(pieceRect.left - correctX) < tolerance &&
                Math.abs(pieceRect.top - correctY) < tolerance) {

                piece.style.left = `${parseFloat(piece.dataset.correctX)}px`;
                piece.style.top = `${parseFloat(piece.dataset.correctY)}px`;

                piece.classList.add('snapped');
                puzzleContainer.appendChild(piece);

                completedCount++;
                updateProgress();
                checkCompletion();
            }
        });
    });
}

// 진행률 업데이트
function updateProgress() {
    document.getElementById('completedPieces').textContent = completedCount;
    const total = parseInt(document.getElementById('totalPieces').textContent);
    const percent = total > 0 ? Math.round((completedCount / total) * 100) : 0;
    document.getElementById('progressPercent').textContent = percent;
}

// 모든 조각이 맞춰졌는지 확인하는 함수
function checkCompletion() {
    if (puzzleContainer.children.length === pieces.length) {
        stopTimer();
        setTimeout(() => {
            showCompletionMessage();
        }, 500);
    }
}

// 타이머 관련 함수들
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

// UI 헬퍼 함수들
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 5000);
}

function showSuccess(message) {
    // 성공 메시지는 에러 메시지 스타일을 재사용하되 색상만 변경
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    errorMessage.style.background = '#4CAF50';
    setTimeout(() => {
        errorMessage.style.display = 'none';
        errorMessage.style.background = '#f44336';
    }, 3000);
}

function showLoading() {
    loadingMessage.style.display = 'block';
}

function hideLoading() {
    loadingMessage.style.display = 'none';
}

function enableDifficultyButtons() {
    document.querySelectorAll('.difficulty-controls button').forEach(btn => {
        btn.disabled = false;
    });
}

function disableDifficultyButtons() {
    document.querySelectorAll('.difficulty-controls button').forEach(btn => {
        btn.disabled = true;
    });
}

function showGameInfo() {
    gameInfo.classList.add('show');
}

function hideGameInfo() {
    gameInfo.classList.remove('show');
}

function showCompletionMessage() {
    const finalTime = document.getElementById('gameTime').textContent;
    document.getElementById('finalTime').textContent = finalTime;
    completionMessage.classList.add('show');
}

function hideCompletionMessage() {
    completionMessage.classList.remove('show');
}

// 페이지 로드 시 첫 번째 프리셋 이미지 자동 선택
window.addEventListener('load', () => {
    const firstPreset = document.querySelector('.preset-image');
    if (firstPreset) {
        firstPreset.click();
    }
});

// 창 크기 변경 시 반응형 조정
window.addEventListener('resize', () => {
    if (currentImageSrc && puzzleWidth && puzzleHeight) {
        // 현재 진행 중인 게임이 있다면 크기만 조정
        const maxWidth = Math.min(600, window.innerWidth * 0.8);
        const maxHeight = Math.min(450, window.innerHeight * 0.4);

        const ratio = Math.min(maxWidth / image.width, maxHeight / image.height);
        const newPuzzleWidth = Math.floor(image.width * ratio);
        const newPuzzleHeight = Math.floor(image.height * ratio);

        puzzleContainer.style.width = `${newPuzzleWidth}px`;
        puzzleContainer.style.height = `${newPuzzleHeight}px`;
        piecesContainer.style.width = `${newPuzzleWidth}px`;
    }
});

// 디바운스 함수: 이벤트가 연속으로 발생할 때 마지막 이벤트만 처리하여 성능을 최적화합니다.
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function handleResize() {
    if (!currentImageSrc) return; // 이미지가 없으면 실행하지 않음

    // 1. 퍼즐 컨테이너의 최적 크기를 다시 계산
    calculateOptimalSize();

    // 2. 컨테이너들 크기 업데이트
    puzzleContainer.style.width = `${puzzleWidth}px`;
    puzzleContainer.style.height = `${puzzleHeight}px`;
    piecesContainer.style.width = `${puzzleWidth}px`;
    piecesContainer.style.minHeight = `${Math.max(400, puzzleHeight * 0.7)}px`;

    // 게임이 시작된 경우에만 조각 크기 및 위치 재조정
    if (pieces.length > 0) {
        // 3. 조각의 새 너비와 높이 계산
        pieceWidth = puzzleWidth / gridCols;
        pieceHeight = puzzleHeight / gridRows;

        // 4. 모든 조각의 크기와 위치 업데이트
        pieces.forEach(piece => {
            piece.style.width = `${pieceWidth}px`;
            piece.style.height = `${pieceHeight}px`;

            // 만약 조각이 이미 퍼즐 판에 맞춰진 상태('snapped')라면,
            // 새 크기에 맞게 위치도 다시 계산해줍니다.
            if (piece.classList.contains('snapped')) {
                 // 저장된 행/열 인덱스로 새 위치를 정확히 계산
                const newLeft = piece.dataset.col * newPieceWidth;
                const newTop = piece.dataset.row * newPieceHeight;
                piece.style.left = `${newLeft}px`;
                piece.style.top = `${newTop}px`;
            }
        });
    }
}


// 창 크기 변경 시 반응형 조정 (디바운스 적용)
window.addEventListener('resize', debounce(handleResize, 250)); // 250ms 간격으로 실행

// 페이지 로드 시 첫 번째 프리셋 이미지 자동 선택
window.addEventListener('load', () => {
    const firstPreset = document.querySelector('.preset-image-container');
    if (firstPreset) {
        firstPreset.click();
    }
});

document.querySelectorAll('.difficulty-controls button').forEach(button => {
    button.addEventListener('click', () => {
        const pieceCount = parseInt(button.dataset.difficulty);
        startGame(pieceCount);
    });
});

document.getElementById('closeCompletionMessage').addEventListener('click', hideCompletionMessage);