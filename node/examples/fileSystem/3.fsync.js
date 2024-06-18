const fs = require('fs');

// 异步打开文件
fs.open('../demo.txt', 'w+', (err, fd) => {
    if (err) {
        console.error('无法打开文件:', err);
        return;
    }

    // 写入数据到文件
    const data = 'Hello, world!';
    fs.write(fd, data, (writeErr) => {
        if (writeErr) {
            console.error('写入文件时出错:', writeErr);
            return;
        }

        // 使用 fsync 确保数据写入磁盘
        fs.fsync(fd, (fsyncErr) => {
            if (fsyncErr) {
                console.error('同步文件到磁盘时出错:', fsyncErr);
            } else {
                console.log('数据已成功同步到磁盘');
            }

            // 关闭文件描述符
            fs.close(fd, (closeErr) => {
                if (closeErr) {
                    console.error('关闭文件时出错:', closeErr);
                } else {
                    console.log('文件已成功关闭');
                }
            });
        });
    });
});