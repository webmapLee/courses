const http = require('http');

const options = {
    hostname: 'localhost',
    port: 80,
    path: '/api/data',
    method: 'GET'
};
//http模块
const req = http.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log(data);
    });
});

req.on('error', (error) => {
    console.error(`Problem with request: ${error.message}`);
});

req.end();


//net模块
const net = require('net');
const server = net.createServer((socket) => {

    console.log('🚀🚀🚀🚀', socket._handle.fd);

    socket.on('error', (err) => {
        console.log(err);
    });
    socket.on('end', () => {
        console.log('client disconnected');
    })

    socket.on('data', (data) => {
        socket.write('hello');
    })
})

console.log('server')
server.listen(3000, () => {
    console.log('server listening on port 3000');
})