const fs = require('fs');
fs.open('../demo.txt', 'r+', (err, fd) => {
    // 截断文件
    fs.ftruncate(fd, 5, (truncateErr) => {
        if (truncateErr) throw truncateErr;
        console.log('文件已截断为10个字节');
    });
})