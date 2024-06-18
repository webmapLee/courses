
const fs = require('fs');

// 打开文件（异步方式）
//第二个参数代表文件系统标志，对于追加还是覆盖文件，文件存在是报错还是忽略的操作标志
//具体参考https://nodejs.org/api/fs.html#file-system-flags
//'wx'类似'w'，但如果路径存在则失败。
fs.open('../demo.txt', 'r+', (err, fd) => {
    // 读取文件
    let buffer = new Buffer.alloc(1024);
    fs.read(fd, buffer, 0, buffer.length, null, (err, bytesRead, buffer) => {
        if (err) throw err;

        // 输出文件内容
        const content = buffer.toString('utf8', 0, bytesRead);
        console.log(content);

        // 关闭文件
        fs.close(fd, (err) => {
            if (err) throw err;
        });
    });
});

// 创建读取流，分块读取文件
const readStream = fs.createReadStream('../demo.txt', {
    highWaterMark: 2, //分块大小64kb，默认可读流是64kb，可写流是16kb
    encoding: 'utf8'
});
readStream.on('data', (chunk) => {
    console.log(`读取到的数据：${chunk}`);
});