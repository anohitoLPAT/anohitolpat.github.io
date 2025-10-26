// WebGLのレンダリングコンテキストを取得する関数
function initWebGL(canvas) {
    let gl = null;
    try {
        // 標準のコンテキスト名から取得を試みる
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    } catch (e) {
        // エラー処理
    }

    if (!gl) {
        alert("お使いのブラウザはWebGLに対応していません。");
        return null;
    }

    return gl;
}

// ゲームの初期化
const canvas = document.getElementById("gameCanvas");
const gl = initWebGL(canvas);

if (gl) {
    // 描画領域のクリア色を設定 (例: 黒)
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // 描画バッファをクリア（クリア色でキャンバス全体を塗りつぶす）
    gl.clear(gl.COLOR_BUFFER_BIT);

    console.log("WebGLコンテキストの初期化に成功しました！");
    // ここからシェーダーの読み込みやゲームループの設定に進みます。
}
