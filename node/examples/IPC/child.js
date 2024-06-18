
// 在child.js中
// 处理父进程发送过来的任务请求，并将处理结果发送回父进程
process.on('message', (message) => {
    if (message.task === 'fetch data') {
        // 假设这里是拉取数据的代码
        let data = '这里是数据';
        process.send({ data: data });
    }
});
