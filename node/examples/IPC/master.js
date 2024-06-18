const { fork } = require('child_process');

// 创建一个子进程
const child = fork('./child.js');

// 向子进程发送一个任务请求
child.send({ task: 'fetch data' });

// 监听子进程发送回来的消息
child.on('message', (message) => {
    console.log('从子进程收到的数据:', message.data);
});
