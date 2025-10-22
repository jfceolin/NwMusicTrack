const fs = require('fs');
const path = require('path');

console.log('🔨 Building for Vercel...');

// Copiar main.js da pasta dist para a raiz e corrigir sintaxe CommonJS
try {
  const distMainPath = path.join(__dirname, 'dist', 'main.js');
  const rootMainPath = path.join(__dirname, 'main.js');
  
  if (fs.existsSync(distMainPath)) {
    // Ler o arquivo compilado
    let content = fs.readFileSync(distMainPath, 'utf8');
    
    // Remover sintaxe CommonJS problemática
    content = content.replace(/^"use strict";\s*\n?/, '');
    content = content.replace(/^Object\.defineProperty\(exports, "__esModule", \{ value: true \}\);\s*\n?/, '');
    content = content.replace(/^exports\.__esModule = true;\s*\n?/, '');
    
    // Escrever o arquivo corrigido
    fs.writeFileSync(rootMainPath, content, 'utf8');
    console.log('✅ Copied and fixed dist/main.js to main.js');
  } else {
    console.error('❌ dist/main.js not found');
  }
} catch (error) {
  console.error('❌ Error copying main.js:', error);
}

// Copiar style.css da pasta src/styles para a raiz
try {
  const srcStylePath = path.join(__dirname, 'src', 'styles', 'style.css');
  const rootStylePath = path.join(__dirname, 'style.css');
  
  if (fs.existsSync(srcStylePath)) {
    fs.copyFileSync(srcStylePath, rootStylePath);
    console.log('✅ Copied src/styles/style.css to style.css');
  } else {
    console.log('ℹ️ src/styles/style.css not found, assuming style.css already exists');
  }
} catch (error) {
  console.error('❌ Error copying style.css:', error);
}

console.log('🎉 Build completed!');
