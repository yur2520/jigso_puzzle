import ColorThief from 'colorthief';
import './styles.css';
const snapSound = new Audio(require('./sounds/snap.mp3').default);
console.log('사운드 파일 소스:', snapSound.src); 


const imagesContext = require.context('./images', false, /\.(png|jpeg)$/);
const imageDatabase = {};

const titleMap = {
    'puzzle-image': '꿈꾸는 산',
    'cake': '딸기 케이크',
    'autumn': '가을의 여유',
    'sea_watercolor': '바다와 해변',
    'hotcake': '핫케이크',
    'moonlight_dream': '꿈꾸는 밤',
    'pome': '강아지유화',
    'cindy': '신데렐라',
    'icecream': '아이스크림',
    'macaron': '마카롱',
    'snow_white': '백설공주',
    'books': '서재',
};

imagesContext.keys().forEach(filePath => {
  // './macaron.jpeg' -> 'macaron'
  const id = filePath.replace('./', '').split('.')[0]; 
  const imageUrl = imagesContext(filePath);
  
  imageDatabase[id] = {
    url: imageUrl,
    title: titleMap[id] || '제목 없음'
  };
});


// 외부 URL은 여전히 별도로 추가해줍니다.
imageDatabase['flowers1'] = {
    url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop&crop=center',
    title: '화려한 꽃'
};

document.addEventListener('DOMContentLoaded', () => {
   
    // 이미지를 담을 부모 컨테이너
    const presetImagesContainer = document.querySelector('.preset-images');

    // imageDatabase 객체를 순회하며 HTML 요소를 생성하고 추가합니다.
    for (const imageId in imageDatabase) {
        if (imageDatabase.hasOwnProperty(imageId)) {
            const imageData = imageDatabase[imageId];

            // 1. div.preset-image-container 요소 생성
            const containerDiv = document.createElement('div');
            containerDiv.classList.add('preset-image-container');
            containerDiv.dataset.image = imageId;

            // 2. img.preset-image 요소 생성
            const imgElement = document.createElement('img');
            imgElement.classList.add('preset-image');
            imgElement.src = imageData.url;
            imgElement.alt = imageData.title;

            // 3. 자식 요소를 부모에 추가
            containerDiv.appendChild(imgElement);
            presetImagesContainer.appendChild(containerDiv);
        }
    }
     setupCarousel(); 
    const firstPreset = document.querySelector('.preset-image-container');
    if (firstPreset) {
        firstPreset.click();
    }
});




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

    currentImageRatio = image.naturalWidth / image.naturalHeight;
    calculateOptimalSize();

    // 퍼즐 판의 크기 설정
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
    const palette = colorThief.getPalette(image, 2); // 2개의 주요 테마색 추출

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
        showError('이미지를 먼저 선택해주세요.');
        return;
    }

    resetGame();
    showGameInfo();
    startTimer();

    const grid = getGridSize(pieceCount);
    const cols = grid.cols;
    const rows = grid.rows;

    gridCols = cols;
    gridRows = rows;

    pieceWidth = puzzleWidth / cols;
    pieceHeight = puzzleHeight / rows;

    document.getElementById('totalPieces').textContent = pieceCount;
    updateProgress();

    // --- 👇 이미지 분할 로직 시작 ---

    // 1. 보이지 않는 캔버스 생성
    const canvas = document.createElement('canvas');
    canvas.width = puzzleWidth;
    canvas.height = puzzleHeight;
    const context = canvas.getContext('2d');
    
    // 2. 캔버스에 원본 이미지를 그림
    context.drawImage(image, 0, 0, puzzleWidth, puzzleHeight);

    // 3. 각 조각을 순회하며 작은 이미지 생성
    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            // 캔버스의 특정 영역에서 이미지 데이터를 추출 (data URL 형식)
            const pieceCanvas = document.createElement('canvas');
            pieceCanvas.width = pieceWidth;
            pieceCanvas.height = pieceHeight;
            const pieceContext = pieceCanvas.getContext('2d');
            
            // 원본 캔버스에서 조각만큼의 이미지를 복사해 옴
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
            
            // 추출한 이미지 데이터를 URL로 변환
            const pieceImageUrl = pieceCanvas.toDataURL();

            const piece = document.createElement('div');
            piece.className = 'puzzle-piece';
            piece.style.width = `${pieceWidth}px`;
            piece.style.height = `${pieceHeight}px`;

            // 4. 이제 각 조각은 자신만의 작은 이미지를 배경으로 가짐
            piece.style.backgroundImage = `url(${pieceImageUrl})`;
            
            // 더 이상 background-position과 background-size는 필요 없음
            piece.style.backgroundSize = 'cover'; 

            piece.dataset.correctX = `${x * pieceWidth}`;
            piece.dataset.correctY = `${y * pieceHeight}`;
            
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

    const fragment = document.createDocumentFragment();

    pieces.forEach((piece, index) => {
        const containerRect = piecesContainer.getBoundingClientRect();
        const maxX = Math.max(0, containerRect.width - pieceWidth);
        const maxY = Math.max(0, containerRect.height - pieceHeight);

       /* piece.style.left = `${Math.random() * maxX}px`;
        piece.style.top = `${Math.random() * maxY}px`;*/
        
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;
        piece.style.transform = `translate(${randomX}px, ${randomY}px)`;
        piece.dataset.currentX = randomX;
        piece.dataset.currentY = randomY;
        
        piece.style.zIndex = index; 

fragment.appendChild(piece);
        // piecesContainer.appendChild(piece);
        addDragAndDrop(piece);

        piecesContainer.appendChild(fragment);
    });
}

