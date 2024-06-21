const fs = require('fs').promises;
const path = require('path');

async function readdi(rootDir) {
    try {
        rootDir = rootDir || path.resolve(__dirname);
        const files = await fs.readdir(rootDir);
        walk(files, rootDir);
    } catch (error) {
        console.log(error);
    }
}

async function walk(files, root) {
    for(let file of files) {
        const fileFullPath = path.resolve(root, file);
        const stats = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue;
        if(/\.node_modules/g.test(fileFullPath)) continue;
        

        if(stats.isDirectory()) {
            readdi(fileFullPath);
            continue;
        }

        if(!/\.html$/g.test(fileFullPath)) continue;

        console.log(fileFullPath, stats.isDirectory());
    }
}

readdi('C:/Users/fabri/OneDrive/Documentos/CursoJsUdemy2');