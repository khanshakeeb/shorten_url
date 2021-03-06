import ShortenUrlService from '../services/shorten_url.service';
import {STATUS_CODE} from "../utils";

class ShortenUrlController {
    constructor(shortenUrlService) {
        this.shortenUrlService = shortenUrlService;
    }

    async get(req, res) {
        const {params} = req;
        try {
            const response = await this.shortenUrlService.get(params.id);
            res
                .status(STATUS_CODE.SUCCESS)
                .json(response);
        } catch (error) {
            res
                .status(STATUS_CODE.BAD_REQUEST)
                .json(error);
        }
    }

    async delete(req, res) {
        const {params} = req;
        try {
            const response = await this.shortenUrlService.delete(params.id);
            res
                .status(STATUS_CODE.SUCCESS)
                .json(response);
        } catch (error) {
            res
                .status(STATUS_CODE.BAD_REQUEST)
                .json(error);
        }
    }

    async getAll(req, res) {
        try {
            const response = await this.shortenUrlService.findAll();
            res
                .status(STATUS_CODE.SUCCESS)
                .json(response);
        } catch (error) {
            res
                .status(STATUS_CODE.BAD_REQUEST)
                .json(error);
        }
    }

    async create(req, res) {
        try {
            const {body} = req;
            const response = await this.shortenUrlService.create(body);
            res
                .status(STATUS_CODE.SUCCESS)
                .json(response);

        } catch (error) {
            res
                .status(STATUS_CODE.BAD_REQUEST)
                .json(error);
        }
    }

    async shortUrlCode(req, res) {
        try {
            const {params} = req;
            const isExists = await this.shortenUrlService.findByCode(params.code);
            if (!isExists) res
                .status(STATUS_CODE.SUCCESS)
                .json({message: 'Sorry we cannot find this code'});

            res.redirect(isExists.longUrl);
        } catch (error) {
            res
                .status(STATUS_CODE.BAD_REQUEST)
                .json(error);
        }
    }
}

export default new ShortenUrlController(ShortenUrlService);