function addDragAndDrop(piece) {
    let isDragging = false;
    let dragStartX, dragStartY;
    let latestPos = { x: 0, y: 0 };
    let animationFrameId = null;


    const startEvents = ['mousedown', 'touchstart'];
    const moveEvents = ['mousemove', 'touchmove'];
    const endEvents = ['mouseup', 'touchend'];

    function getEventPos(e) {
        return e.type.includes('touch') ?
            { x: e.touches[0].clientX, y: e.touches[0].clientY } :
            { x: e.clientX, y: e.clientY };
    }

     function render() {
        if (!isDragging) return;

        const newX = latestPos.x - dragStartX;
        const newY = latestPos.y - dragStartY;

        piece.style.transform = `translate(${newX}px, ${newY}px)`;
        
        // 다음 프레임에 render 함수를 다시 호출하도록 예약
        animationFrameId = requestAnimationFrame(render);
    }

     function handleMove(e) {
        if (!isDragging) return;
        e.preventDefault();
         latestPos = getEventPos(e); 
       
    }

     function handleEnd(e) {
        if (!isDragging) return;
        isDragging = false;

        cancelAnimationFrame(animationFrameId); 

        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', handleEnd);


        piece.style.zIndex = ''; // z-index 초기화

        // 퍼즐판과 조각 컨테이너의 경계 정보 가져오기
        const puzzleRect = puzzleContainer.getBoundingClientRect();
        //const piecesRect = piecesContainer.getBoundingClientRect();
        const currentRect = piece.getBoundingClientRect();

        // 정답 위치 (퍼즐판 기준)
        const correctX = parseFloat(piece.dataset.correctX);
        const correctY = parseFloat(piece.dataset.correctY);

        const finalX = latestPos.x - dragStartX;
        const finalY = latestPos.y - dragStartY;
        piece.style.transform = `translate(${finalX}px, ${finalY}px)`;

        // 현재 조각 위치 (퍼즐판 기준 상대 좌표로 변환)
        const currentRelativeX = currentRect.left - puzzleRect.left;
        const currentRelativeY = currentRect.top - puzzleRect.top;


        const tolerance = Math.min(30, pieceWidth * 0.3); // 허용 오차

        // 정답 위치와 현재 위치 비교
        if (Math.abs(currentRelativeX - correctX) < tolerance &&
            Math.abs(currentRelativeY - correctY) < tolerance) {

            // 정답 위치에 스냅
            piece.style.transform = `translate(${correctX}px, ${correctY}px)`;
            piece.classList.add('snapped');
            puzzleContainer.appendChild(piece); // 부모를 퍼즐판으로 변경

            snapSound.currentTime = 0; // 혹시 소리가 겹칠 경우를 대비해 처음부터 재생
            snapSound.play();

            // 드래그 이벤트 리스너 제거하여 고정
            startEvents.forEach(ev => piece.removeEventListener(ev, handleStart));

            completedCount++;
            updateProgress();
            checkCompletion();
        }
    }


    function handleStart(e) {
        e.preventDefault();
        const pos = getEventPos(e);
        isDragging = true;

         latestPos = pos; 

        // 조각을 piecesContainer로 다시 옮겨 드래그 시작
        if (piece.parentElement !== piecesContainer) {
            piecesContainer.appendChild(piece);
        }

        // 현재 transform 값을 가져와서 드래그 시작점으로 설정
        const currentTransform = new DOMMatrix(getComputedStyle(piece).transform);
        dragStartX = pos.x - currentTransform.m41;
        dragStartY = pos.y - currentTransform.m42;


        piece.style.zIndex = 1000; // 드래그하는 조각을 맨 위로

        animationFrameId = requestAnimationFrame(render);

        moveEvents.forEach(ev => document.addEventListener(ev, handleMove));
        endEvents.forEach(ev => document.addEventListener(ev, handleEnd));
    }
    // --- 처음에 조각에 '시작' 이벤트 리스너만 붙여줌 ---
    startEvents.forEach(eventType => {
        piece.addEventListener(eventType, handleStart);
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
    setTimeout(() => {
        errorMessage.style.display = 'none';

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

             piece.style.backgroundSize = `${puzzleWidth}px ${puzzleHeight}px`;


            if (piece.classList.contains('snapped')) {
               const newLeft = piece.dataset.col * pieceWidth;
    const newTop = piece.dataset.row * pieceHeight;
    piece.style.transform = `translate(${newLeft}px, ${newTop}px)`;
            }
            else {
                // 스냅되지 않은 조각의 위치도 re-calculate 필요
                const currentX = parseFloat(piece.dataset.currentX) * (puzzleWidth / oldPuzzleWidth);
                const currentY = parseFloat(piece.dataset.currentY) * (puzzleHeight / oldPuzzleHeight);
                piece.style.transform = `translate(${currentX}px, ${currentY}px)`;
                piece.dataset.currentX = currentX;
                piece.dataset.currentY = currentY;
            }
        });
    }
}


// 창 크기 변경 시 반응형 조정 (디바운스 적용)
window.addEventListener('resize', debounce(handleResize, 250)); // 250ms 간격으로 실행

document.querySelector('.preset-images').addEventListener('click', (e) => {
    const container = e.target.closest('.preset-image-container');
    if (!container) return; // 올바른 요소를 클릭하지 않았다면 종료

    const imageKey = container.dataset.image;
    const imageData = imageDatabase[imageKey];

    if (!imageData) {
        showError('이미지 정보를 찾을 수 없습니다.');
        return;
    }

    document.querySelectorAll('.preset-image').forEach(img => img.classList.remove('selected'));
    container.querySelector('.preset-image').classList.add('selected');

    showLoading();
    loadImage(imageData.url, imageData.title);
});

document.querySelectorAll('.difficulty-controls button').forEach(button => {
    button.addEventListener('click', () => {
        const pieceCount = parseInt(button.dataset.difficulty);
        startGame(pieceCount);
    });
});

document.getElementById('closeCompletionMessage').addEventListener('click', hideCompletionMessage);


// --- ✨ 새로운 캐러셀 기능 함수 ---
function setupCarousel() {
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