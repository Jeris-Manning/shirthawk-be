const server = require('./server');
const { development } = require('./knexfile');

////setting up environmental variables////
const envo = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 5432;

server.listen(
    PORT,
    console.log(`Server is running in ${envo} mode on port ${PORT}`)
);

process.on('unhandledRejection', function (reason, promise) {
    console.error('Unhandled rejection', { reason: reason, promise: promise });
});
