// dragndrop.js (top/left 버전)

export function addDragAndDrop(piece, config) {
    const { puzzleContainer, piecesContainer, snapSound, onSnap } = config;

    let isDragging = false;
    let offsetX, offsetY;

    const startEvents = ['mousedown', 'touchstart'];
    const moveEvents = ['mousemove', 'touchmove'];
    const endEvents = ['mouseup', 'touchend'];

    function getEventPos(e) {
        return e.type.includes('touch') ? e.touches[0] : e;
    }

    function handleStart(e) {
        e.preventDefault();
        isDragging = true;
        
        const pos = getEventPos(e);
        const rect = piece.getBoundingClientRect();

        offsetX = pos.clientX - rect.left;
        offsetY = pos.clientY - rect.top;

        piece.style.zIndex = 1000;
        document.body.classList.add('is-dragging-body');
        piece.classList.add('is-dragging');


        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleEnd);
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('touchend', handleEnd);
    }

    function handleMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        
        const pos = getEventPos(e);
        const parentRect = piecesContainer.getBoundingClientRect();

        let newX = pos.clientX - parentRect.left - offsetX;
        let newY = pos.clientY - parentRect.top - offsetY;

        piece.style.left = `${newX}px`;
        piece.style.top = `${newY}px`;
    }

    function handleEnd(e) {
        if (!isDragging) return;
        isDragging = false;

        document.removeEventListener('mousemove', handleMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleMove);
        document.removeEventListener('touchend', handleEnd);
        
        document.body.classList.remove('is-dragging-body');
        piece.classList.remove('is-dragging');
        piece.style.zIndex = '';

        const puzzleRect = puzzleContainer.getBoundingClientRect();
        const pieceRect = piece.getBoundingClientRect();

        const correctX = parseFloat(piece.dataset.correctX);
        const correctY = parseFloat(piece.dataset.correctY);
        
        const currentRelativeX = pieceRect.left - puzzleRect.left;
        const currentRelativeY = pieceRect.top - puzzleRect.top;

        const tolerance = 30;

        if (Math.abs(currentRelativeX - correctX) < tolerance &&
            Math.abs(currentRelativeY - correctY) < tolerance) {
            
            // 정답 위치에 스냅
            piece.style.left = `${correctX}px`;
            piece.style.top = `${correctY}px`;
            piece.classList.add('snapped');
            puzzleContainer.appendChild(piece);

            snapSound.currentTime = 0;
            snapSound.play();

            startEvents.forEach(ev => piece.removeEventListener(ev, handleStart));

            if (onSnap) {
                onSnap();
            }
        }
    }

    startEvents.forEach(eventType => {
        piece.addEventListener(eventType, handleStart);
    });
}