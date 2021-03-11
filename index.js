const server = require('./server');
const dotenv = require('dotenv');
const colors = require('colors');

////setting up environmental variables////

const PORT = process.env.PORT || 5432;

server.listen(
    PORT,
    console.log(
        `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
            .yellow.bold
    )
);

process.on('unhandledRejection', function (reason, promise) {
    console.error('Unhandled rejection', { reason: reason, promise: promise });
});
