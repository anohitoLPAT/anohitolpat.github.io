const http = require('http');
const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, 'pages');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readdir(PAGES_DIR, (err, files) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('サーバーエラー: ディレクトリを読み込めません。');
                return;
            }

            const htmlFiles = files.filter(file => path.extname(file) === '.html');

            let pageListHtml = htmlFiles.map(file => {
                const pageName = file.replace('.html', '');
                return `<li><a href="/${pageName}">${pageName}</a></li>`;
            }).join('');

            const responseHtml = `
                <!DOCTYPE html>
                <html lang="ja">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>ページ一覧</title>
                    <style>
                        body { font-family: sans-serif; margin: 2em; }
                        h1 { color: #333; }
                        ul { list-style-type: none; padding: 0; }
                        li { margin-bottom: 0.5em; }
                        a { text-decoration: none; color: #007BFF; font-size: 1.2em; }
                        a:hover { text-decoration: underline; }
                    </style>
                </head>
                <body>
                    <h1>利用可能なページ</h1>
                    <ul>
                        ${pageListHtml}
                    </ul>
                </body>
                </html>
            `;
            
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(responseHtml);
        });
    } else {
        const filePath = path.join(PAGES_DIR, req.url + '.html');
        
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('ページが見つかりません。');
                return;
            }

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`サーバーが http://localhost:${PORT} で起動しました。`);
});
