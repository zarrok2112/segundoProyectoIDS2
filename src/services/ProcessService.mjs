import Boom from '@hapi/boom';
import Joi from 'joi';
import { FILTERS } from '../commons/constants.mjs';

class ProcessService {
  processRepository = null;

  minioServise = null;

  playloadValidation = Joi.object({
    filters: Joi.array().requited().min(1)
      .items(
        Joi.string().valid(FILTERS.NEGATIVE, FILTERS.GREYSCALE, FILTERS.BLUR),
      ),
    images: Joi.array().required().min(1),
  }).required();

  constructor(processRepository) {
    this.processRepository = processRepository;
  }

  async applyFilters(payload) {
    try {
      await this.payloadValidation.validateAsync(payload);
    } catch (e) {
      throw Boom.badData(e.message, { e });
    }

    const process = await this.processRepository.save(payload);
    return process;
  }
}

export default ProcessService;
