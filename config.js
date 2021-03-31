module.exports = {
    api: {
        port: process.env.PORT || 4001
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'administrador',
        password: process.env.MYSQL_PASS || '1234',
        database: process.env.MYSQL_DATABASE || 'todo'
    }
}