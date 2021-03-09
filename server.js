import express, { json } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';

const server = express();
server.use(helmet());
server.use(cors());
server.use(json());
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
import authRouter from './authOperations/authRouter';
import userRouter from './crudOperations/userOperations/userRouter';
import storeRouter from './crudOperations/storeOperations/storeRouter';
import orderRouter from './crudOperations/orderOperations/orderRouter';
import quoteRouter from './crudOperations/quoteOperations/quoteRouter';
import designsRouter from './crudOperations/designOperations/designsRouter';
import productRouter from './crudOperations/productOperations/productRouter';
import paymentRouter from './crudOperations/paymentOperations/paymentRouter';

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

export default server;
