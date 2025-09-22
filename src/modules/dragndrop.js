// 필요한 값들을 인자로 받아 처리합니다. (의존성 주입)
export function addDragAndDrop(piece, config) {
    const { 
        puzzleContainer, 
        piecesContainer, 
        snapSound, 
        pieceWidth, 
        onSnap // 조각이 맞춰졌을 때 호출할 콜백 함수
    } = config;

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

            if (onSnap) {
            onSnap();
        }
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