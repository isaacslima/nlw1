import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'databate.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    pool: { 
        min: 1, 
        max: 1, 
        disposeTimeout: 360000*1000, 
        idleTimeoutMillis: 360000*1000 
    },
    useNullAsDefault: true,
};