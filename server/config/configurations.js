export default {
    development: {
        database: {
            url: 'mongodb://localhost:27020/shorten_url'
        }
    },
    production: {
        database: {
           url:'mongodb://localhost:27020/shorten_url'
        }
    },
    testing: {
        database: {
           url: 'mongodb://localhost:27020/shorten_url_test'
        }
    }
};