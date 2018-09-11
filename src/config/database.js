module.exports = {
    port: process.env.PORT || 8081,
    development: {
        username: 'dramaspost',
        password: null,
        database: 'dramaspost',
        host: 'localhost',
        dialect: 'postgresql'
    },
    production: {
        username: process.env.DB_USER || 'dramaspost',
        password: process.env.DB_PASS || null,
        database: process.env.DB_NAME || 'dramaspost',
        host: process.env.HOST || 'localhost',
        dialect: process.env.DIALECT || 'postgresql'
    }
};
