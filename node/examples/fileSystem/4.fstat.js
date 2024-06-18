const fs = require('fs');
fs.open('../demo.txt', 'r+', (err, fd) => {
    // 获取文件状态
    fs.fstat(fd, (statErr, stats) => {
        if (statErr) throw statErr;
        console.log(`文件大小：${stats.size} 字节`);
    });
})