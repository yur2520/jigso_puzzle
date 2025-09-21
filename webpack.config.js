const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // 'production' 또는 'development'
  entry: './src/index.js', // 번들링을 시작할 파일 (진입점)
  output: {
    filename: 'bundle.js', // 번들링된 파일 이름
    path: path.resolve(__dirname, 'dist'), // 번들링된 파일이 저장될 경로
    clean: true, 
  },
  plugins: [
    new HtmlWebpackPlugin({ // ❸ 플러그인 추가
      template: './src/index.html', // ❹ 템플릿으로 사용할 파일 지정
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i, // 이미지 파일에 대한 규칙
        type: 'asset/resource', // 파일을 dist 폴더로 복사하고 URL을 반환
      },
       {
        test: /\.css$/, // .css 확장자를 가진 파일을 찾음
        use: ['style-loader', 'css-loader'], // 적용할 로더 배열
      },
       {
        test: /\.(mp3|wav|ogg)$/i, // .mp3, .wav, .ogg 확장자를 가진 파일을
        type: 'asset/resource'    // 별도의 파일로 처리하도록 설정합니다.
      },
    ],
  },
};