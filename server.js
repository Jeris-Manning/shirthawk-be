const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(
    morgan(function (tokens, req, res) {
        return [
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'),
            '-',
            tokens['response-time'](req, res),
            'ms',
        ].join(' ');
    })
);

//////    import Router files    //////
const authRouter = require('./authOperations/authRouter');
const userRouter = require('./crudOperations/userOperations/userRouter');
const storeRouter = require('./crudOperations/storeOperations/storeRouter');
const orderRouter = require('./crudOperations/orderOperations/orderRouter');
const quoteRouter = require('./crudOperations/quoteOperations/quoteRouter');
const designsRouter = require('./crudOperations/designOperations/designsRouter');
const productRouter = require('./crudOperations/productOperations/productRouter');
const paymentRouter = require('./crudOperations/paymentOperations/paymentRouter');

//  pass this in cors if having bad cors issues

// {
//   origin: true,
//   credentials: true
// }

//////    Use routers    ///////
server.use('/api/auth', authRouter);
server.use('/api/users', userRouter);
server.use('/api/stores', storeRouter);
server.use('/api/orders', orderRouter);
server.use('/api/quotes', quoteRouter);
server.use('/api/designs', designsRouter);
server.use('/api/products', productRouter);
server.use('/api/payments', paymentRouter);

//testing that the server works
server.get('/', (req, res) => {
    res.status(200).json({ status: 'Shirt Hawk is in the sky.' });
});

module.exports = server;
