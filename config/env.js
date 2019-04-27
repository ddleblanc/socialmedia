var secret = ('remember remember the 5th of november');

var env = {
    webPort: process.env.PORT || 3000,
    dbHost: process.env.DB_HOST || 'localhost',
    dbPort: process.env.DB_PORT || '',
    dbUser: process.env.DB_USER || '',
    dbPassword: process.env.DB_PASSWORD || '',
    dbDatabase: process.env.DB_DATABASE || 'fitauth'
}

var dburl = process.env.NODE_ENV === 'production' ?
    'mongodb://' + env.dbUser + ':' + env.dbPassword + '@' + env.dbHost + ':' + env.dbPort + '/' + env.dbDatabase :
    'mongodb://localhost/' + env.dbDatabase;

var uploadDestination = process.env.NODE_ENV === 'production' ?
    './public/assets' :
    "./angular-src/src/assets"

module.exports = {
    env: env,
    dburl: dburl,
    secret: secret,
    uploadDestination: uploadDestination
};