import {customAlphabet} from 'nanoid';
import ShortenUrlModel from '../models/shorten_url.model';
import {APP_CONST} from '../utils';
import configurations from '../../config';

class ShortenUrlService {
    constructor(shortenModel) {
        this.shortenModel = shortenModel;
    }

    async get(_id) {
        return await this.shortenModel.findOne({_id});
    }

    async create(data) {
        const {longUrl = null} = data;
        const {SHORT_CODE_LENGTH, CUSTOM_ALPHABET_SET} = APP_CONST;
        const nanoid = customAlphabet(CUSTOM_ALPHABET_SET, SHORT_CODE_LENGTH);
        const {baseUrl} = configurations.get('shortURL');
        const shortCode = nanoid();
        const shortenUrlRecord = new this.shortenModel({
            shortCode,
            longUrl,
            shortURL: `${baseUrl}/short-url/${shortCode}`
        });
        return await shortenUrlRecord.save();
    }

    async delete(_id) {
        return await this.shortenModel.remove({_id});
    }

    async findAll() {
        return await this.shortenModel.find().exec();
    }

    async findByCode(code) {
        return await this.shortenModel.findOne({shortCode: code}).exec();
    }
}

export default new ShortenUrlService(ShortenUrlModel);