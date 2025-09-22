import * as game from './game.js';
import * as ui from './ui.js';
import { debounce } from './utils.js';


export function initialize() {
    
    
    const imagesContext = require.context('../images', false, /\.(png|jpeg)$/);
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
        const id = filePath.replace('./', '').split('.')[0];
        const imageUrl = imagesContext(filePath);
        imageDatabase[id] = { url: imageUrl, title: titleMap[id] || '제목 없음' };
    });


    // 외부 URL은 여전히 별도로 추가해줍니다.
    imageDatabase['flowers1'] = {
        url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&h=600&fit=crop&crop=center',
        title: '화려한 꽃'
    };

    // DOM이 로드되면 캐러셀을 만들고 첫 이미지를 로드합니다.
    document.addEventListener('DOMContentLoaded', () => {
        const presetImagesContainer = document.querySelector('.preset-images');
        for (const imageId in imageDatabase) {
            const imageData = imageDatabase[imageId];
            const containerDiv = document.createElement('div');
            containerDiv.classList.add('preset-image-container');
            containerDiv.dataset.image = imageId;
            const imgElement = document.createElement('img');
            imgElement.classList.add('preset-image');
            imgElement.src = imageData.url;
            imgElement.alt = imageData.title;
            containerDiv.appendChild(imgElement);
            presetImagesContainer.appendChild(containerDiv);
        }
        
        ui.setupCarousel(); // ui 모듈에 캐러셀 설정을 요청
        
        const firstPreset = document.querySelector('.preset-image-container');
        if (firstPreset) {
            // 첫 이미지를 클릭하는 대신, 직접 game 모듈의 함수를 호출합니다.
            const firstImageKey = firstPreset.dataset.image;
            const firstImageData = imageDatabase[firstImageKey];
            ui.showLoading();
            game.handleImageLoad(firstImageData.url, firstImageData.title);
        }
    });

    // 이미지 선택 이벤트
    document.querySelector('.preset-images').addEventListener('click', (e) => {
        const container = e.target.closest('.preset-image-container');
        if (!container) return;

        const imageKey = container.dataset.image;
        const imageData = imageDatabase[imageKey];
        if (!imageData) {
            ui.showError('이미지 정보를 찾을 수 없습니다.');
            return;
        }

        document.querySelectorAll('.preset-image').forEach(img => img.classList.remove('selected'));
        container.querySelector('.preset-image').classList.add('selected');

        ui.showLoading();
        // game 모듈에 이미지 로드를 요청합니다.
        game.handleImageLoad(imageData.url, imageData.title);
    });

    // 난이도 선택 (게임 시작) 이벤트
    document.querySelectorAll('.difficulty-controls button').forEach(button => {
        button.addEventListener('click', () => {
            const pieceCount = parseInt(button.dataset.difficulty);
            // game 모듈에 게임 시작을 요청합니다.
            game.startGame(pieceCount);
        });
    });

    // 완료 메시지 닫기 이벤트
    document.getElementById('closeCompletionMessage').addEventListener('click', ui.hideCompletionMessage);

    // 창 크기 변경 이벤트
    window.addEventListener('resize', debounce(game.handleResize, 250));
}


