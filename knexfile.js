module.exports = {
    development: {
        client: 'pg',
        connection:
            'postgres://ciauritxxtedmw:4cb072a8e631aa9cff9ebc520b42e48c915d34a3877b5cb18d51953d11aee37c@ec2-23-21-4-176.compute-1.amazonaws.com:5432/de1jsfsi5ehe92',
        migrations: {
            directory: './databaseOperations/migrations',
        },
        seeds: {
            directory: './databaseOperations/seeds',
        },
        useNullAsDefault: true,
    },
    ////////////////////////////////////////////////////////

    testing: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        pool: {
            min: 2,
            max: 10,
        },
        useNullAsDefault: true,
        migrations: {
            directory: './databaseOperations/migrations',
        },
        seeds: {
            directory: './databaseOperations/seeds',
        },
    },
    ////////////////////////////////////////////////////////

    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        ssl: true,
        pool: {
            min: 2,
            max: 10,
        },
        useNullAsDefault: true,
        migrations: {
            directory: './databaseOperations/migrations',
        },
        seeds: {
            directory: './databaseOperations/seeds',
        },
    },
};
