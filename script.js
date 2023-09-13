// ページが読み込まれたときに実行
window.onload = function () {
    // カウンターの初期値を取得
    let counter = localStorage.getItem("visitorCounter");
    
    // カウンターが保存されていない場合は初期値を設定
    if (counter === null) {
        counter = 0;
    } else {
        counter = parseInt(counter); // 文字列から数値に変換
    }

    // カウンターを更新して表示
    counter++;
    localStorage.setItem("visitorCounter", counter);
    document.getElementById("counter").innerText = counter;
};
