const fs = require('fs');

// 打开文件（异步方式）
//第二个参数代表文件系统标志，对于追加还是覆盖文件，文件存在是报错还是忽略的操作标志
//具体参考https://nodejs.org/api/fs.html#file-system-flags
//'wx'类似'w'，但如果路径存在则失败。

fs.open('demo.txt', 'w+', (err, fd) => {
    if (err) {
        if (err.code === 'EEXIST') {
            console.error('文件已存在');
            return;
        }
        throw err;
    }

});

