import server from './server';
import { config } from 'dotenv';
import colors from 'colors';

////setting up environmental variables////
config({ path: './config/config.env' });

const PORT = process.env.PORT || 4000;

const app = server.listen(
    PORT,
    console.log(
        `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
            .yellow.bold
    )
);



process.on('unhandledRejection', function (reason, promise) {
    console.error('Unhandled rejection', { reason: reason, promise: promise });
});
