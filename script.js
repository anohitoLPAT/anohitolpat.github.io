document.addEventListener('DOMContentLoaded', () => {
    // スクロール時のフェードインアニメーション
    const featureItems = document.querySelectorAll('.feature-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 要素が見えたら'visible'クラスを追加
                entry.target.classList.add('visible');
                // 一度表示されたら監視を停止
                observer.unobserve(entry.target);
            }
        });
    }, {
        // ビューポートの80%が見えたら発火
        threshold: 0.2 
    });

    featureItems.forEach(item => {
        observer.observe(item);
    });

    console.log('script.js が正常に読み込まれ、アニメーションが設定されました！');
});
