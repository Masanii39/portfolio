// DOMContentLoadedイベントが発生したときに実行するスクリプト
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section'); // 全てのセクションを選択
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // セクションの50％が表示されたときにイベント
    };

    // セクションが表示されたときにアニメーション
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in'); // 表示されたセクションにfade-inクラスを追加
            } else {
                entry.target.classList.remove('fade-in'); // 表示されなくなったセクションからfade-inクラスを削除（これないとおかしくなる）
            }
        });
    }, options);

    // 各セクションを監視対象に追加
    sections.forEach(section => {
        observer.observe(section);
    });
});
