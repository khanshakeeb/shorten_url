export default {
    development: {
        database: {
            url: 'mongodb://localhost:27020/shorten_url'
        },
        shortURL: {
            baseUrl: 'http://localhost:3001'
        }
    },
    production: {
        database: {
            url: 'mongodb://localhost:27020/shorten_url',
            baseUrl: 'http://localhost:3001'
        }
    },
    testing: {
        database: {
            url: 'mongodb://localhost:27020/shorten_url_test'
        }
    }
};