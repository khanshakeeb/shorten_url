import ShortenUrlController from './controllers/shorten_url.controller';

export default (app)=>{
    app.get('/',(req, res)=>{
        res.json({
            text: 'Rest API server is running...'
        })
    });

    app.get('/api/v1/short-urls/:id', (req, res)=> ShortenUrlController.get(req,res));
    app.get('/api/v1/short-urls', (req, res)=> ShortenUrlController.getAll(req,res));
    app.post('/api/v1/short-urls', (req, res)=> ShortenUrlController.create(req,res));

};