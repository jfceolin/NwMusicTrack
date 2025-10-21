import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';

const PORT = process.env.PORT || 8080;

// Mapeamento de tipos MIME
const mimeTypes: { [key: string]: string } = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    let filePath = '.' + req.url;
    
    // Se for a raiz, servir index.html
    if (filePath === './') {
        filePath = './index.html';
    }
    
    // Se não tiver extensão, assumir .html
    if (!path.extname(filePath)) {
        filePath += '.html';
    }
    
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeType = mimeTypes[extname] || 'application/octet-stream';
    
    fs.readFile(filePath, (error: NodeJS.ErrnoException | null, content: Buffer) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // Arquivo não encontrado
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(`
                    <html>
                        <head><title>404 - Arquivo não encontrado</title></head>
                        <body>
                            <h1>404 - Arquivo não encontrado</h1>
                            <p>O arquivo ${filePath} não foi encontrado.</p>
                            <a href="/">Voltar ao início</a>
                        </body>
                    </html>
                `, 'utf-8');
            } else {
                // Erro do servidor
                res.writeHead(500);
                res.end(`Erro do servidor: ${error.code}`);
            }
        } else {
            // Sucesso
            res.writeHead(200, { 'Content-Type': mimeType });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    console.log(`📁 Servindo arquivos do diretório: ${__dirname}`);
    console.log(`🎵 Aplicação de Músicas do New World`);
    console.log(`\nPressione Ctrl+C para parar o servidor`);
});
