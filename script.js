// ウェブサイトのJavaScriptファイル
// 現在はシンプルな機能を想定しているため、コードは最小限です。
// 将来的に、以下のような機能を追加できます。

// 例1: スクロール時に要素をフェードインさせる
// document.addEventListener('DOMContentLoaded', () => {
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 observer.unobserve(entry.target);
//             }
//         });
//     });
// 
//     document.querySelectorAll('.feature-item').forEach(item => {
//         observer.observe(item);
//     });
// });

// 例2: ダークモード/ライトモードの切り替え機能
// const toggleButton = document.getElementById('theme-toggle');
// toggleButton.addEventListener('click', () => {
//     document.body.classList.toggle('dark-mode');
// });

// コンソールにメッセージを出力して、スクリプトが正しく読み込まれているか確認できます
console.log('script.js が正常に読み込まれました！');
