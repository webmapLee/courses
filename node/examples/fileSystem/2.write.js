const fs = require('fs');
fs.open('../demo.txt', 'w+', (err, fd) => {
    if (err) {
        if (err.code === 'EEXIST') {
            console.warn('文件已存在');
        }
        throw err;
    }

    // 写入数据到文件
    const dataToWrite = 'Hello, World!';
    fs.write(fd, dataToWrite, (writeErr) => {
        if (writeErr) throw writeErr;

        // 关闭文件
        fs.close(fd, (closeErr) => {
            if (closeErr) throw closeErr;
            console.log('文件已成功写入并关闭');
        });
    });
})

