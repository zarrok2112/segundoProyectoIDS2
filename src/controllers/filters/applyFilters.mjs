import Boom from '@hapi/boom';
import { FILTERS } from '../../commons/constants.js';

const PayloadValidation = Joi.object({
    filters: Joi.array().min(1).items(
        Joi.string().valid(FILTERS.NEGATIVE, FILTERS.GREYSCALE, FILTERS.BLUR)
    ),
});

const applyFilters = async (payload) => {
    try {
        await PayloadValidation.validateAsync(payload);
    } catch (e) {
        throw Boom.badData(e.message, { e });
    }
    const newProcess = new Process(payload);
    await newProcess.save();
    return newProcess;
};

export default applyFilters;