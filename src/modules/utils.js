// 이벤트가 연속으로 발생할 때 마지막 이벤트만 처리하여 성능을 최적화합니다.
export function debounce(func, wait) {
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

